import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import ReactDOMServer from 'react-dom/server';

class CctvMarkerComponent extends Component {
  constructor(_props) {
    super(_props);
    this.state = {
      hasLocation: false,
      //   position : _props.position
      position : [34.842690130552455, 127.8775978088379]
    };
  }

//   handleClick() {
//     this.refs.map.leafletElement.locate();
//   }

//   handleLocationFound(e) {
//     this.setState({
//       hasLocation: true,
//       latlng: e.latlng,
//     });
//   }
  renderNormalCctv () {
    return L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(
        <div class="gis_icon cctv_normal"></div>
        )
      });  
  }
  renderNormalCctvPopup () {
    return (
        <div class="cctv_camera_popup">
        <header class="popup_header">
            <div class="popup_title">생활방범 CCTV 049</div>                        
            <button type="button" class="btn_close"></button>
            <a type="button" class="btn_expansion" href="#close"></a>                 
        </header>
        <div class="popup_body">
            <div class="cctv_area"></div>
            <div class="cctv_info_area">
                <div class="cctv_row">
                <div class="cctv_info_name">법정동</div>
                <div class="cctv_info_txt">남해읍</div>
                </div>
                <div class="cctv_row">
                <div class="cctv_info_name">설치목적</div>
                <div class="cctv_info_txt">생활방범</div>
                </div>
                <div class="cctv_row wide_size">
                    <div class="cctv_info_name">명칭</div>
                    <div class="cctv_info_txt">방범-생활-남해읍-화천로-91-22<br/>사거리 남서방향</div>
                </div>
            </div>
        </div>                
    </div>)
  }

  renderPtzCctv () {
    return L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(
        <div class="gis_icon cctv_normal"></div>
        )
      });  
  }
  renderPtzCctvPopup () {
    return (
        <div class="cctv_camera_popup">
        <header class="popup_header">
            <div class="popup_title">생활방범 CCTV 049</div>                        
            <button type="button" class="btn_close"></button>
            <a type="button" class="btn_expansion" href="#close"></a>                 
        </header>
        <div class="popup_body">
            <div class="cctv_area"></div>
            <div class="cctv_info_area">
                <div class="cctv_row">
                <div class="cctv_info_name">법정동</div>
                <div class="cctv_info_txt">남해읍</div>
                </div>
                <div class="cctv_row">
                <div class="cctv_info_name">설치목적</div>
                <div class="cctv_info_txt">생활방범</div>
                </div>
                <div class="cctv_row wide_size">
                    <div class="cctv_info_name">명칭</div>
                    <div class="cctv_info_txt">방범-생활-남해읍-화천로-91-22<br/>사거리 남서방향</div>
                </div>
            </div>
        </div>                
    </div>)
  }

  render() {    
    const icon = this.renderNormalCctv();
    const popup = this.renderNormalCctvPopup();
    return (
        <Marker position={this.state.position} icon={icon}>
            <Popup>{popup}</Popup>
        </Marker>
    );
  }
}
export default CctvMarkerComponent;
