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
        <MainHeader introContent={<IntroAbout link={'Register'} />} additionalClasses="contact-header inner-header" />
        <section id="register" className="register">
            <div className="container page-bgc">
                <h1>Register</h1>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Register
