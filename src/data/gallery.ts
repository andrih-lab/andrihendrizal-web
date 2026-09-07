// Galeri foto lapangan (Bagian 5 dokumen rancang bangun, "Research").
export interface GalleryPhoto {
  src: string;
  alt: { en: string; id: string };
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/images/field-mangrove-1.webp',
    alt: {
      en: 'Measuring mangrove structure in the field',
      id: 'Mengukur struktur mangrove di lapangan',
    },
  },
];
