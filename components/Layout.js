import Header from './Header'
import '../styles/bootstrap.scss';
import '../styles/general.scss';
import '../styles/button.scss';
import '../styles/header.scss';
import '../styles/intro.scss';
import '../styles/service.scss';
import '../styles/resume.scss';
import '../styles/skill.scss';
import '../styles/contact.scss';
import '../styles/blog.scss';
import '../styles/responsive.scss';

import Footer from './Footer';


export const Layout = (props) => (
  <div>
    <Header />
    { props.children }
    <Footer />
  </div>
);

