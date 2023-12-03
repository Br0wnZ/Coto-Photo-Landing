import { useRouter } from 'next/router';

import AudioGuestbookSection from './audio-guestbook/AudioGuestbook';
import PhotoboothSection from './photomaton/Photomaton';
import PrePostServiceSection from './pre-post/PrePost';
import Video360Section from './video-360/Video360';

const Services = () => {
  const router = useRouter();
  const { services } = router.query;

  const renderSwitch = () => {
    switch (services) {
      case 'AudioGuestbook':
        return <AudioGuestbookSection />;
      case 'Video360':
        return <Video360Section />;
      case 'Photocall':
        return <PhotoboothSection />;
      case 'PrePost':
        return <PrePostServiceSection />;
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
