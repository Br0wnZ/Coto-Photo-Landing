import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="¡Porque elegirnos es una opción ideal para los invitados!"
    description="Con el alquiler podrás tener un recuerdo muy divertido para toda la vida.
    Sin duda es una opción genial de hacer pasarlo bien a los invitados y que estén entretenidos."
  >
    <hr />
    <VerticalFeatureRow
      title="Teléfono Audio Guestbook"
      description="Este es nuestro teléfono Audio Guestbook con capacidad de grabación. Este dispositivo es la opción perfecta para cualquier evento, ya sea una boda, bautizo, comunión o evento corporativo, donde los invitados pueden dejar mensajes personalizados y únicos para el organizador del evento."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Plataforma Video 360º"
      description="¡Para que no te pierdas ni un solo detalle de unos días tan especiales! Tus invitados podrán hacerse un vídeo 360 grados que mostrará todo el esplendor del evento inmortalizándolo para siempre. Combinamos todo el potencial de la cámaras 360 con el efecto Slow Motion para crear un resultado único."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Fotomatón"
      description="Anima tu fiesta con un fotomatón para bodas. Con nuestros equipos de última generación y un servicio especializado, desde los jóvenes a los más mayores se lo van a pasar en grande."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Fotografía Pre&Post"
      description="Realizamos fotos en la recepción del evento que, posteriormente, editamos, imprimimos y colocamos en la barra libre para que cada invitado se lleve la suya de recuerdo"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
