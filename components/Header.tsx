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
      <a className="navbar-brand" href="index.html"> <img id="logo_img" src="/logo.png" alt="" /> </a>
    </div>
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul id="navbar" className="nav navbar-nav navbar-right">
        <li className="active"><a href="#home" className="page-scroll">Home</a></li>
        <li className=""><a href="#about" className="page-scroll">About</a></li>
        <li className=""><a href="#service" className="page-scroll">Service</a></li>
        <li className=""><a href="#resume" className="page-scroll">Resume</a></li>
        <li className=""><a href="#skill" className="page-scroll">Skill</a></li>
        <li className=""><a href="#portfolio" className="page-scroll">Portfolio</a></li>
        <li className=""><a href="#blog" className="page-scroll">Blog</a></li>
        <li className=""><a href="#contact" className="page-scroll">contact</a></li>
        <li className="">
          <Link href="/about">
            <a className="">About</a>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <a className="page-scroll">Home</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</header>
  </div>
);

export default Header;