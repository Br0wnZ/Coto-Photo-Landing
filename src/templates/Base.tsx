import { useEffect, useState } from 'react';

import { ReviewsAndOpinions } from '@/components/reviews/ReviewsAndOpinions';
import type { ICertificate } from '@/models/certificate.model';
import type { IReview } from '@/models/review.model';
import { BodasNetCertificateService } from '@/services/bodasNetCertificate.service';
import { BodasNetReviewService } from '@/services/bodasNetReview.service';

// import { Banner } from './Banner';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [certificates, setCertificates] = useState<ICertificate[]>([]);

  useEffect(() => {
    const reviewService = new BodasNetReviewService();
    const certificateService = new BodasNetCertificateService();

    reviewService.getReviews().then((data) => setReviews(data));
    certificateService.getCertificates().then((data) => setCertificates(data));
  }, []);

  return (
    <>
      <VerticalFeatures />
      <ReviewsAndOpinions reviews={reviews} certificates={certificates} />
    </>
  );
};

export { Base };
