import React from 'react';

import type { IReview } from '@/models/review.model';

type ReviewCardProps = {
  review: IReview;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { author, rating, date, title, comment, sourceUrl } = review;

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <div>
        {/* Rating Stars */}
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={`h-5 w-5 ${
                index < rating ? 'text-amber-400' : 'text-gray-200'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Title */}
        {title && (
          <h4 className="mb-2 line-clamp-1 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
            {title}
          </h4>
        )}

        {/* Quote Comment */}
        <p className="relative mb-6 text-sm italic leading-relaxed text-gray-600">
          <span className="absolute -left-2 -top-2 select-none font-serif text-4xl text-indigo-100">
            “
          </span>
          <span className="relative z-10">{comment}</span>
        </p>
      </div>

      {/* Author and Date */}
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">{author}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>

        {/* Source Badge/Link */}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 transition-all duration-300 hover:bg-red-100"
          >
            <span>bodas.net</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export { ReviewCard };
