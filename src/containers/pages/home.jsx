import Clients from "components/home/Clients";
import Header from "components/home/Header";
import Icentives from "components/home/Icentive";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Lion Solutions</title>
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <Header />
        <Icentives />
        {/* <Casos/> */}
        <Clients />
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
