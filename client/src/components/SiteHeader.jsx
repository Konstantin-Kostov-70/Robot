import { Link } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <div className="site-header-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/">
              <img src="/static/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col-sm-3 col-sm-offset-3 text-right">
            <span className="ion-android-cart"></span> 0 products
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-btn">
                  <button className="btn btn-default btn-robot" type="button">
                    Search
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
