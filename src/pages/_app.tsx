import '../styles/global.css';

import type { AppProps } from 'next/app';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { AppConfig } from '@/utils/AppConfig';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero showSection={true} />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
