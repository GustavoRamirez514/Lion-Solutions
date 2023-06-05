const incentives = [
  {
    name: "Procesos Optimizados",
    imageSrc:
      "https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/06.svg",
    description:
      "Optimizamos continuamente nuestros procesos para ofrecer productos de alta calidad mientras reducimos los costos y los plazos de desarrollo .Usamos las últimas herramientas y tecnologías y mantenemos un seguimiento exhaustivo del tiempo: solo se le cobra la hora real utilizada para el desarrollo.",
  },
  {
    name: "Enfoque ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Empleamos un enfoque centrado en el usuario que garantiza que el diseño de su producto se alinee con sus objetivos comerciales, identidad de marca y público objetivo; no es de extrañar que hayamos clasificado como 1 de los 10 mejores estudios de diseño.",
  },
  {
    name: "Inicio Rapido",
    imageSrc:
      "https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/03.svg",
    description:
      "Años de experiencia nos permiten iniciar y construir proyectos rápidamente y entregar resultados rápidamente. Seguimos un proceso de desarrollo simplificado, asegurándonos de crear nuevos productos e integrar nuestro trabajo a la perfección en sus procesos comerciales",
  },
];

export default function Icentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-30 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none pb-30">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Por qué elegir Lion Solutions?
            </h2>
            <p className="mt-4 text-gray-500">
              Es un estudio de diseño y desarrollo de productos
              digitales. Contamos con más de 50 expertos en JS y diseño a bordo
              y más de 6 años de experiencia en la creación de proyectos
              digitales desde cero o en la actualización de los existentes.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
