import {
  CheckCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

function List() {
  const applications = [
    {
      applicant: {
        name: "Senior React Developer",
        Cargo: "Development",
      },
      Contrato: "Remoto",
      Tiempo: "Full-time",
      href: "#",
    },
    {
      applicant: {
        name: "Web Graphic Designer",
        Cargo: "Desing",
      },
      Contrato: "Remoto",
      Tiempo: "Full-time",
      href: "#",
    },
    {
      applicant: {
        name: "Senior React Developer",
        Cargo: "Development",
      },
      Contrato: "Remoto",
      Tiempo: "Full-time",
      href: "#",
    },
    {
      applicant: {
        name: "Project Manager",
        Cargo: "Product management",
      },
      Contrato: "Presencial",
      Tiempo: "Full-time",
      href: "#",
    },
    {
      applicant: {
        name: "Illustrator",
        Cargo: "Desing",
      },
      Contrato: "Remoto-Presencial",
      Tiempo: "Temporal",
      href: "#",
    },
    
  ];

  return (
    <div className="max-w-full mx-12 bg-white pb-40">
      <h2 className="text-4xl font-semibold text-gray-900 pb-5">Vacantes</h2>
      <p className="text-lg font-regular text-gray-900 max-w-2xl leading-7">
        Escribamos un código hermoso y hagamos diseños inteligentes. Esto es lo
        que nos vuelve locos, y estamos buscando a los que sienten lo mismo.
      </p>

      <div className="grid grid-cols-12 py-5">
        <div className="col-span-4">
          <label
            htmlFor="Puestos"
            className="block text-100 font-medium text-gray-700"
          >
            Puestos
          </label>
          <select
            id="Puestos"
            name="Puestos"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base sm:text-sm"
            defaultValue="Todos los puestos"
          >
            <option>Todos los puestos</option>
            <option>Animacion</option>
            <option>Developer</option>
            <option>Diseño</option>
            <option>Marketing</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {applications.map((application) => (
            <li key={application.applicant.Cargo}>
              <a href={application.href} className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-sm font-medium text-dorado-logo">
                          {application.applicant.name}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">
                            {application.applicant.Cargo}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
          
                            {application.date}
                              {application.Contrato}
                            
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            {application.Tiempo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
