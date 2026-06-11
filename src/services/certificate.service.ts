import type { ICertificate } from '@/models/certificate.model';

export interface ICertificateService {
  getCertificates(): Promise<ICertificate[]>;
}
