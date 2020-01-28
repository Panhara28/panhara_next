import Header from '../components/Header';
import Footer from './Footer';
import Collapse from '../components/Collapse';

export const Layout = (props: any) => (
  <div id="addo-page"> 
    <Collapse />
    <Header />
    <div id="addo-main">
      {props.children}
      <Footer />
    </div>
  </div>
);

