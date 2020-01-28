<<<<<<< HEAD
import Header from './Header'
// import '../styles/bootstrap.scss';
// import '../styles/general.scss';
// import '../styles/button.scss';
// import '../styles/header.scss';
// import '../styles/intro.scss';
// import '../styles/service.scss';
// import '../styles/resume.scss';
// import '../styles/skill.scss';
// import '../styles/contact.scss';
// import '../styles/blog.scss';
// import '../styles/responsive.scss';

=======
import Header from '../components/Header';
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
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

