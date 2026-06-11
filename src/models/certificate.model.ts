export interface ICertificate {
  id: string;
  title: string; // e.g. "Wedding Award"
  year: string; // e.g. "2024" or a rating like "5.0 / 5"
  issuer: 'bodas.net' | string;
  description?: string;
  badgeUrl?: string; // Optional if we use custom rendering
  opinionsCount?: number;
}

