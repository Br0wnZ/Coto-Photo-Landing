import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { ScrollReveal } from '@/components/feature/ScrollReveal';
import { Meta } from '@/layout/Meta';

export default function Dosier() {
  const router = useRouter();

  // Calculator State
  const [fotomatonHrs, setFotomatonHrs] = useState<string>('none');
  const [video360Hrs, setVideo360Hrs] = useState<string>('none');
  const [vogueOption, setVogueOption] = useState<string>('none');
  const [audioGuestbook, setAudioGuestbook] = useState<boolean>(false);
  const [prePost, setPrePost] = useState<boolean>(false);
  const [neonExtra, setNeonExtra] = useState<boolean>(false);
  const [calculatedTotal, setCalculatedTotal] = useState<number>(0);

  // Pricing definitions
  const fotomatonPrices: Record<string, number> = {
    none: 0,
    '1h': 150,
    '2h': 270,
    '3h': 340,
  };
  const video360Prices: Record<string, number> = {
    none: 0,
    '1h': 270,
    '2h': 370,
    '3h': 450,
  };
  const voguePrices: Record<string, number> = {
    none: 0,
    full: 380,
    full_1h: 530,
    full_2h: 650,
  };
  const audioGuestbookPrice = 70;
  const prePostPrice = 270;
  const neonExtraPrice = 20;

  // Calculate total price
  useEffect(() => {
    let total = 0;
    total += fotomatonPrices[fotomatonHrs] || 0;
    total += video360Prices[video360Hrs] || 0;
    total += voguePrices[vogueOption] || 0;
    if (audioGuestbook) total += audioGuestbookPrice;
    if (prePost) total += prePostPrice;
    if (
      neonExtra &&
      (fotomatonHrs !== 'none' ||
        vogueOption.includes('1h') ||
        vogueOption.includes('2h'))
    ) {
      total += neonExtraPrice;
    }
    setCalculatedTotal(total);
  }, [
    fotomatonHrs,
    video360Hrs,
    vogueOption,
    audioGuestbook,
    prePost,
    neonExtra,
  ]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#f7f4ef] font-sans text-gray-800 selection:bg-[#c96f53]/20 selection:text-[#c96f53]">
      <Meta
        title="Dossier de Servicios & Tarifas 2026 - Coto Photo"
        description="Explora nuestros servicios de fotomatón, plataforma 360, audio guestbook, photocall Vogue y fotografía pre&post para bodas y eventos."
      />

      {/* Header Navbar - Transparent blur */}
      <header className="bg-[#faf8f5]/85 sticky top-0 z-50 flex items-center justify-between border-b border-gray-200/40 px-6 py-4 backdrop-blur-md transition-all md:px-12 lg:grid lg:grid-cols-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/')}
            className="group flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-[#c96f53]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span className="hidden sm:inline">Volver</span>
          </button>
          <span className="hidden text-gray-300 sm:inline">|</span>
          <img
            src="/assets/images/logo26-2.png"
            alt="Coto Photo Logo"
            className="h-8 cursor-pointer object-contain md:h-10"
            onClick={() => router.push('/')}
          />
        </div>

        {/* Navigation links for desktop */}
        <nav className="hidden items-center justify-center gap-8 text-sm font-semibold uppercase tracking-wider text-gray-600 lg:flex">
          <button
            onClick={() => scrollToSection('quienes-somos')}
            className="whitespace-nowrap transition-colors hover:text-[#c96f53]"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection('servicios')}
            className="whitespace-nowrap transition-colors hover:text-[#c96f53]"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('paso-a-paso')}
            className="whitespace-nowrap transition-colors hover:text-[#c96f53]"
          >
            Paso a Paso
          </button>
          <button
            onClick={() => scrollToSection('tarifas')}
            className="whitespace-nowrap transition-colors hover:text-[#c96f53]"
          >
            Calculadora
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="whitespace-nowrap transition-colors hover:text-[#c96f53]"
          >
            Contacto
          </button>
        </nav>

        <div className="hidden lg:block"></div>
      </header>

      {/* 1. Hero Section (Portada) */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden border-b border-gray-200/30 px-4 text-center">
        <div className="absolute right-1/4 top-1/4 -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-[#c96f53]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-[#a39382]/5 blur-3xl delay-1000"></div>

        <ScrollReveal animation="scale-up" duration={900}>
          <img
            src="/assets/images/logo26-2.png"
            alt="Coto Photo Logo"
            className="mx-auto mb-8 w-64 object-contain drop-shadow-sm sm:w-80 md:w-96"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200} duration={800}>
          <h1 className="font-serif text-3xl font-light uppercase tracking-[0.25em] text-gray-900 sm:text-5xl md:text-6xl">
            DOSIER 2026
          </h1>
          <div className="mx-auto my-6 h-0.5 w-24 bg-[#c96f53]"></div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={400} duration={800}>
          <p className="max-w-xl font-sans text-base font-semibold uppercase leading-relaxed tracking-widest text-gray-500 sm:text-lg md:text-xl">
            Servicios & Tarifas para Bodas y Eventos Exclusivos
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={600} duration={800}>
          <div className="my-10 flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('quienes-somos')}
              className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl md:text-base"
            >
              Comenzar a explorar
            </button>
            <button
              onClick={() => scrollToSection('tarifas')}
              className="rounded-full border border-gray-200/80 bg-white px-8 py-3.5 text-sm font-semibold text-gray-800 shadow-md transition-all hover:bg-gray-50 md:text-base"
            >
              Ver Tarifas
            </button>
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[0.1rem] hidden animate-bounce sm:block">
          <button
            onClick={() => scrollToSection('quienes-somos')}
            aria-label="Bajar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-gray-400 transition-colors hover:text-[#c96f53]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* 2. ¿Quiénes Somos? Section */}
      <section
        id="quienes-somos"
        className="border-b border-gray-200/30 bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            <div className="space-y-6 md:col-span-7">
              <ScrollReveal animation="slide-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53] sm:text-sm">
                  SOBRE NOSOTROS
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold uppercase tracking-wider text-gray-900 sm:text-4xl">
                  ¿Quiénes Somos?
                </h2>
                <div className="mb-6 mt-3 h-0.5 w-16 bg-[#c96f53]"></div>
              </ScrollReveal>

              <ScrollReveal animation="fade-in" delay={150}>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  En CotoPhoto, damos vida a tus eventos con la tecnología más
                  divertida y espectacular del momento. Somos especialistas en
                  crear experiencias exclusivas para bodas y eventos, ofreciendo
                  un servicio único que garantiza la máxima diversión.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-in" delay={300}>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  Nuestro objetivo es convertir cada celebración en un recuerdo
                  inigualable. Tu evento merece un impacto visual diferente, y
                  nosotros nos encargamos de que tus invitados se lleven la
                  mejor experiencia posible.
                </p>
              </ScrollReveal>
            </div>

            <div className="md:col-span-5">
              <ScrollReveal animation="slide-right">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-100 bg-[#f5f0eb] shadow-2xl md:aspect-[3/4]">
                  <img
                    src="/assets/images/pre_post.webp"
                    alt="¿Quiénes Somos?"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visión General de Servicios */}
      <section id="servicios" className="bg-[#faf8f5] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53] sm:text-sm">
                EXPERIENCIAS
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold uppercase tracking-wider text-gray-900 sm:text-4xl">
                Nuestros Servicios
              </h2>
              <div className="mx-auto mb-4 mt-3 h-0.5 w-16 bg-[#c96f53]"></div>
              <p className="text-sm text-gray-500 sm:text-base">
                Ofrecemos las mejores experiencias de entretenimiento visual e
                impreso adaptadas a cada rincón de tu celebración.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 'fotomaton',
                title: 'Fotomatón Clásico',
                desc: 'Diversión tradicional con impresiones instantáneas y álbum de recuerdos.',
                img: '/assets/images/photo_call.webp',
              },
              {
                id: 'video360',
                title: 'Plataforma Vídeo 360º',
                desc: 'Vídeos slow-motion dinámicos y cinematográficos listos por QR.',
                img: '/assets/images/photo_booth.webp',
              },
              {
                id: 'vogue',
                title: 'Photocall Revista VOGUE',
                desc: 'El photocall más elegante y glamuroso. Exclusivo de Coto Photo.',
                img: '/assets/images/vogue_photocall.png',
              },
              {
                id: 'audio-guestbook',
                title: 'Teléfono Audio Guestbook',
                desc: 'Libro de firmas sonoro. Guarda los mensajes y risas con su propia voz.',
                img: '/assets/images/audiobook_2.webp',
              },
              {
                id: 'pre-post',
                title: 'Fotografía Pre & Post',
                desc: 'Capturas profesionales en la recepción impresas al instante en la barra.',
                img: '/assets/images/pre_post.webp',
              },
            ].map((serv, index) => (
              <ScrollReveal
                key={serv.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div
                  onClick={() => scrollToSection(serv.id)}
                  className="border-gray-150/60 group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={serv.img}
                      alt={serv.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 transition-colors group-hover:text-[#c96f53] sm:text-xl">
                        {serv.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                        {serv.desc}
                      </p>
                    </div>
                    <span className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#c96f53] group-hover:underline">
                      Saber más
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Detalle de Servicios Alternados */}
      <section className="bg-white py-12">
        {/* Servicio 1: Fotomaton */}
        <div
          id="fotomaton"
          className="scroll-mt-20 border-b border-gray-100 py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
              <div className="space-y-6 md:col-span-7">
                <ScrollReveal animation="slide-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53]">
                    SERVICIO MÁS POPULAR
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-bold uppercase tracking-wider text-gray-900 sm:text-3xl">
                    Fotomatón Clásico
                  </h2>
                  <p className="font-serif text-sm italic text-gray-400">
                    &quot;El alma de la fiesta&quot;
                  </p>
                  <div className="mb-4 mt-2 h-0.5 w-12 bg-[#c96f53]"></div>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    Nuestro fotomatón ofrece una experiencia interactiva con
                    atrezzo divertido y puesta en escena cuidada para capturar
                    los momentos más espontáneos. Tus invitados reciben sus
                    fotos de manera digital e impresa al instante y vídeos a
                    través de código QR, listos para compartir en redes.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                    ¿Qué incluye el servicio?
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500 sm:text-sm">
                    <li className="flex items-center gap-2">
                      ✓ Fotos y copias ilimitadas
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Álbum de recuerdos
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Galería online en tiempo real
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Descarga por código QR
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Personalización de marcos
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Alta resolución final
                    </li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="border-gray-150 shadow-xs rounded-xl border bg-[#faf8f5] px-4 py-2.5">
                      <span className="block text-[10px] font-bold uppercase text-gray-400">
                        1 Hora
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        150€
                      </span>
                    </div>
                    <div className="shadow-xs rounded-xl border border-[#c96f53]/30 bg-[#faf8f5] px-4 py-2.5">
                      <span className="block text-[10px] font-bold uppercase text-[#c96f53]">
                        2 Horas
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        270€
                      </span>
                    </div>
                    <div className="border-gray-150 shadow-xs rounded-xl border bg-[#faf8f5] px-4 py-2.5">
                      <span className="block text-[10px] font-bold uppercase text-gray-400">
                        3 Horas
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        340€
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] font-medium text-gray-400">
                    * Fondo floral con frase y luces de neón: +20€
                  </p>
                </ScrollReveal>
              </div>

              <div className="md:col-span-5">
                <ScrollReveal animation="slide-right">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-[#f5f0eb] shadow-xl">
                    <img
                      src="/assets/images/photo_call.webp"
                      alt="Fotomatón Clásico"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 2: Video 360 */}
        <div
          id="video360"
          className="scroll-mt-20 border-b border-gray-100 py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
              <div className="order-last md:order-first md:col-span-5">
                <ScrollReveal animation="slide-left">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-[#f5f0eb] shadow-xl">
                    <img
                      src="/assets/images/photo_booth.webp"
                      alt="Plataforma Vídeo 360"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="space-y-6 md:col-span-7">
                <ScrollReveal animation="slide-right">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53]">
                    TECNOLOGÍA EN EVENTOS
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-bold uppercase tracking-wider text-gray-900 sm:text-3xl">
                    Plataforma Vídeo 360º
                  </h2>
                  <p className="font-serif text-sm italic text-gray-400">
                    &quot;Vídeos dinámicos y cinematográficos&quot;
                  </p>
                  <div className="mb-4 mt-2 h-0.5 w-12 bg-[#c96f53]"></div>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    Lleva la tecnología más innovadora a tu evento con nuestra
                    plataforma 360. Es la propuesta ideal para crear vídeos
                    cinematográficos que sorprendan a todos tus invitados.
                    Combinamos cámaras de alta calidad con el efecto Slow Motion
                    para un acabado espectacular.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                    ¿Qué incluye el servicio?
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500 sm:text-sm">
                    <li className="flex items-center gap-2">
                      ✓ Vídeos ilimitados de alta calidad
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Efecto slow-motion personalizado
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Set de iluminación profesional
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Descarga instantánea por QR
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ 2 azafatas especializadas
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Galería online en tiempo real
                    </li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="border-gray-150 shadow-xs rounded-xl border bg-[#faf8f5] px-4 py-2.5">
                      <span className="block text-[10px] font-bold uppercase text-gray-400">
                        1 Hora
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        270€
                      </span>
                    </div>
                    <div className="border-gray-150 shadow-xs rounded-xl border bg-[#faf8f5] px-4 py-2.5">
                      <span className="block text-[10px] font-bold uppercase text-gray-400">
                        2 Horas
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        370€
                      </span>
                    </div>
                    <div className="border-gray-150 shadow-xs rounded-xl border bg-[#faf8f5] px-4 py-2.5">
                      <span className="block text-[10px] font-bold uppercase text-gray-400">
                        3 Horas
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        450€
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 3: Vogue Photocall */}
        <div id="vogue" className="scroll-mt-20 border-b border-gray-100 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
              <div className="space-y-6 md:col-span-7">
                <ScrollReveal animation="slide-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53]">
                    PROPUESTA EXCLUSIVA
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-bold uppercase tracking-wider text-gray-900 sm:text-3xl">
                    Photocall Revista VOGUE
                  </h2>
                  <p className="font-serif text-sm italic text-gray-400">
                    &quot;Siente el glamour de una portada&quot;
                  </p>
                  <div className="mb-4 mt-2 h-0.5 w-12 bg-[#c96f53]"></div>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    Dale un toque elegante y único a tu celebración con nuestro
                    Photocall VOGUE, el rincón perfecto para que tus invitados
                    se sientan protagonistas y se lleven recuerdos inolvidables.
                    Este servicio es{' '}
                    <strong>
                      exclusivo de nuestra empresa dentro de la provincia
                    </strong>
                    .
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                    ¿Qué incluye el servicio?
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500 sm:text-sm">
                    <li className="flex items-center gap-2">
                      ✓ Diseño tipo revista VOGUE gigante
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Personalización de textos de portada
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Transporte, montaje y desmontaje
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Estética e iluminación premium
                    </li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="flex flex-col gap-2 pt-4">
                    <div className="border-gray-150 shadow-xs flex max-w-md items-center justify-between rounded-xl border bg-[#faf8f5] px-4 py-2.5">
                      <span className="text-xs font-semibold uppercase text-gray-500">
                        Día Completo (Solo Photocall)
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        380€
                      </span>
                    </div>
                    <div className="shadow-xs flex max-w-md items-center justify-between rounded-xl border border-[#c96f53]/30 bg-[#faf8f5] px-4 py-2.5">
                      <span className="text-xs font-semibold uppercase text-[#c96f53]">
                        Día Completo + Fotomatón 1h
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        530€
                      </span>
                    </div>
                    <div className="border-gray-150 shadow-xs flex max-w-md items-center justify-between rounded-xl border bg-[#faf8f5] px-4 py-2.5">
                      <span className="text-xs font-semibold uppercase text-gray-500">
                        Día Completo + Fotomatón 2h
                      </span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">
                        650€
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="md:col-span-5">
                <ScrollReveal animation="slide-right">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-[#e5dcd3] shadow-2xl">
                    <img
                      src="/assets/images/vogue_photocall.png"
                      alt="Photocall VOGUE"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 4: Audio Guestbook */}
        <div
          id="audio-guestbook"
          className="scroll-mt-20 border-b border-gray-100 py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
              <div className="order-last md:order-first md:col-span-5">
                <ScrollReveal animation="slide-left">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-[#f5f0eb] shadow-xl">
                    <img
                      src="/assets/images/audiobook_2.webp"
                      alt="Teléfono Audio Guestbook"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="space-y-6 md:col-span-7">
                <ScrollReveal animation="slide-right">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53]">
                    NOVEDAD Y TENDENCIA
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-bold uppercase tracking-wider text-gray-900 sm:text-3xl">
                    Teléfono Audio Guestbook
                  </h2>
                  <p className="font-serif text-sm italic text-gray-400">
                    &quot;Sustituye el libro de firmas tradicional&quot;
                  </p>
                  <div className="mb-4 mt-2 h-0.5 w-12 bg-[#c96f53]"></div>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    Sustituimos el libro de firmas tradicional por una
                    experiencia sonora única. En nuestro teléfono retro, los
                    invitados pueden dejar sus mensajes, anécdotas, risas y
                    buenos deseos grabados con su propia voz. Un recuerdo súper
                    emotivo que dura para siempre.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                    ¿Qué incluye el servicio?
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500 sm:text-sm">
                    <li className="flex items-center gap-2">
                      ✓ Instalación en espacio destacado
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Grabación ilimitada durante el evento
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Teléfono retro de diseño elegante
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Archivo final editado con los mensajes
                    </li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="pt-2">
                    <div className="border-gray-150 shadow-xs inline-block rounded-xl border bg-[#faf8f5] px-5 py-3 text-center">
                      <span className="block text-[10px] font-bold uppercase text-gray-400">
                        Tarifa Día Completo
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#c96f53]">
                        70€
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 5: Pre & Post */}
        <div id="pre-post" className="scroll-mt-20 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
              <div className="space-y-6 md:col-span-7">
                <ScrollReveal animation="slide-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53]">
                    SERVICIO PIONERO
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-bold uppercase tracking-wider text-gray-900 sm:text-3xl">
                    Fotografía Pre & Post
                  </h2>
                  <p className="font-serif text-sm italic text-gray-400">
                    &quot;Un detalle exclusivo que marca la diferencia&quot;
                  </p>
                  <div className="mb-4 mt-2 h-0.5 w-12 bg-[#c96f53]"></div>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    Somos pioneros en un servicio sin competencia en la zona:
                    capturamos a tus invitados durante la recepción y les
                    entregamos la fotografía impresa y editada directamente en
                    la barra libre. Un sistema propio diseñado para que
                    disfruten de un recuerdo personalizado en mano.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                    ¿Qué incluye el servicio?
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500 sm:text-sm">
                    <li className="flex items-center gap-2">
                      ✓ Sesión durante la recepción
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Edición rápida in situ
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Impresión física de calidad
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Exposición en la barra libre
                    </li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="pt-2">
                    <div className="border-gray-150 shadow-xs inline-block rounded-xl border bg-[#faf8f5] px-5 py-3 text-center">
                      <span className="block text-[10px] font-bold uppercase text-gray-400">
                        Precio Único
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#c96f53]">
                        270€
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="md:col-span-5">
                <ScrollReveal animation="slide-right">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-[#f5f0eb] shadow-xl">
                    <img
                      src="/assets/images/pre_post.webp"
                      alt="Fotografía Pre&Post"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Paso a Paso Section */}
      <section
        id="paso-a-paso"
        className="scroll-mt-20 bg-[#faf8f5] py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53] sm:text-sm">
                PROCESO
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold uppercase tracking-wider text-gray-900 sm:text-4xl">
                Tu Evento <span className="whitespace-nowrap">Paso a Paso</span>
              </h2>
              <div className="mx-auto mb-4 mt-3 h-0.5 w-16 bg-[#c96f53]"></div>
              <p className="text-sm text-gray-500 sm:text-base">
                Cómo organizamos e instalamos el servicio para asegurar el éxito
                rotundo del día de la celebración.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="absolute inset-x-12 top-12 -z-10 hidden h-0.5 bg-gray-200/60 md:block"></div>

            {[
              {
                step: '01',
                title: 'Reserva',
                desc: 'Formalizamos la reserva tras definir fecha y lugar con una señal de 50€.',
              },
              {
                step: '02',
                title: 'Personalizar',
                desc: 'Reunión o llamada para adaptar marcos de fotos, música y efectos visuales.',
              },
              {
                step: '03',
                title: 'Montaje',
                desc: 'Llegamos con antelación de sobra para montar y realizar pruebas de iluminación.',
              },
              {
                step: '04',
                title: 'Experiencia',
                desc: 'Técnicos calificados dinamizan la zona en todo momento durante el servicio.',
              },
              {
                step: '05',
                title: 'Entrega',
                desc: 'Descargas instantáneas por código QR y envío digital completo a los novios.',
              },
            ].map((p, index) => (
              <ScrollReveal
                key={p.step}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="border-gray-150/60 flex h-full flex-col items-center rounded-2xl border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c96f53] font-serif text-base font-bold text-white shadow-md sm:text-lg">
                    {p.step}
                  </span>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-900 sm:text-base">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Calculadora de Presupuesto */}
      <section
        id="tarifas"
        className="border-gray-150/40 scroll-mt-20 border-t bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c96f53] sm:text-sm">
                COTIZACIÓN
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold uppercase tracking-wider text-gray-900 sm:text-4xl">
                Calculadora de Tarifas
              </h2>
              <div className="mx-auto mb-4 mt-3 h-0.5 w-16 bg-[#c96f53]"></div>
              <p className="text-sm text-gray-500 sm:text-base">
                Selecciona la configuración deseada y obtén una cotización
                inmediata y transparente para planificar tu presupuesto.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="scale-up" duration={800}>
            <div className="grid grid-cols-1 items-stretch gap-8 rounded-3xl border border-gray-200/50 bg-[#faf8f5] p-6 shadow-lg md:p-10 lg:grid-cols-12">
              {/* Selectors */}
              <div className="space-y-5 lg:col-span-8">
                {/* Fotomatón */}
                <div className="border-gray-150/60 flex flex-col justify-between gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                  <div>
                    <span className="block text-sm font-bold text-gray-900 sm:text-base">
                      1. Fotomatón Clásico
                    </span>
                    <span className="text-xs leading-relaxed text-gray-500">
                      Fotos y copias físicas ilimitadas + álbum de firmas.
                    </span>
                  </div>
                  <select
                    value={fotomatonHrs}
                    onChange={(e) => setFotomatonHrs(e.target.value)}
                    className="border-gray-250 rounded-xl border bg-[#faf8f5] p-2.5 text-sm font-semibold text-gray-700 focus:border-[#c96f53] focus:ring-[#c96f53] sm:text-base"
                  >
                    <option value="none">No incluir (0€)</option>
                    <option value="1h">1 Hora (150€)</option>
                    <option value="2h">2 Horas (270€)</option>
                    <option value="3h">3 Horas (340€)</option>
                  </select>
                </div>

                {/* Plataforma 360 */}
                <div className="border-gray-150/60 flex flex-col justify-between gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                  <div>
                    <span className="block text-sm font-bold text-gray-900 sm:text-base">
                      2. Plataforma de Vídeo 360º
                    </span>
                    <span className="text-xs leading-relaxed text-gray-500">
                      Vídeos cinematográficos slow-motion con descarga por QR.
                    </span>
                  </div>
                  <select
                    value={video360Hrs}
                    onChange={(e) => setVideo360Hrs(e.target.value)}
                    className="border-gray-250 rounded-xl border bg-[#faf8f5] p-2.5 text-sm font-semibold text-gray-700 focus:border-[#c96f53] focus:ring-[#c96f53] sm:text-base"
                  >
                    <option value="none">No incluir (0€)</option>
                    <option value="1h">1 Hora (270€)</option>
                    <option value="2h">2 Horas (370€)</option>
                    <option value="3h">3 Horas (450€)</option>
                  </select>
                </div>

                {/* Vogue */}
                <div className="border-gray-150/60 flex flex-col justify-between gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                  <div>
                    <span className="block text-sm font-bold text-gray-900 sm:text-base">
                      3. Photocall Revista VOGUE
                    </span>
                    <span className="text-xs leading-relaxed text-gray-500">
                      Montaje exclusivo y personalización. Opciones combinadas.
                    </span>
                  </div>
                  <select
                    value={vogueOption}
                    onChange={(e) => setVogueOption(e.target.value)}
                    className="border-gray-250 rounded-xl border bg-[#faf8f5] p-2.5 text-sm font-semibold text-gray-700 focus:border-[#c96f53] focus:ring-[#c96f53] sm:text-base"
                  >
                    <option value="none">No incluir (0€)</option>
                    <option value="full">Día Completo (380€)</option>
                    <option value="full_1h">
                      Día Completo + Fotomatón 1h (530€)
                    </option>
                    <option value="full_2h">
                      Día Completo + Fotomatón 2h (650€)
                    </option>
                  </select>
                </div>

                {/* Switches / Toggles */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Guestbook */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all ${
                      audioGuestbook
                        ? 'border-[#c96f53] bg-[#c96f53]/5 shadow-sm'
                        : 'border-gray-150/60 bg-white shadow-sm'
                    }`}
                  >
                    <div className="pr-2">
                      <span className="block text-sm font-bold text-gray-900">
                        Teléfono Audio Guestbook
                      </span>
                      <span className="text-xs text-gray-500">
                        Grabador de voz retro (Día comp. 70€)
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={audioGuestbook}
                      onChange={(e) => setAudioGuestbook(e.target.checked)}
                      className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-[#c96f53] focus:ring-2 focus:ring-[#c96f53]"
                    />
                  </label>

                  {/* Pre Post */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all ${
                      prePost
                        ? 'border-[#c96f53] bg-[#c96f53]/5 shadow-sm'
                        : 'border-gray-150/60 bg-white shadow-sm'
                    }`}
                  >
                    <div className="pr-2">
                      <span className="block text-sm font-bold text-gray-900">
                        Fotografía Pre & Post
                      </span>
                      <span className="text-xs text-gray-500">
                        Edición e impresión in situ (270€)
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={prePost}
                      onChange={(e) => setPrePost(e.target.checked)}
                      className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-[#c96f53] focus:ring-2 focus:ring-[#c96f53]"
                    />
                  </label>
                </div>

                {/* Extras Toggle (Conditional) */}
                {(fotomatonHrs !== 'none' ||
                  vogueOption.includes('1h') ||
                  vogueOption.includes('2h')) && (
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all ${
                      neonExtra
                        ? 'border-[#c96f53] bg-[#c96f53]/5 shadow-sm'
                        : 'border-gray-150/60 bg-white shadow-sm'
                    }`}
                  >
                    <div>
                      <span className="block text-sm font-bold text-gray-900">
                        Extra: Fondo floral con luces de neón
                      </span>
                      <span className="text-xs text-gray-500">
                        Un toque luminoso y elegante para el decorado (+20€)
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={neonExtra}
                      onChange={(e) => setNeonExtra(e.target.checked)}
                      className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-[#c96f53] focus:ring-2 focus:ring-[#c96f53]"
                    />
                  </label>
                )}
              </div>

              {/* Total Card */}
              <div className="border-gray-150 flex flex-col items-center justify-between rounded-2xl border bg-white p-6 text-center shadow-md md:p-8 lg:col-span-4">
                <div className="w-full">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
                    Presupuesto Estimado
                  </span>
                  <div className="inline-block w-full rounded-2xl border border-gray-100 bg-[#faf8f5] p-6 shadow-inner">
                    <span className="block font-serif text-4xl font-bold text-[#c96f53] transition-all sm:text-5xl">
                      {calculatedTotal}€
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-gray-400">
                  * Este importe es una estimación. Consúltanos para confirmar
                  disponibilidad de fecha y recibir un presupuesto formalizado.
                </p>

                <button
                  onClick={() => scrollToSection('contacto')}
                  className="mt-8 w-full rounded-xl bg-gray-900 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-gray-800 sm:text-base"
                >
                  Reservar esta combinación
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Contacto & Cierre Section */}
      <section
        id="contacto"
        className="relative scroll-mt-20 overflow-hidden bg-[#faf8f5] py-20 md:py-28"
      >
        <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#c96f53]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#a39382]/5 blur-3xl"></div>

        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal animation="scale-up">
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[#c96f53] sm:text-sm">
              COTO PHOTO
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold uppercase tracking-wider text-gray-900 sm:text-5xl">
              ¡Muchas Gracias!
            </h2>
            <div className="mx-auto mb-8 h-0.5 w-16 bg-[#c96f53]"></div>

            <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Estamos deseando formar parte de tu gran día y crear momentos
              inolvidables. Consúltanos disponibilidad de tu fecha sin
              compromiso.
            </p>
          </ScrollReveal>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="border-gray-150 rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400">
                  Teléfono / WhatsApp
                </span>
                <a
                  href="https://wa.me/+34665422051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-gray-900 transition-colors hover:text-[#c96f53] sm:text-lg"
                >
                  665 422 051
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="border-gray-150 rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400">
                  Email
                </span>
                <a
                  href="mailto:cotomoreno7@gmail.com"
                  className="break-all text-sm font-bold text-gray-900 transition-colors hover:text-[#c96f53] sm:text-base"
                >
                  cotomoreno7@gmail.com
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="border-gray-150 rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400">
                  Página Web
                </span>
                <a
                  href="https://cotophoto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-gray-900 transition-colors hover:text-[#c96f53] sm:text-lg"
                >
                  cotophoto.com
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in" delay={450}>
            <div className="mt-16 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Coto Photo © {new Date().getFullYear()} — Dossier de Servicios
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
