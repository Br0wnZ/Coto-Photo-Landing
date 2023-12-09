const About = () => (
  <div className="text-gray-600 antialiased">
    <div>
      <section className="bg-gray-100 py-12">
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

          <div className="-mx-4 flex flex-wrap">
            <div className="mb-6 w-full px-4 md:w-1/2">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">
                Información de Contacto
              </h3>
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Correo Electrónico:</span>{' '}
                cotomoreno7@gmail.com
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Teléfono:</span> 665422051
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Dirección:</span> Calle Rábida,
                Villalba del Alcor, Huelva
              </p>
            </div>

            <div className="mb-6 w-full px-4 md:w-1/2">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">
                Formulario de Contacto
              </h3>
              <form action="#" method="POST">
                <div className="mb-4">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="mt-1 w-full rounded-md border px-3 py-2 text-gray-700 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="correo"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    className="mt-1 w-full rounded-md border px-3 py-2 text-gray-700 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="mt-1 w-full rounded-md border px-3 py-2 text-gray-700 focus:border-blue-300 focus:outline-none focus:ring"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;
