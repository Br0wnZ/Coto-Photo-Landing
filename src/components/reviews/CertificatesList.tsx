import React from 'react';

import type { ICertificate } from '@/models/certificate.model';

import { CertificateBadge } from './CertificateBadge';

type CertificatesListProps = {
  certificates: ICertificate[];
};

const CertificatesList = ({ certificates }: CertificatesListProps) => {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-3">
      {certificates.map((certificate) => (
        <CertificateBadge key={certificate.id} certificate={certificate} />
      ))}
    </div>
  );
};

export { CertificatesList };
