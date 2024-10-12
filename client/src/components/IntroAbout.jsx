/* eslint-disable react/prop-types */
const IntroAbout = ({ link }) => {
  return (
    <div className="col-sm-12">
      <ol className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li className="active">{link}</li>
      </ol>
    </div>
  );
};

export default IntroAbout;
