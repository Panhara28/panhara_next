import React from 'react';

type Props = {
  active: boolean;
  onActive: () => void;
}

class Collapse extends React.Component<Props>{
  state = {
    active: false
  }

  collapse = async () => {
    // await this.setState({ active: !this.state.active })
    // console.log(this.state.active);
    
    // if(this.state.active){
    //   document.body.className = "offcanvas";
    // }else{
    //   document.body.className = "";
    // }
    this.props.onActive();
  }

  render(){
    return(
      <div>
        <a href="#" onClick={this.collapse} className={`js-addo-nav-toggle addo-nav-toggle ${this.props.active ? "active":"" }`} id="addo-nav-close">
          <i></i>
        </a>
      </div>
    )
  }
}

export default Collapse;