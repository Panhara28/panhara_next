import React from 'react';

type Props = {
  link: string;
  title: string;
}

export class NavBarLink extends React.Component<Props>{
  state = {
    active: false
  }

  collapse = async () => {
    await this.setState({ active: !this.state.active})
    if(this.state.active){
      document.body.className = ""
      let close = document.getElementById("addo-nav-close");
      close.classList.remove("active");
      
    }
  }

  render(){
    return(
      <div>
        <li>
          <a href={this.props.link} onClick={this.collapse}>
            {this.props.title}
          </a>
        </li>
      </div>
    )
  }
}