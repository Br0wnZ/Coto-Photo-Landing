import '../styles/global.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { AppConfig } from '@/utils/AppConfig';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { services } = router.query;
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero showSection={!services} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
