import Footer from "components/navigation/footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";
import { PacmanLoader } from "react-spinners";
import OptIn from "./Opt-in";

function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [enabled, setEnabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
    phone: "",
    budget: "",
  });

  const { name, email, reason, message, phone, budget } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (enabled) {
      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("reason", reason);
      formData.append("message", message);
      formData.append("budget", budget);

      const fetchData = async () => {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/contacts/`,
          formData,
          config
        );
        if (res.status === 200) {
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            reason: "",
            message: "",
            phone: "",
            budget: "",
          });
          alert("El mensaje ha sido enviado.");
        } else {
          setLoading(false);
          alert("Error al enviar mensaje.");
        }
      };
      fetchData();
    } else {
      alert("Debes aceptar los términos de servicio y condiciones");
    }
  };
  return (
    <Layout>
      <Helmet>
        <title>Lion Solutions | Contacto</title>
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Quieres cotizar un proyecto?
                </h2>
                <p className="mt-3 text-lg leading-6 text-gray-500">
                  Solo cuéntanos sobre tu proyecto, cuáles son tus objetivos y
                  comencemos.
                </p>
                <dl className="mt-8 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Postal address</dt>
                    <dd>
                      <p>742 Evergreen Terrace</p>
                      <p>Springfield, OR 12345</p>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <EnvelopeIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">support@example.com</span>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-base text-gray-500">
                  Esta en Busca de Trabajo?{" "}
                  <a
                    href="/Vacantes"
                    className="font-medium text-gray-700 underline"
                  >
                    Mira todas nuestras Vacantes Abiertas
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="bg-white pt-16 px-4 sm:px-6 lg:col-span-3 lg:pt-24 lg:px-8 xl:pl-12">
              <div className="mx-auto max-w-lg lg:max-w-none">
                <form
                  onSubmit={(e) => onSubmit(e)}
                  className="grid grid-cols-1 gap-y-6"
                >
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      required
                      onChange={(e) => onChange(e)}
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dorado-logo focus:ring-dorado-logo"
                      placeholder="Nombre Completo..."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Correo
                    </label>
                    <input
                      value={email}
                      onChange={(e) => onChange(e)}
                      name="email"
                      type="email"
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dorado-logo focus:ring-dorado-logo"
                      placeholder="Correo..."
                    />
                  </div>

                  <div>
                    <label htmlFor="price" className="sr-only">
                      Telefono
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">+</span>
                      </div>
                      <input
                        type="number"
                        name="phone"
                        value={phone}
                        required
                        onChange={(e) => onChange(e)}
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Telefono..."
                        aria-describedby="price-currency"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only">Motivo</label>
                    <input
                      type="text"
                      name="reason"
                      value={reason}
                      required
                      onChange={(e) => onChange(e)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dorado-logo focus:ring-dorado-logo"
                      placeholder="Motivo..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      required
                      onChange={(e) => onChange(e)}
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dorado-logo focus:ring-dorado-logo"
                      placeholder="Tu mensaje aqui..."
                      defaultValue={""}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Presupuesto
                    </label>
                    <select
                      name="budget"
                      onChange={(e) => onChange(e)}
                      value={budget}
                      className="mt-1 block w-full pl-3 pr-10 py-4 rounded-md text-base border text-gray-500 border-gray-300 "
                    >
                      <option value="" className="text-gray-400">
                        Selecciona Tu Presupuesto (Opcional)
                      </option>
                      <option value="0-5k" className="text-gray-600">
                        $50 - 50.00
                      </option>
                      <option value="5-10k" className="text-gray-600">
                        $50.000 - 100.000
                      </option>
                      <option value="10-25k" className="text-gray-600">
                        $100.000 - 250.000
                      </option>
                      <option value="more" className="text-gray-600">
                        Más
                      </option>
                    </select>
                  </div>
                  <div className="px-4 py-5 sm:px-6">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                      <div className="grid-cols-12 ml-4 mt-2 flex">
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${
                            enabled ? "bg-dorado-logo" : "bg-gray-300"
                          }
                                col-span-3 relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${
                              enabled ? "translate-x-7" : "translate-x-0"
                            }
                                    pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                        <p className="col-span-9 ml-4 text-md font-regular leading-6 text-gray-600">
                          Al seleccionar esto, acepta los{" "}
                          <span className="text-blue-500">
                            <Link to="/terms">Terminos del Servicio</Link>
                          </span>{" "}
                          y{" "}
                          <span className="text-blue-500">
                            <Link to="/privacy">Política de privacidad</Link>
                          </span>
                          .
                        </p>
                      </div>
                      <div className="ml-4 mt-2 flex-shrink-0">
                        {loading ? (
                          <div className="relative inline-flex items-center rounded-md border border-transparent bg-dorado-logo px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-dorado-logo focus:ring-offset-2">
                            <PacmanLoader
                              loading={loading}
                              size={20}
                              color="#ffffff"
                            />
                          </div>
                        ) : (
                          <button
                            type="submit"
                            className="relative inline-flex items-center rounded-md border border-transparent bg-dorado-logo px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-dorado-logo focus:ring-offset-2"
                          >
                            Enviar Mensaje
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OptIn />
      <Footer />
    </Layout>
  );
}

export default Contacto;
