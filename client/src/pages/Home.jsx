import Head from "../components/Head";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

const Home = () => {
  return (
    <div>
      <Head />
      <SiteHeader />
      <MainHeader />
      <h1 id="home">Home Page</h1>
      <Footer />
    </div>
  );
};

export default Home;
