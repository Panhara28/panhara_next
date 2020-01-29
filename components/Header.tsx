import { NavBarLink } from "./NavBarLink";
import React from "react";

type Props = {
  active: boolean;
  onActive: () => void;
}

export class Header extends React.Component<Props> {

  collapse = () =>{

    if(window.innerWidth < 700){
      this.props.onActive();
    }
    
  }

  render() {
    return (
      <div>
        <aside id="addo-aside">
          <div id="addo-logo"> <a href="">Panhara.work<span>Chhouk Tit Panhara</span></a> </div>
          <nav id="addo-main-menu">
            <ul>
              <li>
                <a href="#about" onClick={this.collapse}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={this.collapse}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#references" onClick={this.collapse}>
                  Team
                </a>
              </li>
              <li>
                <a href="#services" onClick={this.collapse}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={this.collapse}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#news" onClick={this.collapse}>
                  News
                </a>
              </li>
              <li>
                <a href="#contact" onClick={this.collapse}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="addo-footer">
            <ul>
              <li><a href="#"><i className="ti-facebook font-14px white-icon"></i></a></li>
              <li><a href="#"><i className="ti-twitter-alt font-14px white-icon"></i></a></li>
              <li><a href="#"><i className="ti-instagram font-14px white-icon"></i></a></li>
              <li><a href="#"><i className="ti-linkedin font-14px white-icon"></i></a></li>
            </ul>
            <p><small>&copy; 2020 Panhara.work by <a href="#">Chhouk Tit Panhara</a></small></p>
          </div>
        </aside>
      </div>
    )
  }
}