import Header from './Header'

import '../styles/bootstrap.scss';
import '../styles/general.scss';
import '../styles/button.scss';
import '../styles/header.scss';
import '../styles/intro.scss';


export const Layout = (props) => (
  <div>
    <Header />
    { props.children }
  </div>
);

