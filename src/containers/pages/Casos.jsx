import Header from "components/casos/Header";
import List from "components/casos/List";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function Casos() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return( 
  <Layout>
    <Helmet>
      <title>Lion Solutions | Estudios</title>
    </Helmet>
    <Navbar/>
    <div className="pt-20">
    <Header/>
    <List/>
    </div>
    <Footer/>
  </Layout>
  );
}

export default Casos;
