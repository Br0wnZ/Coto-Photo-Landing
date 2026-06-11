import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Meta } from '@/layout/Meta';
import { ScrollReveal } from '@/components/feature/ScrollReveal';

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
  const fotomatonPrices: Record<string, number> = { none: 0, '1h': 150, '2h': 270, '3h': 340 };
  const video360Prices: Record<string, number> = { none: 0, '1h': 270, '2h': 370, '3h': 450 };
  const voguePrices: Record<string, number> = { none: 0, full: 380, 'full_1h': 530, 'full_2h': 650 };
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
    if (neonExtra && (fotomatonHrs !== 'none' || vogueOption.includes('1h') || vogueOption.includes('2h'))) {
      total += neonExtraPrice;
    }
    setCalculatedTotal(total);
  }, [fotomatonHrs, video360Hrs, vogueOption, audioGuestbook, prePost, neonExtra]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-gray-800 font-sans selection:bg-[#c96f53]/20 selection:text-[#c96f53] scroll-smooth">
      <Meta
        title="Dossier de Servicios & Tarifas 2026 - Coto Photo"
        description="Explora nuestros servicios de fotomatón, plataforma 360, audio guestbook, photocall Vogue y fotografía pre&post para bodas y eventos."
      />

      {/* Header Navbar - Transparent blur */}
      <header className="sticky top-0 z-50 bg-[#faf8f5]/85 backdrop-blur-md border-b border-gray-200/40 py-4 px-6 md:px-12 flex justify-between lg:grid lg:grid-cols-3 items-center transition-all">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push('/')} 
            className="flex items-center gap-2 text-gray-700 hover:text-[#c96f53] font-medium transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:-translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span className="hidden sm:inline">Volver</span>
          </button>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <img src="/assets/images/logo26-2.png" alt="Coto Photo Logo" className="h-8 md:h-10 object-contain cursor-pointer" onClick={() => router.push('/')} />
        </div>

        {/* Navigation links for desktop */}
        <nav className="hidden lg:flex justify-center items-center gap-8 text-sm font-semibold tracking-wider text-gray-600 uppercase">
          <button onClick={() => scrollToSection('quienes-somos')} className="hover:text-[#c96f53] transition-colors whitespace-nowrap">Nosotros</button>
          <button onClick={() => scrollToSection('servicios')} className="hover:text-[#c96f53] transition-colors whitespace-nowrap">Servicios</button>
          <button onClick={() => scrollToSection('paso-a-paso')} className="hover:text-[#c96f53] transition-colors whitespace-nowrap">Paso a Paso</button>
          <button onClick={() => scrollToSection('tarifas')} className="hover:text-[#c96f53] transition-colors whitespace-nowrap">Calculadora</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-[#c96f53] transition-colors whitespace-nowrap">Contacto</button>
        </nav>

        <div className="hidden lg:block"></div>
      </header>

      {/* 1. Hero Section (Portada) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-gray-200/30">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#c96f53]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#a39382]/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

        <ScrollReveal animation="scale-up" duration={900}>
          <img src="/assets/images/logo26-2.png" alt="Coto Photo Logo" className="w-64 sm:w-80 md:w-96 object-contain mb-8 filter drop-shadow-sm mx-auto" />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200} duration={800}>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-gray-900 uppercase">
            DOSIER 2026
          </h1>
          <div className="w-24 h-0.5 bg-[#c96f53] my-6 mx-auto"></div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={400} duration={800}>
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-500 uppercase tracking-widest font-semibold max-w-xl leading-relaxed">
            Servicios & Tarifas para Bodas y Eventos Exclusivos
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={600} duration={800}>
          <div className="my-10 flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection('quienes-somos')}
              className="bg-gray-900 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all text-sm md:text-base"
            >
              Comenzar a explorar
            </button>
            <button
              onClick={() => scrollToSection('tarifas')}
              className="bg-white text-gray-800 font-semibold px-8 py-3.5 rounded-full shadow-md border border-gray-200/80 hover:bg-gray-50 transition-all text-sm md:text-base"
            >
              Ver Tarifas
            </button>
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[0.1rem] animate-bounce hidden sm:block">
          <button onClick={() => scrollToSection('quienes-somos')} aria-label="Bajar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-[#c96f53] transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* 2. ¿Quiénes Somos? Section */}
      <section id="quienes-somos" className="py-20 md:py-28 border-b border-gray-200/30 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <ScrollReveal animation="slide-left">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c96f53] uppercase">SOBRE NOSOTROS</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2 uppercase tracking-wider">
                  ¿Quiénes Somos?
                </h2>
                <div className="w-16 h-0.5 bg-[#c96f53] mt-3 mb-6"></div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-in" delay={150}>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  En CotoPhoto, damos vida a tus eventos con la tecnología más divertida y espectacular del momento. Somos especialistas en crear experiencias exclusivas para bodas y eventos, ofreciendo un servicio único que garantiza la máxima diversión.
                </p>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-in" delay={300}>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Nuestro objetivo es convertir cada celebración en un recuerdo inigualable. Tu evento merece un impacto visual diferente, y nosotros nos encargamos de que tus invitados se lleven la mejor experiencia posible.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="md:col-span-5">
              <ScrollReveal animation="slide-right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] md:aspect-[3/4] bg-[#f5f0eb]">
                  <img src="/assets/images/pre_post.webp" alt="¿Quiénes Somos?" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visión General de Servicios */}
      <section id="servicios" className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal animation="fade-up">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c96f53] uppercase">EXPERIENCIAS</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                Nuestros Servicios
              </h2>
              <div className="w-16 h-0.5 bg-[#c96f53] mx-auto mt-3 mb-4"></div>
              <p className="text-gray-500 text-sm sm:text-base">
                Ofrecemos las mejores experiencias de entretenimiento visual e impreso adaptadas a cada rincón de tu celebración.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'fotomaton', title: 'Fotomatón Clásico', desc: 'Diversión tradicional con impresiones instantáneas y álbum de recuerdos.', img: '/assets/images/photo_call.webp' },
              { id: 'video360', title: 'Plataforma Vídeo 360º', desc: 'Vídeos slow-motion dinámicos y cinematográficos listos por QR.', img: '/assets/images/photo_booth.webp' },
              { id: 'vogue', title: 'Photocall Revista VOGUE', desc: 'El photocall más elegante y glamuroso. Exclusivo de Coto Photo.', img: '/assets/images/vogue_photocall.png' },
              { id: 'audio-guestbook', title: 'Teléfono Audio Guestbook', desc: 'Libro de firmas sonoro. Guarda los mensajes y risas con su propia voz.', img: '/assets/images/audiobook_2.webp' },
              { id: 'pre-post', title: 'Fotografía Pre & Post', desc: 'Capturas profesionales en la recepción impresas al instante en la barra.', img: '/assets/images/pre_post.webp' }
            ].map((serv, index) => (
              <ScrollReveal key={serv.id} animation="fade-up" delay={index * 100}>
                <div 
                  onClick={() => scrollToSection(serv.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-150/60 group hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img src={serv.img} alt={serv.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#c96f53] transition-colors mb-2">{serv.title}</h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{serv.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#c96f53] uppercase tracking-wider flex items-center gap-1 mt-4 group-hover:underline">
                      Saber más 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
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
        <div id="fotomaton" className="py-16 border-b border-gray-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-7 space-y-6">
                <ScrollReveal animation="slide-left">
                  <span className="text-xs font-bold tracking-widest text-[#c96f53] uppercase">SERVICIO MÁS POPULAR</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                    Fotomatón Clásico
                  </h2>
                  <p className="text-gray-400 font-serif italic text-sm">"El alma de la fiesta"</p>
                  <div className="w-12 h-0.5 bg-[#c96f53] mt-2 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Nuestro fotomatón ofrece una experiencia interactiva con atrezzo divertido y puesta en escena cuidada para capturar los momentos más espontáneos. Tus invitados reciben sus fotos de manera digital e impresa al instante y vídeos a través de código QR, listos para compartir en redes.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">¿Qué incluye el servicio?</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-500">
                    <li className="flex items-center gap-2">✓ Fotos y copias ilimitadas</li>
                    <li className="flex items-center gap-2">✓ Álbum de recuerdos</li>
                    <li className="flex items-center gap-2">✓ Galería online en tiempo real</li>
                    <li className="flex items-center gap-2">✓ Descarga por código QR</li>
                    <li className="flex items-center gap-2">✓ Personalización de marcos</li>
                    <li className="flex items-center gap-2">✓ Alta resolución final</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <div className="bg-[#faf8f5] border border-gray-150 rounded-xl px-4 py-2.5 shadow-xs">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase">1 Hora</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">150€</span>
                    </div>
                    <div className="bg-[#faf8f5] border border-[#c96f53]/30 rounded-xl px-4 py-2.5 shadow-xs">
                      <span className="block text-[10px] text-[#c96f53] font-bold uppercase">2 Horas</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">270€</span>
                    </div>
                    <div className="bg-[#faf8f5] border border-gray-150 rounded-xl px-4 py-2.5 shadow-xs">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase">3 Horas</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">340€</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 font-medium">
                    * Fondo floral con frase y luces de neón: +20€
                  </p>
                </ScrollReveal>
              </div>

              <div className="md:col-span-5">
                <ScrollReveal animation="slide-right">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] bg-[#f5f0eb]">
                    <img src="/assets/images/photo_call.webp" alt="Fotomatón Clásico" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 2: Video 360 */}
        <div id="video360" className="py-16 border-b border-gray-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-5 order-last md:order-first">
                <ScrollReveal animation="slide-left">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] bg-[#f5f0eb]">
                    <img src="/assets/images/photo_booth.webp" alt="Plataforma Vídeo 360" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </ScrollReveal>
              </div>

              <div className="md:col-span-7 space-y-6">
                <ScrollReveal animation="slide-right">
                  <span className="text-xs font-bold tracking-widest text-[#c96f53] uppercase">TECNOLOGÍA EN EVENTOS</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                    Plataforma Vídeo 360º
                  </h2>
                  <p className="text-gray-400 font-serif italic text-sm">"Vídeos dinámicos y cinematográficos"</p>
                  <div className="w-12 h-0.5 bg-[#c96f53] mt-2 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Lleva la tecnología más innovadora a tu evento con nuestra plataforma 360. Es la propuesta ideal para crear vídeos cinematográficos que sorprendan a todos tus invitados. Combinamos cámaras de alta calidad con el efecto Slow Motion para un acabado espectacular.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">¿Qué incluye el servicio?</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-500">
                    <li className="flex items-center gap-2">✓ Vídeos ilimitados de alta calidad</li>
                    <li className="flex items-center gap-2">✓ Efecto slow-motion personalizado</li>
                    <li className="flex items-center gap-2">✓ Set de iluminación profesional</li>
                    <li className="flex items-center gap-2">✓ Descarga instantánea por QR</li>
                    <li className="flex items-center gap-2">✓ 2 azafatas especializadas</li>
                    <li className="flex items-center gap-2">✓ Galería online en tiempo real</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <div className="bg-[#faf8f5] border border-gray-150 rounded-xl px-4 py-2.5 shadow-xs">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase">1 Hora</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">270€</span>
                    </div>
                    <div className="bg-[#faf8f5] border border-gray-150 rounded-xl px-4 py-2.5 shadow-xs">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase">2 Horas</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">370€</span>
                    </div>
                    <div className="bg-[#faf8f5] border border-gray-150 rounded-xl px-4 py-2.5 shadow-xs">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase">3 Horas</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">450€</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 3: Vogue Photocall */}
        <div id="vogue" className="py-16 border-b border-gray-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-7 space-y-6">
                <ScrollReveal animation="slide-left">
                  <span className="text-xs font-bold tracking-widest text-[#c96f53] uppercase">PROPUESTA EXCLUSIVA</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                    Photocall Revista VOGUE
                  </h2>
                  <p className="text-gray-400 font-serif italic text-sm">"Siente el glamour de una portada"</p>
                  <div className="w-12 h-0.5 bg-[#c96f53] mt-2 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Dale un toque elegante y único a tu celebración con nuestro Photocall VOGUE, el rincón perfecto para que tus invitados se sientan protagonistas y se lleven recuerdos inolvidables. Este servicio es <strong>exclusivo de nuestra empresa dentro de la provincia</strong>.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">¿Qué incluye el servicio?</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-500">
                    <li className="flex items-center gap-2">✓ Diseño tipo revista VOGUE gigante</li>
                    <li className="flex items-center gap-2">✓ Personalización de textos de portada</li>
                    <li className="flex items-center gap-2">✓ Transporte, montaje y desmontaje</li>
                    <li className="flex items-center gap-2">✓ Estética e iluminación premium</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="pt-4 flex flex-col gap-2">
                    <div className="flex justify-between items-center bg-[#faf8f5] border border-gray-150 rounded-xl px-4 py-2.5 max-w-md shadow-xs">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Día Completo (Solo Photocall)</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">380€</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#faf8f5] border border-[#c96f53]/30 rounded-xl px-4 py-2.5 max-w-md shadow-xs">
                      <span className="text-xs font-semibold text-[#c96f53] uppercase">Día Completo + Fotomatón 1h</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">530€</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#faf8f5] border border-gray-150 rounded-xl px-4 py-2.5 max-w-md shadow-xs">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Día Completo + Fotomatón 2h</span>
                      <span className="font-serif text-lg font-bold text-[#c96f53]">650€</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="md:col-span-5">
                <ScrollReveal animation="slide-right">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] bg-[#e5dcd3]">
                    <img src="/assets/images/vogue_photocall.png" alt="Photocall VOGUE" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 4: Audio Guestbook */}
        <div id="audio-guestbook" className="py-16 border-b border-gray-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-5 order-last md:order-first">
                <ScrollReveal animation="slide-left">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] bg-[#f5f0eb]">
                    <img src="/assets/images/audiobook_2.webp" alt="Teléfono Audio Guestbook" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </ScrollReveal>
              </div>

              <div className="md:col-span-7 space-y-6">
                <ScrollReveal animation="slide-right">
                  <span className="text-xs font-bold tracking-widest text-[#c96f53] uppercase">NOVEDAD Y TENDENCIA</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                    Teléfono Audio Guestbook
                  </h2>
                  <p className="text-gray-400 font-serif italic text-sm">"Sustituye el libro de firmas tradicional"</p>
                  <div className="w-12 h-0.5 bg-[#c96f53] mt-2 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Sustituimos el libro de firmas tradicional por una experiencia sonora única. En nuestro teléfono retro, los invitados pueden dejar sus mensajes, anécdotas, risas y buenos deseos grabados con su propia voz. Un recuerdo súper emotivo que dura para siempre.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">¿Qué incluye el servicio?</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-500">
                    <li className="flex items-center gap-2">✓ Instalación en espacio destacado</li>
                    <li className="flex items-center gap-2">✓ Grabación ilimitada durante el evento</li>
                    <li className="flex items-center gap-2">✓ Teléfono retro de diseño elegante</li>
                    <li className="flex items-center gap-2">✓ Archivo final editado con los mensajes</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="pt-2">
                    <div className="inline-block bg-[#faf8f5] border border-gray-150 rounded-xl px-5 py-3 shadow-xs text-center">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase">Tarifa Día Completo</span>
                      <span className="font-serif text-2xl font-bold text-[#c96f53]">70€</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Servicio 5: Pre & Post */}
        <div id="pre-post" className="py-16 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-7 space-y-6">
                <ScrollReveal animation="slide-left">
                  <span className="text-xs font-bold tracking-widest text-[#c96f53] uppercase">SERVICIO PIONERO</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                    Fotografía Pre & Post
                  </h2>
                  <p className="text-gray-400 font-serif italic text-sm">"Un detalle exclusivo que marca la diferencia"</p>
                  <div className="w-12 h-0.5 bg-[#c96f53] mt-2 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Somos pioneros en un servicio sin competencia en la zona: capturamos a tus invitados durante la recepción y les entregamos la fotografía impresa y editada directamente en la barra libre. Un sistema propio diseñado para que disfruten de un recuerdo personalizado en mano.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={150}>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">¿Qué incluye el servicio?</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-500">
                    <li className="flex items-center gap-2">✓ Sesión durante la recepción</li>
                    <li className="flex items-center gap-2">✓ Edición rápida in situ</li>
                    <li className="flex items-center gap-2">✓ Impresión física de calidad</li>
                    <li className="flex items-center gap-2">✓ Exposición en la barra libre</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal animation="fade-in" delay={300}>
                  <div className="pt-2">
                    <div className="inline-block bg-[#faf8f5] border border-gray-150 rounded-xl px-5 py-3 shadow-xs text-center">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase">Precio Único</span>
                      <span className="font-serif text-2xl font-bold text-[#c96f53]">270€</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="md:col-span-5">
                <ScrollReveal animation="slide-right">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] bg-[#f5f0eb]">
                    <img src="/assets/images/pre_post.webp" alt="Fotografía Pre&Post" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Paso a Paso Section */}
      <section id="paso-a-paso" className="py-20 md:py-28 bg-[#faf8f5] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal animation="fade-up">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c96f53] uppercase">PROCESO</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                Tu Evento <span className="whitespace-nowrap">Paso a Paso</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#c96f53] mx-auto mt-3 mb-4"></div>
              <p className="text-gray-500 text-sm sm:text-base">
                Cómo organizamos e instalamos el servicio para asegurar el éxito rotundo del día de la celebración.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            <div className="absolute top-12 left-12 right-12 h-0.5 bg-gray-200/60 -z-10 hidden md:block"></div>

            {[
              { step: '01', title: 'Reserva', desc: 'Formalizamos la reserva tras definir fecha y lugar con una señal de 50€.' },
              { step: '02', title: 'Personalizar', desc: 'Reunión o llamada para adaptar marcos de fotos, música y efectos visuales.' },
              { step: '03', title: 'Montaje', desc: 'Llegamos con antelación de sobra para montar y realizar pruebas de iluminación.' },
              { step: '04', title: 'Experiencia', desc: 'Técnicos calificados dinamizan la zona en todo momento durante el servicio.' },
              { step: '05', title: 'Entrega', desc: 'Descargas instantáneas por código QR y envío digital completo a los novios.' }
            ].map((p, index) => (
              <ScrollReveal key={p.step} animation="fade-up" delay={index * 150}>
                <div className="bg-white p-6 rounded-2xl border border-gray-150/60 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow h-full">
                  <span className="w-12 h-12 rounded-full bg-[#c96f53] text-white flex items-center justify-center font-serif text-base sm:text-lg font-bold mb-4 shadow-md">
                    {p.step}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2 uppercase tracking-wide">{p.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Calculadora de Presupuesto */}
      <section id="tarifas" className="py-20 md:py-28 bg-white border-t border-gray-150/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal animation="fade-up">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c96f53] uppercase">COTIZACIÓN</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 uppercase tracking-wider">
                Calculadora de Tarifas
              </h2>
              <div className="w-16 h-0.5 bg-[#c96f53] mx-auto mt-3 mb-4"></div>
              <p className="text-gray-500 text-sm sm:text-base">
                Selecciona la configuración deseada y obtén una cotización inmediata y transparente para planificar tu presupuesto.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="scale-up" duration={800}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#faf8f5] rounded-3xl border border-gray-200/50 p-6 md:p-10 shadow-lg">
              {/* Selectors */}
              <div className="lg:col-span-8 space-y-5">
                {/* Fotomatón */}
                <div className="bg-white p-4 rounded-2xl border border-gray-150/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="font-bold text-gray-900 block text-sm sm:text-base">1. Fotomatón Clásico</span>
                    <span className="text-xs text-gray-500 leading-relaxed">Fotos y copias físicas ilimitadas + álbum de firmas.</span>
                  </div>
                  <select
                    value={fotomatonHrs}
                    onChange={(e) => setFotomatonHrs(e.target.value)}
                    className="bg-[#faf8f5] border border-gray-250 text-gray-700 text-sm sm:text-base rounded-xl focus:ring-[#c96f53] focus:border-[#c96f53] p-2.5 font-semibold"
                  >
                    <option value="none">No incluir (0€)</option>
                    <option value="1h">1 Hora (150€)</option>
                    <option value="2h">2 Horas (270€)</option>
                    <option value="3h">3 Horas (340€)</option>
                  </select>
                </div>

                {/* Plataforma 360 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-150/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="font-bold text-gray-900 block text-sm sm:text-base">2. Plataforma de Vídeo 360º</span>
                    <span className="text-xs text-gray-500 leading-relaxed">Vídeos cinematográficos slow-motion con descarga por QR.</span>
                  </div>
                  <select
                    value={video360Hrs}
                    onChange={(e) => setVideo360Hrs(e.target.value)}
                    className="bg-[#faf8f5] border border-gray-250 text-gray-700 text-sm sm:text-base rounded-xl focus:ring-[#c96f53] focus:border-[#c96f53] p-2.5 font-semibold"
                  >
                    <option value="none">No incluir (0€)</option>
                    <option value="1h">1 Hora (270€)</option>
                    <option value="2h">2 Horas (370€)</option>
                    <option value="3h">3 Horas (450€)</option>
                  </select>
                </div>

                {/* Vogue */}
                <div className="bg-white p-4 rounded-2xl border border-gray-150/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="font-bold text-gray-900 block text-sm sm:text-base">3. Photocall Revista VOGUE</span>
                    <span className="text-xs text-gray-500 leading-relaxed">Montaje exclusivo y personalización. Opciones combinadas.</span>
                  </div>
                  <select
                    value={vogueOption}
                    onChange={(e) => setVogueOption(e.target.value)}
                    className="bg-[#faf8f5] border border-gray-250 text-gray-700 text-sm sm:text-base rounded-xl focus:ring-[#c96f53] focus:border-[#c96f53] p-2.5 font-semibold"
                  >
                    <option value="none">No incluir (0€)</option>
                    <option value="full">Día Completo (380€)</option>
                    <option value="full_1h">Día Completo + Fotomatón 1h (530€)</option>
                    <option value="full_2h">Día Completo + Fotomatón 2h (650€)</option>
                  </select>
                </div>

                {/* Switches / Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Guestbook */}
                  <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${audioGuestbook ? 'bg-[#c96f53]/5 border-[#c96f53] shadow-sm' : 'bg-white border-gray-150/60 shadow-sm'}`}>
                    <div className="pr-2">
                      <span className="font-bold text-gray-900 block text-sm">Teléfono Audio Guestbook</span>
                      <span className="text-xs text-gray-500">Grabador de voz retro (Día comp. 70€)</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={audioGuestbook}
                      onChange={(e) => setAudioGuestbook(e.target.checked)}
                      className="w-5 h-5 text-[#c96f53] bg-gray-100 border-gray-300 rounded focus:ring-[#c96f53] focus:ring-2"
                    />
                  </label>

                  {/* Pre Post */}
                  <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${prePost ? 'bg-[#c96f53]/5 border-[#c96f53] shadow-sm' : 'bg-white border-gray-150/60 shadow-sm'}`}>
                    <div className="pr-2">
                      <span className="font-bold text-gray-900 block text-sm">Fotografía Pre & Post</span>
                      <span className="text-xs text-gray-500">Edición e impresión in situ (270€)</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={prePost}
                      onChange={(e) => setPrePost(e.target.checked)}
                      className="w-5 h-5 text-[#c96f53] bg-gray-100 border-gray-300 rounded focus:ring-[#c96f53] focus:ring-2"
                    />
                  </label>
                </div>

                {/* Extras Toggle (Conditional) */}
                {(fotomatonHrs !== 'none' || vogueOption.includes('1h') || vogueOption.includes('2h')) && (
                  <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${neonExtra ? 'bg-[#c96f53]/5 border-[#c96f53] shadow-sm' : 'bg-white border-gray-150/60 shadow-sm'}`}>
                    <div>
                      <span className="font-bold text-gray-900 block text-sm">Extra: Fondo floral con luces de neón</span>
                      <span className="text-xs text-gray-500">Un toque luminoso y elegante para el decorado (+20€)</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={neonExtra}
                      onChange={(e) => setNeonExtra(e.target.checked)}
                      className="w-5 h-5 text-[#c96f53] bg-gray-100 border-gray-300 rounded focus:ring-[#c96f53] focus:ring-2"
                    />
                  </label>
                )}
              </div>

              {/* Total Card */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-150 p-6 md:p-8 flex flex-col justify-between items-center text-center shadow-md">
                <div className="w-full">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Presupuesto Estimado</span>
                  <div className="bg-[#faf8f5] rounded-2xl border border-gray-100 p-6 shadow-inner inline-block w-full">
                    <span className="block text-4xl sm:text-5xl font-serif font-bold text-[#c96f53] transition-all">{calculatedTotal}€</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 leading-relaxed mt-6">
                  * Este importe es una estimación. Consúltanos para confirmar disponibilidad de fecha y recibir un presupuesto formalizado.
                </p>
                
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-gray-900 text-white rounded-xl py-3.5 font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors mt-8 shadow-md"
                >
                  Reservar esta combinación
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Contacto & Cierre Section */}
      <section id="contacto" className="py-20 md:py-28 bg-[#faf8f5] scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c96f53]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a39382]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal animation="scale-up">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c96f53] uppercase block mb-3">COTO PHOTO</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-6">
              ¡Muchas Gracias!
            </h2>
            <div className="w-16 h-0.5 bg-[#c96f53] mx-auto mb-8"></div>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mx-auto mb-12">
              Estamos deseando formar parte de tu gran día y crear momentos inolvidables. Consúltanos disponibilidad de tu fecha sin compromiso.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-white border border-gray-150 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-wider">Teléfono / WhatsApp</span>
                <a href="tel:+34665422051" className="text-gray-900 font-bold hover:text-[#c96f53] transition-colors text-base sm:text-lg">665 422 051</a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white border border-gray-150 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-wider">Email</span>
                <a href="mailto:cotomoreno7@gmail.com" className="text-gray-900 font-bold hover:text-[#c96f53] transition-colors text-sm sm:text-base break-all">cotomoreno7@gmail.com</a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-white border border-gray-150 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-wider">Página Web</span>
                <a href="https://cotophoto.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold hover:text-[#c96f53] transition-colors text-base sm:text-lg">cotophoto.com</a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in" delay={450}>
            <div className="mt-16 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Coto Photo © {new Date().getFullYear()} — Dossier de Servicios
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
