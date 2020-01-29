import { Header } from '../components/Header';
import Footer from './Footer';import React from 'react';
import Collapse from './Collapse';

type Props = {

}

export class Layout extends React.Component<Props>{

  state = {
    active: false
  }

  onActive = async () => {
    await this.setState({ active: !this.state.active })    
    if(this.state.active){
      document.body.className = "offcanvas";
    }else{
      document.body.className = "";
    }
  }
 
  render(){
    return(
      <div id="addo-page"> 
      <Collapse active={this.state.active} onActive={this.onActive}/>
      <Header active={this.state.active} onActive={this.onActive}/>
        <div id="addo-main">
        {this.props.children}
        <Footer />
      </div>
    </div>
    )
  }
}


