// Tautan profil akademik — data faktual (bukan teks antarmuka), sama di
// kedua bahasa, sehingga disimpan terpisah dari berkas terjemahan.
// Sumber: Lampiran A dokumen rancang bangun.
export interface AcademicProfile {
  name: string;
  url: string;
}

export const academicProfiles: AcademicProfile[] = [
  { name: 'ORCID', url: 'https://orcid.org/0000-0002-1629-992X' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=vU41v1EAAAAJ' },
  { name: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=57223107515' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Andri-Hendrizal' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/andri-hendrizal' },
];
