const MainHeader = () => {
  return (
    <>
      <section id="header" className="main-header">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#site-nav-bar"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="site-nav-bar">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="intro row">
            <div className="overlay"></div>
            <div className="col-sm-6 col-sm-offset-6">
              <h2 className="header-quote">Save time and lower</h2>
              <p>Your sweeping costs with the</p>
              <h1 className="header-title">
                Robot
                <br/>
                  <span className="thin">Factory</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="nutral"></div>
      </section>
    </>
  );
};

export default MainHeader;
