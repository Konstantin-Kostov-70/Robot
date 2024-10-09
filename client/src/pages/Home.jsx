import Head from "../components/Head";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import Product from "../components/Product";
import IntroHome from "../components/IntroHome";
import History from "../components/History";
import Partner from "../components/Partner";

const Home = () => {
  return (
    <div>
      <Head />
      <SiteHeader />
      <MainHeader introContent={<IntroHome />} />
      <Product />
      <History />
      <Partner />
      <h1 id="home">Home Page</h1>
      <Footer />
    </div>
  );
};

export default Home;
