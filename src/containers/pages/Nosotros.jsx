import Header from "components/about/Header";
import Team from "components/about/Team";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function Nosotros() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return( 
  <Layout>
    <Helmet>
      <title>Lion Solutions | Nosotros</title>
    </Helmet>
    <Navbar/>
    <div className="pe:pt-32 pt-20">
    <Header/>
    <Team/>
    </div>
    <Footer/>
  </Layout>
  );
}

export default Nosotros;
