import Link from 'next/link';

const Header = () => (
  <div>
    <header className="header" id="home">
      <nav id="menu" className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/"> <img id="logo_img" src="logo.png" alt="" /> </a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul id="navbar" className="nav navbar-nav navbar-right">
            <li className="active"><a href="#home" className="page-scroll">Home</a></li>
            <li><a href="#contact" className="page-scroll">contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;