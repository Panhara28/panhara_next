import React from 'react';

class Collapse extends React.Component{
  state = {
    active: false
  }

  collapse = () => {
    this.setState({ active: !this.state.active })
    console.log(this.state.active);
    
  }

  render(){
    return(
      <div>
        <a href="#" onClick={this.collapse} className="js-addo-nav-toggle addo-nav-toggle active">
          <i></i>
        </a>
      </div>
    )
  }
}

export default Collapse;