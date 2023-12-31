import type { VerticalFeatureRowProps } from '@/models/vertical-feature.model';

export const features: VerticalFeatureRowProps[] = [
  {
    title: 'Teléfono Audio Guestbook',
    description:
      'Este es nuestro teléfono Audio Guestbook con capacidad de grabación. Este dispositivo es la opción perfecta para cualquier evento, ya sea una boda, bautizo, comunión o evento corporativo, donde los invitados pueden dejar mensajes personalizados y únicos para el organizador del evento.',
    image: '/assets/images/audiobook_2.webp',
    imageAlt: 'Teléfono Audio Guestbook',
    link: 'AudioGuestbook',
  },
  {
    title: 'Plataforma Video 360º',
    description:
      '¡Para que no te pierdas ni un solo detalle de unos días tan especiales! Tus invitados podrán hacerse un vídeo 360 grados que mostrará todo el esplendor del evento inmortalizándolo para siempre. Combinamos todo el potencial de la cámaras 360 con el efecto Slow Motion para crear un resultado único.',
    image: '/assets/images/photo_booth.webp',
    imageAlt: 'Plataforma Video 360º',
    link: 'Video360',
  },
  {
    title: 'Fotomatón',
    description:
      'Anima tu fiesta con un fotomatón para bodas. Con nuestros equipos de última generación y un servicio especializado, desde los jóvenes a los más mayores se lo van a pasar en grande.',
    image: '/assets/images/photo_call.webp',
    imageAlt: 'Fotomatón',
    link: 'Photocall',
  },
  {
    title: 'Fotografía Pre&Post',
    description:
      'Realizamos fotos en la recepción del evento que, posteriormente, editamos, imprimimos y colocamos en la barra libre para que cada invitado se lleve la suya de recuerdo',
    image: '/assets/images/pre_post.webp',
    imageAlt: 'Fotografía Pre&Post',
    link: 'PrePost',
  },
];
