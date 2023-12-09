import Link from 'next/link';

const About = () => (
  <div className="text-gray-600 antialiased">
    <div>
      <section className="bg-gray-100 p-12">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            ¡Contáctanos!
          </h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            ¿Tienes preguntas, comentarios o simplemente quieres saludarnos?
            Estamos aquí para ayudarte. Completa el formulario de contacto o
            utiliza la información de contacto a continuación para ponerte en
            contacto con nuestro equipo.
          </p>

          <div className="flex flex-wrap md:self-center">
            <div className="mb-6 w-full md:w-1/2 md:self-center">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">
                Información de Contacto
              </h3>
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Correo Electrónico:</span>{' '}
                <Link href="mailto: cotomoreno7@gmail.com">
                  cotomoreno7@gmail.com
                </Link>
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Teléfono: </span>
                <a href="tel:+34665422051">665422051</a>
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Dirección:</span> Calle Rábida,
                Villalba del Alcor, Huelva
              </p>
            </div>

            <div className="mb-6 w-full px-4 md:w-1/2">
              <img
                src="/assets/images/logo.png"
                alt=""
                className="md:ms-auto md:w-2/3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;
