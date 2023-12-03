import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { RefObject } from 'react';
import { useRef } from 'react';

import { useIsVisible } from '@/hooks/useIsVisible';
import type { VerticalFeatureRowProps } from '@/models/vertical-feature.model';

const VerticalFeatureRow = (props: VerticalFeatureRowProps) => {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    'hover:cursor-pointer',
    'transform transition duration-300',
    'hover:scale-105',
    {
      'flex-row-reverse': props.reverse,
    },
    `transition-opacity duration-700 ease-in ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`,
  );

  const router = useRouter();

  const navigateToService = (serviceName: string) => {
    router.push(`/services/${serviceName}`);
  };

  return (
    <div
      ref={ref}
      className={verticalFeatureClass}
      onClick={() => navigateToService(props.link!)}
    >
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <Image
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          width="0"
          height="0"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
