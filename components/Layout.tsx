import Header from '../components/Header';
import Footer from './Footer';

export const Layout = (props: any) => (
  <div id="addo-page"> 
    <a href="#" className="js-addo-nav-toggle addo-nav-toggle">
      <i></i>
    </a>
    <Header />
    <div id="addo-main">
      {props.children}
      <Footer />
    </div>
  </div>
);

