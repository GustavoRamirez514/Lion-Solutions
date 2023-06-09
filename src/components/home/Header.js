import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <main>
      <div className="relative px-6 sm:px-8 lg:px-8 pb-10">
        <div className="mx-auto max-w-3xl  sm:pt-36 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="text-gray-600">
                  Anunciamos nuestro proximo proyecto aqui.{" "}
                  <a href="/Blog" className="font-semibold text-dorado-logo">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Leer Más <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Más cerca de tus <span></span>
                <div
                  className="inline-flex"
                  style={{ color: "#BCA175", fontWeight: "bold" }}
                >
                  <Typewriter
                    syle
                    words={["Deseos", "Sueños"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    //   onLoopDone={handleDone}
                    //   onType={handleType}
                  />
                </div>
              </h1>
              <ul className="flex gap-8 mt-6 text-lg leading-8 text-gray-600 sm:text-center items-center justify-center">
                <li className="inline-flex border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out">
                  <Link to="/Blog">Apps</Link>
                </li>
                <li className="inline-flex border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out">
                  <Link to="/Blog">Marketing</Link>
                </li>
                <li className="inline-flex border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out">
                  <Link to="/Blog">Consultorias</Link>
                </li>
                <li className="inline-flex border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out">
                  <Link to="/Blog">Video Juegos</Link>
                </li>
              </ul>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p> */}
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="/Contacto"
                  className="inline-block rounded-lg bg-dorado-logo px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white hover:bg-black hover:white"
                >
                  Empezar
                  <span className="text-dorado-logo" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="/Optin"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Prueba Gratis
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="#BCA175" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
