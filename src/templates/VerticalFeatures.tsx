import { features } from '@/utils/const/Features';

import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => {
  return (
    <Section
      title="¡Porque elegirnos es una opción ideal para los invitados!"
      description="Con el alquiler podrás tener un recuerdo muy divertido para toda la vida.
    Sin duda es una opción genial de hacer pasarlo bien a los invitados y que estén entretenidos."
    >
      <hr />
      {features.map((feature, i) => (
        <VerticalFeatureRow
          key={feature.title}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          imageAlt={feature.imageAlt}
          reverse={i % 2 !== 0}
          link={feature.link || ''}
        />
      ))}
    </Section>
  );
};

export { VerticalFeatures };
