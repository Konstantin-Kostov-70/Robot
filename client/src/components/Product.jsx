const Product = () => {
  return (
    <>
          <section id="product" className="product">
            <div className="container section-bg">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box">
                            <h2 className="title">Welcom to our <span>Robot Factory</span></h2>
                            <a href="#" className="btn btn-default btn-robot">view products</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="porduct-box">
                            <img className="img-responsive" src="/static/images/product-1.jpg" alt="product" />
                            <h3 className="product-title">Space robot</h3>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="porduct-box">
                            <img className="img-responsive" src="/static/images/product-2.jpg" alt="product" />
                            <h3 className="product-title">Sports robot</h3>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="porduct-box">
                            <img className="img-responsive" src="/static/images/product-3.jpg" alt="product" />
                            <h3 className="product-title">Toy for kids</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="classNameic-title">
                            <div className="stiker">
                                <h3 className="inner-stiker">Why we are best</h3>
                            </div>
                            <h3 className="outer-stiker">We Received best factory award in the 1998</h3>
                            <div className="incline-div"></div>
                        </div>
                    </div>
                    <div className="boxed">
                        <div className="col-sm-4">
                            <p className="p-large">
                                Sed lobortis volutpat imperdiet. faci.Fusce nec arcu ac neque tincidunt rutru tristique feugiat purus, id semper nisl tin vitae.Roin lobortis porta mattis. Mauris tincidunurus nec viverra mattis. Nunc convallis massa at eleifend blandit. Donec interdum.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <p>
                                Ead lobortis volutpat imperdiet. Nulla faci.Fusce nec arcu ac neque tincidunt rutrum. Pro tristique feugiat purus, id semper nisl tincidunt vitae.Roin lobortis porta mattis. Mauris tincidunt purus nec viverra mattis. Nunc convallis massa at eleifend blandit. Donec interdum, sem lacinia dignissime varius, nulla eros consectetur mauris. 
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <p>
                                Sed lobortis volutpat imperdiet. Nulla faci.Fusce nec arcu ac neque tincidunt rutrum. Pro tristique feugiat purus, id semper nisl tincidunt vitae.Roin lobortis porta mattis. Mauris tincidunt purus nec viverra mattis. Nunc convallis massa at eleifend blandit. Donec interdum, sem lacinia dignissime varius, nulla eros consectetur mauris. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Product
