import fallbackSnapshot from '../data/publications-fallback.json';
import { manualPublications } from '../data/publications-manual';

// Author ID OpenAlex Andri Hendrizal (Lampiran A). Dipakai sebagai sumber
// utama karena OpenAlex mengindeks artikel yang tidak mencantumkan ORCID,
// sehingga query Author ID biasanya lebih lengkap (catatan pengembangan,
// Bagian 5 dokumen rancang bangun).
const AUTHOR_ID = 'A5054517180';
const ORCID = '0000-0002-1629-992X';

// Bentuk filter resmi yang dinormalisasi OpenAlex adalah authorships.author.id.
const PRIMARY_URL = `https://api.openalex.org/works?filter=authorships.author.id:${AUTHOR_ID}&per_page=200&sort=publication_date:desc`;
// Query cadangan bila query utama gagal/kosong (Bagian 5 dokumen).
const SECONDARY_URL = `https://api.openalex.org/works?filter=author.orcid:${ORCID}&per_page=200`;

const FETCH_TIMEOUT_MS = 10_000;

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string | null;
  year: number | null;
  publicationDate: string | null;
  citedByCount: number;
  doi: string | null;
  isOA: boolean;
  workType: string;
  source: 'openalex' | 'manual';
}

interface OpenAlexWork {
  id: string;
  title?: string | null;
  display_name?: string | null;
  authorships?: Array<{ author?: { display_name?: string }; raw_author_name?: string }>;
  primary_location?: { source?: { display_name?: string } | null } | null;
  publication_year?: number | null;
  publication_date?: string | null;
  cited_by_count?: number;
  doi?: string | null;
  ids?: { doi?: string };
  open_access?: { is_oa?: boolean };
  type?: string;
}

async function fetchJson(url: string): Promise<{ results: OpenAlexWork[] }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) {
      throw new Error(`OpenAlex responded with HTTP ${res.status}`);
    }
    return (await res.json()) as { results: OpenAlexWork[] };
  } finally {
    clearTimeout(timer);
  }
}

async function fetchLiveWorks(): Promise<OpenAlexWork[]> {
  try {
    const data = await fetchJson(PRIMARY_URL);
    if (Array.isArray(data.results) && data.results.length > 0) {
      return data.results;
    }
    throw new Error('Primary OpenAlex query returned no results');
  } catch (primaryError) {
    console.warn('[openalex] primary query failed, trying ORCID fallback query:', primaryError);
    const data = await fetchJson(SECONDARY_URL);
    return data.results ?? [];
  }
}

function normalizeWork(work: OpenAlexWork): Publication {
  const authors =
    work.authorships?.map((a) => a.author?.display_name ?? a.raw_author_name ?? 'Unknown').filter(Boolean) ?? [];

  return {
    id: work.id,
    title: work.title ?? work.display_name ?? '[Untitled]',
    authors,
    venue: work.primary_location?.source?.display_name ?? null,
    year: work.publication_year ?? null,
    publicationDate: work.publication_date ?? null,
    citedByCount: work.cited_by_count ?? 0,
    doi: work.doi ?? work.ids?.doi ?? null,
    isOA: Boolean(work.open_access?.is_oa),
    workType: work.type ?? 'article',
    source: 'openalex',
  };
}

function sortByRecency(a: Publication, b: Publication): number {
  if (a.publicationDate && b.publicationDate) return b.publicationDate.localeCompare(a.publicationDate);
  if (a.publicationDate) return -1;
  if (b.publicationDate) return 1;
  return (b.year ?? 0) - (a.year ?? 0);
}

// Nama penulis pemilik situs terekam dengan beberapa variasi ("A Hendrizal",
// "A Hendrizali", "Andri Hendrizal" — catatan pengembangan, Bagian 5
// dokumen). Cocokkan longgar lewat "hendrizal" agar semua varian tertebalkan.
export function isSiteOwner(authorName: string): boolean {
  return /hendrizal/i.test(authorName);
}

let cache: Publication[] | null = null;

/**
 * Mengambil seluruh publikasi (OpenAlex + entri manual), diurutkan dari
 * yang terbaru. Wajib ada mekanisme cadangan (Bagian 5 dokumen): bila
 * pengambilan langsung dari OpenAlex gagal saat build, pakai snapshot
 * terakhir yang tersimpan di src/data/publications-fallback.json — situs
 * tidak boleh gagal terbangun karena API sedang bermasalah. Jalankan
 * `npm run fetch:publications` sesekali untuk memperbarui snapshot itu.
 */
export async function getPublications(): Promise<Publication[]> {
  if (cache) return cache;

  let works: OpenAlexWork[];
  try {
    works = await fetchLiveWorks();
  } catch (error) {
    console.warn(
      '[openalex] live fetch failed at build time, falling back to committed snapshot ' +
        `(fetchedAt: ${fallbackSnapshot.fetchedAt ?? 'never'}):`,
      error,
    );
    works = (fallbackSnapshot.results ?? []) as OpenAlexWork[];
  }

  const openAlexPublications = works.map(normalizeWork);
  cache = [...openAlexPublications, ...manualPublications].sort(sortByRecency);
  return cache;
}
