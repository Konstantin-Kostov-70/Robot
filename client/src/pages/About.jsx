import Head from "../components/Head";
import SiteHeader from "../components/SiteHeader";
import MainHeader from "../components/MainHeader";
import IntroAbout from "../components/IntroAbout";
import Footer from "../components/Footer";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
    if (window.initializeTeam) {
        window.initializeTeam()
       }
    },[])

  return (
    <>
      <Head title={'Robot | About'} />
      <SiteHeader />
      <MainHeader introContent={<IntroAbout />} additionalClasses="about-header inner-header" />
      <section className="about">
            <div className="container page-bgc">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box">
                            <p>Feel free to</p>
                            <h2 className="title mt0">Know ourselfs</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="boxed">
                        <div className="col-sm-12">
                            <p className="inner-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="service">
                    <div className="row">
                        <div className="boxed">
                            <div className="col-sm-4">
                                <div className="service-box">
                                    <div className="service-title">
                                        <div className="icon">
                                            <span className="ion-ios-monitor"></span>
                                        </div>
                                         <div className="mt-10">
                                            DIY-Friendly
                                        </div>
                                    </div>
                                    <p>
                                        className aptent taciti sociosqu litora torquent conubia nos per inceptos himenaeo Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="service-box">
                                    <div className="service-title">
                                        <div className="icon">
                                            <span className="ion-person"></span>
                                        </div>
                                         <div className="mt-10">
                                            Amazing support
                                        </div>
                                    </div>
                                    <p>
                                        className aptent taciti sociosqu litora torquent conubia nos per inceptos himenaeo Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="service-box">
                                    <div className="service-title">
                                        <div className="icon">
                                            <span className="ion-ios-cloud-upload"></span>
                                        </div>
                                         <div>
                                            In the cloud
                                        </div>
                                    </div>
                                    <p>
                                        className aptent taciti sociosqu litora torquent conubia nos per inceptos himenaeo Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="service-box">
                                    <div className="service-title">
                                        <div className="icon">
                                            <span className="ion-android-options"></span>
                                        </div>
                                         <div className="mt-10">
                                            Flexible
                                        </div>
                                    </div>
                                    <p>
                                        className aptent taciti sociosqu litora torquent conubia nos per inceptos himenaeo Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="service-box">
                                    <div className="service-title">
                                        <div className="icon">
                                            <span className="ion-ios-color-wand"></span>
                                        </div>
                                         <div className="mt-10">
                                            Economical
                                        </div>
                                    </div>
                                    <p>
                                        className aptent taciti sociosqu litora torquent conubia nos per inceptos himenaeo Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="service-box">
                                    <div className="service-title">
                                        <div className="icon">
                                            <span className="ion-ios-cog"></span>
                                        </div>
                                         <div className="mt-10">
                                            Customizable
                                        </div>
                                    </div>
                                    <p>
                                        className aptent taciti sociosqu litora torquent conubia nos per inceptos himenaeo Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="machine-man">
                    <div className="row">
                        <div className="boxed">
                            <div className="col-sm-8">
                                <h4 className="m-s-title">CES 2015 Control Product of the Year</h4>
                                <h1 className="m-p-title">Convert your smart device into the ultimate remote control</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team">
                    <div className="row">
                        <div className="boxed">
                            <div className="col-sm-12">
                                <div className="title-box">
                                    <p>Meet our</p>
                                    <h2 className="title mt0">Team Members</h2>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img className="team-img img-responsive" src="/static/images/team-1.png" alt="team" />
                                    </div>
                                    <div className="team-img-detail">
                                        <h4 className="member-name">Jonathan Smith</h4>
                                        <h5 className="member-id">Founder &amp; CEO</h5>
                                        <p>
                                            Donec vehicula imperdiet justo, non viverra sapien egestas a. Aliquam ut sodales felis, eget iaculis erat.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="ion-social-facebook"></i></a>
                                            <a href="#"><i className="ion-social-twitter"></i></a>
                                            <a href="#"><i className="ion-social-linkedin"></i></a>
                                            <a href="#"><i className="ion-social-googleplus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img className="team-img img-responsive" src="/static/images/team-2.png" alt="team" />
                                    </div>
                                    <div className="team-img-detail">
                                        <h4 className="member-name">Jonathan Smith</h4>
                                        <h5 className="member-id">Founder &amp; CEO</h5>
                                        <p>
                                            Donec vehicula imperdiet justo, non viverra sapien egestas a. Aliquam ut sodales felis, eget iaculis erat.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="ion-social-facebook"></i></a>
                                            <a href="#"><i className="ion-social-twitter"></i></a>
                                            <a href="#"><i className="ion-social-linkedin"></i></a>
                                            <a href="#"><i className="ion-social-googleplus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img className="team-img img-responsive" src="/static/images/team-3.png" alt="team" />
                                    </div>
                                    <div className="team-img-detail">
                                        <h4 className="member-name">Jonathan Smith</h4>
                                        <h5 className="member-id">Founder &amp; CEO</h5>
                                        <p>
                                            Donec vehicula imperdiet justo, non viverra sapien egestas a. Aliquam ut sodales felis, eget iaculis erat.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="ion-social-facebook"></i></a>
                                            <a href="#"><i className="ion-social-twitter"></i></a>
                                            <a href="#"><i className="ion-social-linkedin"></i></a>
                                            <a href="#"><i className="ion-social-googleplus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img className="team-img img-responsive" src="/static/images/team-4.png" alt="team" />
                                    </div>
                                    <div className="team-img-detail">
                                        <h4 className="member-name">Jonathan Smith</h4>
                                        <h5 className="member-id">Founder &amp; CEO</h5>
                                        <p>
                                            Donec vehicula imperdiet justo, non viverra sapien egestas a. Aliquam ut sodales felis, eget iaculis erat.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="ion-social-facebook"></i></a>
                                            <a href="#"><i className="ion-social-twitter"></i></a>
                                            <a href="#"><i className="ion-social-linkedin"></i></a>
                                            <a href="#"><i className="ion-social-googleplus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img className="team-img img-responsive" src="/static/images/team-5.png" alt="team" />
                                    </div>
                                    <div className="team-img-detail">
                                        <h4 className="member-name">Jonathan Smith</h4>
                                        <h5 className="member-id">Founder &amp; CEO</h5>
                                        <p>
                                            Donec vehicula imperdiet justo, non viverra sapien egestas a. Aliquam ut sodales felis, eget iaculis erat.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="ion-social-facebook"></i></a>
                                            <a href="#"><i className="ion-social-twitter"></i></a>
                                            <a href="#"><i className="ion-social-linkedin"></i></a>
                                            <a href="#"><i className="ion-social-googleplus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img className="team-img img-responsive" src="/static/images/team-6.png" alt="team" />
                                    </div>
                                    <div className="team-img-detail">
                                        <h4 className="member-name">Jonathan Smith</h4>
                                        <h5 className="member-id">Founder &amp; CEO</h5>
                                        <p>
                                            Donec vehicula imperdiet justo, non viverra sapien egestas a. Aliquam ut sodales felis, eget iaculis erat.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="ion-social-facebook"></i></a>
                                            <a href="#"><i className="ion-social-twitter"></i></a>
                                            <a href="#"><i className="ion-social-linkedin"></i></a>
                                            <a href="#"><i className="ion-social-googleplus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta">
                    <div className="row">
                        <div className="boxed">
                            <div className="col-sm-9">
                                <p>
                                    If you love creating professional, beautiful and simple Robot or modify robot skills to help quickly and efficiently, then we can’t wait to welcome you onto our team.
                                </p>
                            </div>
                            <div className="col-sm-3">
                                <a className="btn btn-robot btn-block" href="#">Send us your resume</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
      <Footer />
    </>
  );
};

export default About;
