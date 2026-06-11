import React from 'react';

type IHeroProps = {
  showSection?: boolean;
};

const Hero = (props: IHeroProps) => {
  return (
    <div id="top" className="relative overflow-hidden bg-black text-white">
      {/* Background Image Container with Ken Burns effect */}
      <div
        className="animate-ken-burns absolute inset-0 bg-tools-img bg-cover bg-center opacity-60 blur-[0.5px]"
        style={{ willChange: 'transform' }}
      ></div>

      {/* Dark Overlay with radial gradient for premium vignette look */}
      <div className="from-black/55 via-black/35 absolute inset-0 bg-gradient-to-b to-black/80"></div>

      {/* Ambient Glow Effects */}
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[60%] w-[50%] select-none rounded-full bg-[#adbdff]/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[60%] w-[50%] select-none rounded-full bg-[#adbdff]/5 blur-[120px]"></div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header Logo centered at the top */}
        <header className="animate-logo-fade flex flex-col items-center justify-center">
          <div className="group flex cursor-pointer flex-row items-center justify-center gap-2">
            <img
              src="/assets/images/logo26-white.png"
              width={props.showSection ? 326 : 164}
              height={props.showSection ? 326 : 164}
              alt="Coto Photo Logo"
              className="drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)] transition-all duration-700 ease-out group-hover:rotate-[6deg] group-hover:scale-105"
            />
            {/* <span 
              className={`font-serif italic font-light tracking-[0.18em] transition-all duration-500 group-hover:text-amber-200 select-none ${
                props.showSection ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
              }`}
            >
              {AppConfig.site_name.toUpperCase()}
            </span> */}
          </div>
        </header>

        {/* Hero Body Text */}
        {props.showSection && (
          <main className="sm:pb-18 md:pb-22 flex flex-col items-center justify-center pb-14 text-center">
            <div className="max-w-4xl">
              <h1 className="lg:text-7xl animate-fade-in-up text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Un recuerdo{' '}
                <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-100 bg-clip-text text-transparent drop-shadow-md">
                  para toda la vida
                </span>
                .
              </h1>

              <p className="animate-fade-in-up fill-mode-forwards mx-auto mt-5 max-w-2xl text-lg font-medium tracking-wide text-gray-200/90 opacity-0 delay-200 sm:text-xl md:text-2xl">
                Bodas, bautizos, comuniones y eventos.
              </p>
            </div>
          </main>
        )}
      </div>

      {/* Styled JSX for scoped animation keyframes */}
      <style jsx>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1.08) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.01) translate3d(0, 0, 0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes logoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.96) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-ken-burns {
          animation: kenBurns 18s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-logo-fade {
          animation: logoFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-200 {
          animation-delay: 250ms;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export { Hero };
