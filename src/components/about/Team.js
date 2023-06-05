const people = [
  {
    name: "Gustavo Ramirez",
    role: "Full-Stack Developer",
    imageUrl: "https://i.ibb.co/zPhNjgW/Foto.jpg",
    gitHubUrl: "https://github.com/GustavoRamirez514",
    linkedinUrl: "https://www.linkedin.com/in/gustavoramirez514/",
  },
  {
    name: "Michelle Obando",
    role: "Full-Stack Developer",
    imageUrl: "https://i.ibb.co/cXt7DTv/michelle.jpg",
    gitHubUrl: "https://github.com/miche890",
    linkedinUrl: "https://www.linkedin.com/in/miche890/",
  },
  {
    name: "Dylan Yampuezan",
    role: "Back-End Developer",
    imageUrl: "https://i.ibb.co/6PCT6cY/Dylan.jpg",
    gitHubUrl: "https://github.com/DylanYam033",
    linkedinUrl: "https://www.linkedin.com/in/dylanyam033/",
  },
  {
    name: "Wilson Gomez",
    role: "Front-End Developer",
    imageUrl: "https://i.ibb.co/pvxWPpy/wilson.jpg",
    gitHubUrl: "https://github.com/DavidGm10",
    linkedinUrl:
      "https://www.linkedin.com/in/wilson-david-gómez-gómez-383817252/",
  },
  // More people...
];

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Conozca a nuestro equipo
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl">
              Somos los defensores de la usabilidad, los campeones de la
              consistencia del producto y los emisarios de las agradables
              interacciones entre humanos y tecnología.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="rounded-lg object-cover shadow-lg w-80 h-80"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-dorado-logo">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a
                          href={person.gitHubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">GiHub</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
