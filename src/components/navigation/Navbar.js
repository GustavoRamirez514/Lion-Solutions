import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo from "assets/images/Logo.png";
import BeatLoader from "react-spinners/BeatLoader";
import { useState, Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";

const solutions = [
  {
    name: "Casos",
    href: "/Casos",
    icon: IconTwo,
  },
  {
    name: "Servicios",
    href: "/Servicios",
    icon: IconTwo,
  },
  {
    name: "Vacantes",
    href: "/Vacantes",
    icon: IconTwo,
  },
  {
    name: "Nosotros",
    href: "/Nosotros",
    icon: IconTwo,
  },
  {
    name: "Blog",
    href: "/Blog",
    icon: IconTwo,
  },
  {
    name: "Contactenos",
    href: "/Contacto",
    icon: IconTwo,
  },
];

function Navbar() {
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(true);

  

  return (
    <nav className="w-full py-3 top-0 bg-white fixed z-10">
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <Link to="/" className="pl-12">
            <img src={logo} width={120} height={120} className="" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/Casos"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out mx-4"
            >
              Casos
            </NavLink>
            <NavLink
              to="/Vacantes"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out mx-4"
            >
              Vacantes
            </NavLink>
            <NavLink
              to="/Blog"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out mx-4"
            >
              Blog
            </NavLink>
            <NavLink
              to="/Servicios"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out mx-4"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/Nosotros"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out mx-4"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/Contacto"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out mx-4"
            >
              Contactenos
            </NavLink>
            <Link
              to="/Contacto"
              className="ml-12 mr-8 relative inline-flex items-center rounded-md border border-transparent bg-dorado-logo px-5 py-2 text-md font-medium text-white shadow-sm hover:bg-black transition duration-400 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Contratar
              <BeatLoader
                loading={loading}
                size={10}
                color="white"
                speedMultiplier=".3"
                className="ml-1"
              />
            </Link>
          </div>
        </div>
        {/* MOVIL */}
        <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <Link to="/" className="pl-12">
            <img src={logo} width={120} height={120} className="" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                focus:ring-none focus:outline-none`}
                  >
                    {open ? (
                      <i className="bx bx-exit text-4xl text-dorado-logo"></i>
                    ) : (
                      <i className="bx bx-menu text-4xl text-dorado-logo"></i>
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-36 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                <item.icon aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);


function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

