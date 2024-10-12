import Head from "../components/Head";
import SiteHeader from "../components/SiteHeader";
import MainHeader from "../components/MainHeader";
import IntroAbout from "../components/IntroAbout";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Head title={'Robot | Contact'} />
      <SiteHeader />
      <MainHeader introContent={<IntroAbout link={'Contact'} />} additionalClasses="contact-header inner-header" />
      <section className="contact">
            <div className="container page-bgc">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box">
                            <p>Get in touch</p>
                            <h2 className="title mt0">With us</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="boxed">
                        <div className="col-sm-12">
                            <p className="inner-p">
                                Lorem ipsum dolor sit amet event landing template, consectetur adipisicing elit. Suscipit corrupti facilis event landing template, enim earum numquam minus veritatis nobis accusamus similique.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="map" className="col-sm-12">
                        <iframe className="map_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.278875347398!2d-77.05845558511638!3d38.87186095605503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6df29ed2c27%3A0xaf83d0f8c013532f!2sThe+Pentagon!5e0!3m2!1sen!2sbd!4v1463572803138" style={{border:'none'}} allowfullscreen></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="boxed">
                        <div className="col-sm-8">
                            <h4>Message for us</h4>
                            <form action="contact.php" className="contact-form" id="contactForm" method="post">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name*" id="fname" name="fname" required />
                                        </div> 
                                    </div> 
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name" id="lname" name="lname" />
                                        </div> 
                                    </div> 
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email*" id="email" name="email" required />
                                        </div> 
                                    </div> 
                                     <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone Number" id="phone" name="phone" />
                                        </div> 
                                    </div> 
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <textarea className="form-control" rows="6" placeholder="Write something..." name="message"></textarea>
                                        </div> 
                                    </div> 
                                    <div className="text-center mt20 col-sm-12">
                                        <button type="submit" className="btn btn-robot pull-left" id="cfsubmit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <div id="contactFormResponse"></div>
                        </div> 
                        <div className="col-sm-4">
                            <h4>Contact details</h4>
                            <div className="row">
                                <div className="col-xs-3">
                                    <img className="imgresponsive" src="/static/images/address.png" alt="con" />
                                </div>
                                <div className="col-xs-9">
                                    <h5>Address</h5>
                                    <p className="contact-detail">
                                        44 new design street, melbourne 005<br/>
                                        Australia 300
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-3">
                                    <img className="imgresponsive" src="/static/images/phone.png" alt="con"/>
                                </div>
                                <div className="col-xs-9">
                                    <h5>Phone</h5>
                                    <p className="contact-detail">
                                        01 (800) 433 744<br/>
                                        01 (800) 433 633
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-3">
                                    <img className="imgresponsive" src="/static/images/support.png" alt="con"/>
                                </div>
                                <div className="col-xs-9">
                                    <h5>Support</h5>
                                    <p className="contact-detail">
                                        support@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </>
  )
}

export default Contact
