import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';
import selectric from 'jquery-selectric';

import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import TextBroadcastPanelComponent from './js/panel/textBroadcastPanelComponent'
import AudioBroadcastPanelComponent from './js/panel/audioBroadcastPanelComponent'


import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import '../../common/css/selectric.css';

import "./css/common.css";
import "./css/gisIcon.css";
import "./css/gisWidget.css";
import "./css/seletBox.css";
import "./css/01broadcast.css";
import "./css/02letterBoard.css";
import "./css/slider.css";
import "./css/tree.css";
import "./css/broadcastModal.css";
import "./css/writeModal.css";

import BroadcastConfirmModal from './js/modal/broadcastConfirmModal';
import BroadcastTextModal from './js/modal/broadcastTextModal';

const BROADCAST_PANEL_AUDIO = "BROADCAST_PANEL_AUDIO";
const BROADCAST_PANEL_TEXT = "BROADCAST_PANEL_TEXT";

class BroadcastComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      currentPanel : BROADCAST_PANEL_AUDIO
    };

    this.changeCurrentPanel = this.changeCurrentPanel.bind(this);
  }

  componentDidMount() {

  }

  changeCurrentPanel(_type) {
    this.setState({
      currentPanel : _type
    })
  }

  render() {
    return (
    <div style={{width:"100%", height:"100%"}}>
      <section className="dashWrap">
      
        <div className="gis_area">
          <LeafletMapComponent />
        </div>

        {/* <div className="gis_icon_area">
          <div className="gis_icon voice_normal loc_1"></div>
          <div className="gis_icon voice_error loc_2"></div>
          <div className="gis_icon board_on loc_3"></div>
          <div className="gis_icon board_off loc_4"></div>
          <div className="gis_legend voice_legend"></div> 
          
           <div className="gis_legend board_legend"></div>
          
        </div> */}

      
        <div className="gis_widget_area">
          
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
        </div>

      
      
        <section className="dash_info_wrap">
          
          <ul className="menu_btn_area">
            <li 
              className={"btn_menu btn_broadcast " + ((this.state.currentPanel == BROADCAST_PANEL_AUDIO)? "active": "") }
              data-menu="menu1"
              onClick={()=>{
                this.changeCurrentPanel(BROADCAST_PANEL_AUDIO)
              }}
              >음성 방송</li>
            <li 
              className={"btn_menu btn_board " + ((this.state.currentPanel == BROADCAST_PANEL_TEXT)? "active": "") }
              data-menu="menu2"
              onClick={()=>{
                this.changeCurrentPanel(BROADCAST_PANEL_TEXT)
              }}
              >문자 전광판</li>
          </ul>

          <div className="dash_body">
            {(this.state.currentPanel == BROADCAST_PANEL_AUDIO) ? <AudioBroadcastPanelComponent /> : <TextBroadcastPanelComponent />}
          </div>
        </section>
        <BroadcastConfirmModal />
        <BroadcastTextModal />
      </section>
    </div>
    );
  }
}

export default BroadcastComponent;