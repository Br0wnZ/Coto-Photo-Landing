import { Background } from '../components/background/Background';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

type IHeroProps = {
  showSection?: boolean;
};

const Hero = (props: IHeroProps) => (
  <Background color="bg-white/30 bg-tools-img bg-cover bg-center backdrop-filter backdrop-blur">
    <div className="backdrop-blur-sm">
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
    </div>
  </Background>
);

export { Hero };
