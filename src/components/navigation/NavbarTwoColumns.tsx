import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children?: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div>
        <button onClick={router.back}>{props.logo}</button>
      </div>

      <nav>
        <ul className="navbar flex items-center text-xl font-medium text-gray-800">
          {props.children}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
