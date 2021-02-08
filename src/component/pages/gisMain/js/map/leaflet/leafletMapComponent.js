import React, {Component, useEffect, useRef} from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, MapConsumer, TileLayer, FeatureGroup, useMapEvents} from 'react-leaflet'

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
  console.log(map);
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



const MAP_TYPE_VWORLD = "MAP_TYPE_VWORLD";
const MAP_TYPE_GOOGLE = "MAP_TYPE_GOOGLE";


const MAP_STYLE_STELLITE = "MAP_STYLE_STELLITE";
const MAP_STYLE_BASIC = "MAP_STYLE_BASIC";

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
      mapType : this.props.mapType,
      mapStyle : this.props.mapStyle,
      mapLevel : this.props.mapLevel
    }    
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props);
    if (this.props.mapType !== prevProps.mapType
       || this.props.mapStyle !== prevProps.mapStyle
       || this.props.mapLevel !== prevProps.mapLevel) {

          this.setState({
                ...this.state,
                mapType : this.props.mapType,
                mapStyle : this.props.mapStyle,
                mapLevel : this.props.mapLevel
          })
    }
  }

  componentDidMount () {
    console.log(this.props.cctvList)

  }

  render() {
    return (
      <MapContainer center={[this.state.position.lat, this.state.position.lon]} zoom={this.state.mapLevel} style={this.state.mapSize}>
        <TileLayer url="http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png" 
          opacity={
            (this.state.mapType == MAP_TYPE_VWORLD &&
              this.state.mapStyle == MAP_STYLE_BASIC
              ) ? 1 : 0
          }
          />
        <TileLayer url="http://xdworld.vworld.kr:8080/2d/Satellite/service/{z}/{x}/{y}.jpeg" 
          opacity={
            (this.state.mapType == MAP_TYPE_VWORLD &&
              this.state.mapStyle == MAP_STYLE_STELLITE
              ) ? 1 : 0
          }
          />
        <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"  
          opacity={
            (this.state.mapType == MAP_TYPE_GOOGLE &&
              this.state.mapStyle == MAP_STYLE_BASIC
              ) ? 1 : 0
            }
        />

        <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}"  
          opacity={
            (this.state.mapType == MAP_TYPE_GOOGLE &&
              this.state.mapStyle == MAP_STYLE_STELLITE
              ) ? 1 : 0
            }
        />
        
        <EventComponent />
        <MapConsumer>
          {(map) => {
            map.setZoom(this.state.mapLevel);
            return null
          }}
        </MapConsumer>
        <CctvMarkerFeatureGroup  list={this.props.cctvList} />
      </MapContainer>
    );
  }
}

export default LeafletMapComponent;