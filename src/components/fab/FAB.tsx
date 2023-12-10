import Link from 'next/link';

type IFABProps = {
  isMobile?: boolean;
};

export const FAB = ({ isMobile }: IFABProps) => {
  return (
    <Link
      href={isMobile ? 'https://wa.me/665422051' : '/about'}
      target={isMobile ? '_blank' : ''}
    >
      <div className="fixed bottom-4 right-4 block">
        <button className="rounded-full bg-[#0099ff] p-4 font-bold text-white hover:bg-blue-700">
          <svg
            fill="#ffffff"
            height="40px"
            width="40px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 217.762 217.762"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path d="M108.881,5.334C48.844,5.334,0,45.339,0,94.512c0,28.976,16.84,55.715,45.332,72.454 c-3.953,18.48-12.812,31.448-12.909,31.588l-9.685,13.873l16.798-2.153c1.935-0.249,47.001-6.222,79.122-26.942 c26.378-1.92,50.877-11.597,69.181-27.364c19.296-16.623,29.923-38.448,29.923-61.455C217.762,45.339,168.918,5.334,108.881,5.334z M115.762,168.489l-2.049,0.117l-1.704,1.145c-18.679,12.548-43.685,19.509-59.416,22.913c3.3-7.377,6.768-17.184,8.499-28.506 l0.809-5.292l-4.741-2.485C30.761,142.547,15,119.42,15,94.512c0-40.901,42.115-74.178,93.881-74.178s93.881,33.276,93.881,74.178 C202.762,133.194,164.547,165.688,115.762,168.489z"></path>{' '}
            </g>
          </svg>
        </button>
      </div>
    </Link>
  );
};
