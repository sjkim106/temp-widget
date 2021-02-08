import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';
import NavigatorComponent from './js/navigator/navigatorComponent';

import WaterLevelPanelComponent from './js/panel/waterLevelPanelComponent';
import CounterPanelComponent from './js/panel/counterPanelComponent';
import WifiPanelComponent from './js/panel/wifiPanelComponent';
import LampPanelComponent from './js/panel/lampPanelComponent';
import WeakPanelComponent from './js/panel/weakPanelComponent';
import TidalPanelComponent from './js/panel/tidalPanelComponent';
import EarthquakePanelComponent from './js/panel/earthquakePanelComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';

import './css/common.css';
import './css/seletBox.css';
import './css/gisIcon.css';
import './css/tree.css';
import './css/01waterLevel.css';
import './css/02counter.css';
import './css/03publicWifi.css';
import './css/04smartLamp.css';
import './css/05socialWeak.css';
import './css/06tidalObserve.css';

const FACILITY_TYPE_WATERLEVEL = "FACILITY_TYPE_WATERLEVEL";
const FACILITY_TYPE_COUNTER = "FACILITY_TYPE_COUNTER";
const FACILITY_TYPE_WIFI = "FACILITY_TYPE_WIFI";
const FACILITY_TYPE_LAMP = "FACILITY_TYPE_LAMP";
const FACILITY_TYPE_WEAK = "FACILITY_TYPE_WEAK";
const FACILITY_TYPE_TIDAL = "FACILITY_TYPE_TIDAL";
const FACILITY_TYPE_EARTHQUAKE = "FACILITY_TYPE_EARTHQUAKE";

class GisFacility extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      currentType : FACILITY_TYPE_WATERLEVEL,
      currentFocus : "",
    };

    this.renderPanel = this.renderPanel.bind(this);

    this.changeCurrentType = this.changeCurrentType.bind(this);
  }

  componentDidMount() {

  }

  changeCurrentType (_type) {
    this.setState({
      currentType : _type
    })
  }

  renderPanel() {
    if (FACILITY_TYPE_WATERLEVEL == this.state.currentType) 
      return <WaterLevelPanelComponent focus={this.state.currentFocus} />
    else if (FACILITY_TYPE_COUNTER == this.state.currentType) 
      return <CounterPanelComponent focus={this.state.currentFocus} />
    else if (FACILITY_TYPE_WIFI == this.state.currentType) 
      return <WifiPanelComponent focus={this.state.currentFocus} />
    else if (FACILITY_TYPE_LAMP == this.state.currentType) 
      return <LampPanelComponent focus={this.state.currentFocus} />
    else if (FACILITY_TYPE_WEAK == this.state.currentType) 
      return <WeakPanelComponent focus={this.state.currentFocus} />
    else if (FACILITY_TYPE_TIDAL == this.state.currentType) 
      return <TidalPanelComponent focus={this.state.currentFocus} />
    else if (FACILITY_TYPE_EARTHQUAKE == this.state.currentType) 
      return <EarthquakePanelComponent focus={this.state.currentFocus} />
  }

  render() {
    return (
    <div>      
      <section className="dashWrap">
      
        <div className="gis_area">
          <LeafletMapComponent />
        </div>
        
        {/* <div className="gis_icon_area">
          <div className="gis_icon water_normal loc_1"></div>
          <div className="gis_icon water_warning loc_2"></div>
          <div className="gis_icon water_vigilance loc_3"></div>
          <div className="gis_icon water_danger loc_4"></div>
          <div className="gis_icon water_none loc_5"></div>
          <div className="gis_icon water_error loc_6"></div>
          <div className="gis_legend water_legend"></div>
        </div> */}
        
        {/* <div className="gis_widget_area">
          
          <div className="loc_box">
            <select className="select_loc" id="selectDo">
              <option value="1">경상남도</option>
              <option value="1">경상북도</option>
              <option value="1">충청북도</option>
            </select>
            <select className="select_loc" id="selectGun">
              <option value="1">남해군</option>
              <option value="1">남해군</option>
              <option value="1">남해군</option>
            </select>
            <select className="select_loc" id="selectEup">
              <option value="1">남해읍</option>
              <option value="1">남해읍</option>
              <option value="1">남해읍</option>
            </select>
          </div>      
          
          <div className="facil_select_area">
            <div className="facil_select_head">
              <div className="select_title">시설물 선택</div>
              <div className="select_num">2</div>
              
              <button type="button" className="btn_open"></button>
            </div>
            <div className="facil_select_body">
              
              <div className="tree_in" id="tree"></div>
            </div>
          </div>        
          
          <div className="gis_func_frame">
            
            <div className="view_box">
              <button type="button" className="btn_view map_view active">지도</button>
              <button type="button" className="btn_view sky_view">스카이뷰</button>
            </div>
            
            <div className="zoom_box">
              <button type="button" className="btn_plus active"></button>
              <button type="button" className="btn_minus"></button>
            </div>
            
            <div className="func_box">
              <button type="button" className="btn_area"></button>
              <button type="button" className="btn_length"></button>
              <button type="button" className="btn_radius"></button>
            </div>
          </div>
        </div> */}

        
       <NavigatorComponent changeCurrentType={this.changeCurrentType} focus={this.state.currentType}/>

       {this.renderPanel()}
        
      </section>
    </div>
    );
  }
}

export default GisFacility;