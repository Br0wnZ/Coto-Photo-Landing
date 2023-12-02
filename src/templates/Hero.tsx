import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type IHeroProps = {
  showSection?: boolean;
};

const Hero = (props: IHeroProps) => (
  <Background color="bg-white/30 bg-hero-pattern bg-cover backdrop-filter backdrop-blur">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>
    {props.showSection && (
      <Section yPadding="pt-16 pb-32">
        <HeroOneButton
          title={
            <>
              {
                'Gracias a nuestros servicios podrás dar un toque divertido y original a tu evento\n'
              }
              <span className="text-primary-500 md:text-2xl">
                Bodas, bautizos, comuniones y eventos.
              </span>
            </>
          }
          description=""
        />
      </Section>
    )}
  </Background>
);

export { Hero };
