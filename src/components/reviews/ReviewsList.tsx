import React from 'react';

import type { IReview } from '@/models/review.model';

import { ReviewCard } from './ReviewCard';

type ReviewsListProps = {
  reviews: IReview[];
};

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export { ReviewsList };
