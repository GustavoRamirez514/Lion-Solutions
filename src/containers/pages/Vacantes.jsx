import Header from "components/Vacants/Header";
import Culture from "components/Vacants/Culture";
import Testimonial from "components/Vacants/Testimonial";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import List from "components/Vacants/List";
import {Helmet} from "react-helmet";


function Carrera() {

  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return( 
  <Layout>
    <Helmet>
      <title>Lion Solutions | Vacantes</title>
    </Helmet>
    <Navbar/>
    <div className="pe:pt-32 pt-20">
    <Header/>
    <Testimonial/>
    <Culture/>
    <List/>
    </div>
    <Footer/>
  </Layout>
  );
}

export default Carrera;
