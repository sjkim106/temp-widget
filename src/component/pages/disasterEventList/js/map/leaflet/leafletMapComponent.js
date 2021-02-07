import React, {Component} from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer} from 'react-leaflet'

class LeafletMapComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      position : {
        lat : "34.8376721",
        lon : "127.8924234"
      },
      mapSize : {
        width : "100%",
        height : "100%"
      },
      source : "http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png"  //vworld

    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    // this.setState({ mapSize : {width: window.innerWidth, height: window.innerHeight }});
  }

  render() {
    return (
      <MapContainer center={[this.state.position.lat, this.state.position.lon]} zoom={13} style={this.state.mapSize}>
        <TileLayer
          url={this.state.source}
        />
      </MapContainer>
    );
  }
}

export default LeafletMapComponent;