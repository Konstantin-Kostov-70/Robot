import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
