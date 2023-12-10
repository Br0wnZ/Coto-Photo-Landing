import React, { useEffect, useState } from 'react';

import type { ImageItem } from '@/models/image.model';

const Carousel = ({ slides }: { slides: ImageItem[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  const nextImage = () =>
    currentImageIndex === slides.length - 1
      ? 0
      : setCurrentImageIndex(currentImageIndex + 1);

  const prevImage = () =>
    currentImageIndex === 0
      ? slides.length - 1
      : setCurrentImageIndex(currentImageIndex - 1);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="relative">
          {slides.map((image, index) => (
            <img
              loading="lazy"
              key={index}
              src={image.image}
              alt={`Slide ${index + 1}`}
              className={`absolute left-0 top-0 h-auto w-full object-scale-down transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        {currentImageIndex > 0 && (
          <button
            type="button"
            className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-1.5 focus:outline-none"
            onClick={() => prevImage()}
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
              <svg
                className="h-4 w-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
        )}
        {currentImageIndex < slides.length - 1 && (
          <button
            type="button"
            className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-1.5 focus:outline-none"
            onClick={() => nextImage()}
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
              <svg
                className="h-4 w-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export { Carousel };
