import {Link} from "react-router-dom"
import Head from "../components/Head";
import SiteHeader from "../components/SiteHeader";
import MainHeader from "../components/MainHeader";
import IntroAbout from "../components/IntroAbout";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div>
        <Head title={'Robot | Register'} />
        <SiteHeader />
        <MainHeader introContent={<IntroAbout link={'Register'} />} additionalClasses="register-header inner-header" />
        <section id="register" className="register">
            <div className="container page-bgc">
              <Link to="/login">
                <h1> To Login</h1>
              </Link>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Register
