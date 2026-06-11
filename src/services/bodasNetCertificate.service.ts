import type { ICertificate } from '@/models/certificate.model';
import type { ICertificateService } from './certificate.service';

export class BodasNetCertificateService implements ICertificateService {
  async getCertificates(): Promise<ICertificate[]> {
    // In a real application, this could fetch from a backend API or local asset database.
    // SRP & DIP ensure that the UI renders whatever is provided without care for its origin.
    return [
      {
        id: 'bn-cert-rec-1',
        title: 'Recomendado',
        year: '5.0 / 5',
        issuer: 'bodas.net',
        opinionsCount: 2,
        description: 'Distintivo de calidad y excelencia. 100% de opiniones con la máxima puntuación de 5 estrellas.',
      },
      {
        id: 'bn-cert-rec-2',
        title: 'Recomendado',
        year: '5.0 / 5',
        issuer: 'bodas.net',
        opinionsCount: 5,
        description: 'Distintivo de calidad y excelencia. 100% de opiniones con la máxima puntuación de 5 estrellas.',
      },
      {
        id: 'bn-cert-rec-3' ,
        title: 'Recomendado',
        year: '5.0 / 5',
        issuer: 'bodas.net',
        opinionsCount: 10,
        description: 'Distintivo de calidad y excelencia. 100% de opiniones con la máxima puntuación de 5 estrellas.',
      },
    ];
  }
}
