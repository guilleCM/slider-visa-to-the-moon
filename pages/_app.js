/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Merriweather:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
