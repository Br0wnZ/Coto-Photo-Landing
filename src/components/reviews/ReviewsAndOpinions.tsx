import React from 'react';

import { Section } from '@/layout/Section';
import type { ICertificate } from '@/models/certificate.model';
import type { IReview } from '@/models/review.model';

import { CertificatesList } from './CertificatesList';
import { ReviewsList } from './ReviewsList';

type ReviewsAndOpinionsProps = {
  reviews: IReview[];
  certificates: ICertificate[];
};

const ReviewsAndOpinions = ({
  reviews,
  certificates,
}: ReviewsAndOpinionsProps) => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-12">
      <Section
        title="Reseñas y opiniones"
        description="La felicidad de nuestras parejas es nuestro mayor orgullo. Conoce los reconocimientos y opiniones reales de quienes han confiado en nosotros"
      >
        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-xl font-bold uppercase tracking-wider text-gray-500">
            Nuestros Reconocimientos
          </h3>
          <CertificatesList certificates={certificates} />
        </div>

        {/* Decorative Divider */}
        <div className="relative mb-16 flex items-center justify-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          <div className="absolute bg-white px-4">
            <svg
              className="h-6 w-6 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h3 className="mb-8 text-center text-xl font-bold uppercase tracking-wider text-gray-500">
            Lo Que Opinan Las Parejas
          </h3>
          <ReviewsList reviews={reviews} />
        </div>

        {/* Call to action link to full page */}
        <div className="mt-12 text-center">
          <a
            href="https://www.bodas.net/animacion/coto-photo--e232894c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-rose-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/30"
          >
            <span>Ver más opiniones en bodas.net</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </Section>
    </div>
  );
};

export { ReviewsAndOpinions };
