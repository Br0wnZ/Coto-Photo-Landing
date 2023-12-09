import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const ScrollToTopControlller = () => {
  const { pathname } = useRouter();

  useEffect(
    () => () => {
      try {
        setTimeout(() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }, 0);
      } catch (error) {
        window.scrollTo(0, 0);
      }
    },
    [pathname],
  );

  return null;
};
