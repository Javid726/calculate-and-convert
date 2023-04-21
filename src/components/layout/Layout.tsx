import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { Fragment } from 'react';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default Layout;
