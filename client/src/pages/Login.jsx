import {Link} from "react-router-dom"
import Head from "../components/Head";
import SiteHeader from "../components/SiteHeader";
import MainHeader from "../components/MainHeader";
import IntroAbout from "../components/IntroAbout";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
        <Head title={'Robot | Login'} />
        <SiteHeader />
        <MainHeader introContent={<IntroAbout link={'Login'} />} additionalClasses="login-header inner-header" />
        <section id="register" className="register">
            <div className="container page-bgc">
                <Link to="/register">
                    <h1> To Register</h1>
                </Link>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Login