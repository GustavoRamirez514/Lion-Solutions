

function Header() {
  return (
    <main>
      <div className="relative px-6 lg:px-8 ">
        <div className="mx-auto max-w-full xl:mx-20  sm:pt-28 sm:pb-14">
          <div>
            <div>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-5xl">
                Casos de Estudio
              </h1>
              <p className="mt-6  leading-6 text-gray-600 text-left max-w-3xl">
                Creemos que los grandes productos no pueden surgir sin pasión,
                inteligencia y compromiso personal, y nuestro portafolio lo
                demuestra, que abarca diferentes clientes, industrias y
                audiencias objetivo.
              </p>
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
