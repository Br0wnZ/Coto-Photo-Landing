const AudioGuestbookSection = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">El teléfono Audio Guestbook</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative overflow-hidden rounded-md bg-white shadow-md">
          <img
            src={'/assets/images/audiobook_1.webp'}
            loading="lazy"
            alt="Image 1"
            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold">
              Mucho más que un simple dispositivo de grabación
            </h2>
            <p className="text-gray-600">
              Es la herramienta ideal para inmortalizar momentos especiales en
              cualquier evento. Ya sea una boda llena de emociones, un bautizo
              lleno de ternura, una comunión llena de alegría o un evento
              corporativo lleno de logros, este innovador dispositivo eleva la
              experiencia a un nivel completamente nuevo.
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-md bg-white shadow-md">
          <img
            src={'/assets/images/audiobook_2.webp'}
            loading="lazy"
            alt="Image 2"
            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold">
              Equipado con tecnología de vanguardia
            </h2>
            <p className="text-gray-600">
              El teléfono Audio Guestbook permite a los invitados dejar mensajes
              personalizados y auténticos que capturan la esencia única de cada
              ocasión. Su diseño elegante y compacto se integra perfectamente en
              cualquier entorno, añadiendo un toque de sofisticación a la
              ocasión.
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-md bg-white shadow-md">
          <img
            src={'/assets/images/audiobook_3.webp'}
            loading="lazy"
            alt="Image 3"
            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold">Facilidad de uso</h2>
            <p className="text-gray-600">
              La facilidad de uso es una de las características destacadas de
              este dispositivo. Con una interfaz intuitiva, incluso aquellos
              menos familiarizados con la tecnología pueden dejar mensajes sin
              esfuerzo. Los invitados simplemente tocan la pantalla, graban sus
              saludos o anécdotas y crean recuerdos atemporales para el
              anfitrión del evento.
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-md bg-white shadow-md">
          <img
            src={'/assets/images/audiobook_4.webp'}
            loading="lazy"
            alt="Image 4"
            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold">Imprescindible</h2>
            <p className="text-gray-600">
              El teléfono Audio Guestbook no solo setrata de grabar sonidos,
              sino de preservar la autenticidad y la singularidad de cada
              ocasión. Es una herramienta imprescindible para aquellos que
              valoran la creación de recuerdos significativos y duraderos en
              cualquier evento. Con este dispositivo, cada celebración se
              convierte en una experiencia inolvidable, capturando la esencia de
              la ocasión y permitiendo que los recuerdos perduren a lo largo del
              tiempo.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-md  bg-white p-8 shadow-md lg:p-8 xl:p-8">
        <p className="mb-6 leading-relaxed text-gray-600">
          La versatilidad del teléfono Audio Guestbook se adapta a una variedad
          de situaciones. En una boda, los mensajes pueden ir desde los emotivos
          discursos de los seres queridos hasta las divertidas anécdotas
          compartidas por amigos cercanos. En un evento corporativo, los
          empleados pueden expresar su agradecimiento y reconocimiento, creando
          un valioso archivo de testimonios.
        </p>

        <p className="mb-6 leading-relaxed text-gray-600">
          La calidad de sonido excepcional garantiza que cada palabra y emoción
          quede grabada de manera clara y nítida. Los organizadores del evento
          pueden revivir esos momentos especiales una y otra vez, compartiendo
          la alegría y la conexión emocional que se experimentaron en el
          momento.
        </p>
      </div>
    </div>
  );
};

export default AudioGuestbookSection;
