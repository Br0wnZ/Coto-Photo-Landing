import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { FAB } from '@/components/fab/FAB';
import { ScrollToTopControlller } from '@/hooks/useScrollToTop';
import useWindowDimensions from '@/hooks/useWindowDimension';
import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { AppConfig } from '@/utils/AppConfig';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { services } = router.query;
  const { width } = useWindowDimensions();

  ScrollToTopControlller();
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero showSection={!services} />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
      {router.pathname !== '/about' && (
        <FAB isMobile={Boolean(width && width < 768)} />
      )}
    </div>
  );
};

export default MyApp;
