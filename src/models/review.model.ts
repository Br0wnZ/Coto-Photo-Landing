export interface IReview {
  id: string;
  author: string;
  rating: number; // e.g. 5
  date: string; // e.g. "14 de Septiembre de 2024"
  comment: string;
  title?: string;
  source: 'bodas.net' | 'google' | string;
  sourceUrl?: string;
}
