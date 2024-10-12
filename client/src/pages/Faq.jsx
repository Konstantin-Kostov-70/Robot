import Head from "../components/Head";
import SiteHeader from "../components/SiteHeader";
import MainHeader from "../components/MainHeader";
import IntroAbout from "../components/IntroAbout";
import Footer from "../components/Footer";

const Faq = () => {
  return (
    <>
      <Head title={'Robot | FAQ'} />
      <SiteHeader />
      <MainHeader introContent={<IntroAbout link={'FAQ'} />} additionalClasses="faq-header inner-header" />
      <section className="faq">
            <div className="container page-bgc">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box">
                            <p>Frequently asked</p>
                            <h2 className="title mt0">Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <p className="inner-p">
                            Lorem ipsum dolor sit amet event landing template, consectetur adipisicing elit. Suscipit corrupti facilis event landing template, enim earum numquam minus veritatis nobis accusamus similique, totam?
                        </p>
                        <div id="accordion" role="tablist" aria-multiselectable="true" className="panel-group">
                            <div className="panel panel-default">
                                <div id="headingOne" role="tab" className="panel-heading">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="collapsed">How do I become an author?</a>
                                    </h4>
                                </div>
                                <div id="collapseOne" role="tabpanel" aria-labelledby="headingOne" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                    <div className="panel-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div id="headingTwo" role="tab" className="panel-heading">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" className="">Helpful Resources for Authors &amp; for marketers</a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" className="panel-collapse collapse in" aria-expanded="true">
                                    <div className="panel-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div id="headingThree" role="tab" className="panel-heading">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="collapsed">How much money can I make?</a>
                                    </h4>
                                </div>
                                <div id="collapseThree" role="tabpanel" aria-labelledby="headingThree" className="panel-collapse collapse" aria-expanded="false">
                                    <div className="panel-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div id="headingFour" role="tab" className="panel-heading">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="collapsed">Can I offer my items for free on a promotional basis?</a>
                                    </h4>
                                </div>
                                <div id="collapseFour" role="tabpanel" aria-labelledby="headingFour" className="panel-collapse collapse" aria-expanded="false">
                                    <div className="panel-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
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

export default Faq
