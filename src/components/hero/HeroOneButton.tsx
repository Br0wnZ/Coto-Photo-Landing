import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-3xl font-bold text-white md:text-5xl md:leading-hero">
      {props.title}
    </h1>
    <div className="text-md mb-16 mt-4 md:text-2xl">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
