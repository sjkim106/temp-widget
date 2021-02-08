import React, {Component, useEffect, useRef} from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, FeatureGroup, useMapEvents} from 'react-leaflet'

function EventComponent() {
  const map = useMapEvents({
    click: (_event) => {
      console.log(_event.latlng)
      // map.locate()
    },
    locationfound: (location) => {
      // console.log('location found:', location)
    },
  })
  return null
}

function CctvMarkerFeatureGroup (_props) {
  const cctvFeatureGroupRef = useRef();

  useEffect (() => {
      console.log(cctvFeatureGroupRef);
  })

  console.log(_props);

  return <FeatureGroup ref={cctvFeatureGroupRef}/>
}

class LeafletMapComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      position : {
        lat : "34.8376721",
        lon : "127.8924234"
      },
      mapSize : {
        width : window.innerWidth,
        height : window.innerHeight
      },
      // source : "https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"  //google
      source : "http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png"  //google

    }    
  }

  componentDidMount () {
    console.log(this.props.cctvList)
  }

  render() {
    return (
      <MapContainer center={[this.state.position.lat, this.state.position.lon]} zoom={13} style={this.state.mapSize}>
        <TileLayer
          url={this.state.source}
        />
        
        <EventComponent />
        <CctvMarkerFeatureGroup 
          list={this.props.cctvList}
        />
      </MapContainer>
    );
  }
}

export default LeafletMapComponent;