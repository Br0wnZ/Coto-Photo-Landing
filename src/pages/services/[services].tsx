import { useRouter } from 'next/router';

import AudioGuestbookPage from './audio-guestbook/page';
import PhotoboothPage from './photomaton/page';
import PrePostServicePage from './pre-post/page';
import Video360Page from './video-360/page';

const Services = () => {
  const router = useRouter();
  const { services } = router.query;

  const renderSwitch = () => {
    switch (services) {
      case 'AudioGuestbook':
        return <AudioGuestbookPage />;
      case 'Video360':
        return <Video360Page />;
      case 'Photocall':
        return <PhotoboothPage />;
      case 'PrePost':
        return <PrePostServicePage />;
      default:
        return 'foo';
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {renderSwitch()}
      </div>
    </div>
  );
};

export default Services;
