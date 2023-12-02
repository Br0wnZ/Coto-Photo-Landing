import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-300">
    <Section>
      <CenteredFooter
        logo={<Logo xl />}
        iconList={
          <>
            <Link
              href="https://www.facebook.com/antonio.cotomoreno.1"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
              </svg>
            </Link>
            <Link href="mailto: cotomoreno7@gmail.com">
              <svg
                fill="#a0aec0"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 37.195 37.195"
                stroke="#a0aec0"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g>
                    {' '}
                    <g id="_x31_35_86_">
                      {' '}
                      <g>
                        {' '}
                        <path d="M19.332,22.844c-0.5,0.416-1.114,0.441-1.612,0C11.84,17.616,5.957,12.391,0.074,7.162C0.044,7.208,0.028,7.271,0,7.319 v23.677h37.195V7.998C31.239,12.946,25.286,17.896,19.332,22.844z"></path>{' '}
                        <path d="M16.729,18.922c0.607,0.541,1.217,1.082,1.823,1.623C24.264,15.8,29.971,11.056,35.68,6.311 c-0.076-0.04-0.158-0.072-0.233-0.111H2.412c2.83,2.517,5.662,5.032,8.492,7.548C12.847,15.472,14.789,17.197,16.729,18.922z"></path>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
            </Link>
            <Link href="https://wa.me/665422051" target="_blank">
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#a0aec0"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>whatsapp [#a0aec0]</title>{' '}
                  <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {' '}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-300.000000, -7599.000000)"
                      fill="#a0aec0"
                    >
                      {' '}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {' '}
                        <path
                          d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                          id="whatsapp-[#a0aec0]"
                        >
                          {' '}
                        </path>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/coto.photo/?hl=es"
              target="_blank"
            >
              <svg
                fill="#a0aec0"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g>
                    {' '}
                    <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path>{' '}
                    <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon>{' '}
                    <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path>{' '}
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path>{' '}
                  </g>{' '}
                </g>
              </svg>
            </Link>
          </>
        }
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Contacto</Link>
        </li>
        {/* <li>
          <Link href="/">Docs</Link>
        </li> */}
        {/* <li>
          <Link href="https://github.com/Br0wnZ">GitHub</Link>
        </li> */}
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
