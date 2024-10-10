/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const Head = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,300,500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:400,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/static/css/magnific-popup.css" rel="stylesheet" />
      <link href="/static/css/owl.carousel.css" rel="stylesheet" />
      <link href="/static/css/owl.carousel.theme.min.css" rel="stylesheet" />
      <link href="/static/css/ionicons.css" rel="stylesheet" />
      <link href="/static/css/main.css" rel="stylesheet" />

      {/* <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> */}
    </Helmet>
  );
};

export default Head;
