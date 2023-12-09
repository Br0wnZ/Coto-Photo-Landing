import React from 'react';

import { Carousel } from '@/components/carousel/Carousel';
import type { ImageItem } from '@/models/image.model';

const PhotoboothPage = () => {
  const slides: ImageItem[] = Array.from({ length: 5 }).map((_, i) => ({
    image: `https://picsum.photos/200/300?random=${i}.webp`,
    alt: 'alt',
    title: 'title',
    description: 'description',
  }));
  return (
    <div className="bg-gray-100 px-4 py-8 lg:px-16 xl:px-32">
      <h2 className="mb-8 text-4xl font-bold text-gray-800">
        Añade diversión con nuestro fotomatón
      </h2>

      <Carousel slides={slides} />

      <p className="my-6 leading-relaxed text-gray-600">
        ¡Haz que tu boda sea aún más inolvidable! Con nuestro fotomatón de
        última generación, la diversión está garantizada para todos. Desde los
        jóvenes hasta los más mayores, todos disfrutarán de momentos llenos de
        risas y recuerdos que perdurarán para siempre.
      </p>

      <p className="mb-6 leading-relaxed text-gray-600">
        Nuestro fotomatón no es solo una máquina, es una experiencia interactiva
        que animará tu fiesta y proporcionará recuerdos instantáneos. Equipado
        con tecnología de vanguardia, permite a tus invitados capturar momentos
        espontáneos con calidad profesional. Desde las poses más divertidas
        hasta las expresiones más emotivas, nuestro fotomatón registra cada
        detalle de la celebración.
      </p>

      <p className="mb-6 leading-relaxed text-gray-600">
        No te preocupes por la edad, nuestro servicio especializado garantiza
        que tanto los jóvenes como los más mayores encuentren la forma perfecta
        de divertirse. Los accesorios y fondos personalizables añaden un toque
        de creatividad, permitiendo que cada foto sea única y refleje la
        personalidad de tus invitados.
      </p>

      <p className="mb-6 leading-relaxed text-gray-600">
        Además, nuestro equipo profesional estará presente para asegurarse de
        que todo funcione sin problemas. Desde la configuración hasta la
        asistencia durante el evento, nos encargamos de que tu experiencia con
        el fotomatón sea tan relajada como divertida.
      </p>

      <p className="mb-6 leading-relaxed text-gray-600">
        En esta página, descubre cómo nuestro fotomatón para bodas añade un
        toque de animación y alegría a cualquier celebración. Explora ejemplos
        de fotos creativas y testimonios de parejas que han convertido su día
        especial en un recuerdo inolvidable gracias a nuestro servicio.
      </p>

      <p className="mb-6 leading-relaxed text-gray-600">
        Si estás buscando una manera única de animar tu boda y crear recuerdos
        que duren toda la vida, no busques más. Nuestro fotomatón para bodas es
        la elección perfecta para agregar un toque de diversión y espontaneidad
        a tu día especial.
      </p>
    </div>
  );
};

export default PhotoboothPage;
