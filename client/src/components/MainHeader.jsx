/* eslint-disable react/prop-types */
import Nav from "./Nav";

const MainHeader = ({ introContent, additionalClasses = '' }) => {
  return (
    <>
      <section id="header" className={`main-header ${additionalClasses}`} >
        <div className="container">
          <Nav />
          <div className="intro row">
            <div className="overlay"></div>
            { introContent }
          </div>
        </div>
        <div className="nutral"></div>
      </section>
    </>
  );
};

export default MainHeader;
