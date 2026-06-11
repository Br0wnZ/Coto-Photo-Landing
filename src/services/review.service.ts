import type { IReview } from '@/models/review.model';

export interface IReviewService {
  getReviews(): Promise<IReview[]>;
}
