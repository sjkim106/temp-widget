import React, {Component} from 'react';
import XeusPlayer from './xeus.player.2.1.0';

class CctvViewerComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      index : _props.index
    }
    this.player = React.createRef();
    
  }

  componentDidMount() {
    console.log(this.props.id);
    XeusPlayer("ws://118.37.153.251:18080/xeus-gateway/stream", this.props.itemData.id, this.player.current.id, false)
  }

  render() {
    return (
      <div 
        onClick={()=>{  this.props.clickEvent(this.props.index) }}
        className={"cctv_box " + this.props.isActive} 
        key={"cctvViewer" + this.props.index}>
        <header className={"cctv_header cctv_" + (this.props.index + 1)}>{this.props.itemData.id}</header>
        <div 
          className="cctv_view " 
          ref={this.player} 
          id={(this.props.isLarge)? ("cctvPlayerLarge") : ("cctvPlayer" + this.props.index)}>
        </div>
      </div>
    
    );
  }
}

export default CctvViewerComponent;