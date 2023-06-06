import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import Header from "components/services/Header";
import List from "components/services/List";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const software = [
  {
    title: "Equipo ágil de Programadores JS",
    href: "#",
    icon: <i className="bx bx-code-block bx-tada text-4xl text-gray-500"></i>,
    description:
      "Nuestro ágil equipo de desarrollo lo guiará a través del ciclo completo de desarrollo de productos. Podemos convertir sus ideas en espectaculares experiencias digitales, incluidos sitios web y aplicaciones móviles.",
  },
  {
    title: "Renueve su Producto",
    href: "#",
    icon: <i className="bx bx-rotate-right bx-tada text-4xl text-gray-500"></i>,
    description:
      "Con una profunda experiencia en tecnología, podemos actualizar su producto o servicio web existente. Podemos convertirlo en un producto digital emergente que se corresponda con los más mínimos requisitos de la era de la transformación digital.",
  },
  {
    title: "Desarrollo de Productos de Ciclo Completo",
    href: "#",
    icon: <i className="bx bx-git-branch bx-tada text-4xl text-gray-500"></i>,
    description:
      "Somos socio confiable en el desarrollo de productos de ciclo completo sin dolores de cabeza. Ayudamos a las empresas en todas las etapas: desde un concepto inicial hasta el diseño, desarrollo, prueba de usuario y mantenimiento de UI/UX.",
  },
  {
    title: "Diseño de Productos Digitales",
    href: "#",
    icon: <i className="bx bxl-deezer bx-tada text-4xl text-gray-500"></i>,
    description:
      "El diseño de productos está a la vanguardia de nuestros servicios principales. Nos destacamos en la creación de productos digitales que transmitan valor y se ajusten a las necesidades de nuestros clientes.",
  },
  {
    title: "Diseño de Identidad de Marca",
    href: "#",
    icon: <i className="bx bxl-go-lang bx-tada text-5xl text-gray-500"></i>,
    description:
      "El diseño de identidad de marca es la salsa especial que puede ayudar a su negocio a diferenciarse de los demás. Cocinémoslo juntos.",
  },
  {
    title: "Soluciones para el Diseño de Productos",
    href: "#",
    icon: <i className="bx bxs-contact bx-tada text-4xl text-gray-500"></i>,
    description:
      "Si carece de experiencia en cualquier aspecto del diseño y desarrollo de productos digitales, podemos ayudarlo. Solo ponte en contacto.",
  },
];

function Servicios() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <Layout>
      <Helmet>
      <title>Lion Solutions | Servicios</title>
    </Helmet>
      <Navbar />
      <div className="pe:pt-32 pt-20">
        <Header />
        <List posts={software} data={"Desarrollo de Software, Productos y Diseños"} />
      </div>
      <Footer />
    </Layout>
  );
}

export default Servicios;
