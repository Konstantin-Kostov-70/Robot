import { Link } from 'react-router-dom'
import { AiFillAndroid } from "react-icons/ai";

const SiteHeader = () => {
  return (
    <div className="site-header-bg">
      <div className="container">
        <div className="header-row">
          <div className="col-sm-6">
            <Link to="/">
              <img src="/static/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="search">
            <Link to='/login'>
              <AiFillAndroid className='android' />
            </Link>
            <div className='cart-form-wrapper'>
              <div className="cart-wrapper">
                <span className="ion-android-cart cart"></span>
                <span className='cart-number'>0 products</span>
              </div>
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
    </div>
  );
};

export default SiteHeader;
