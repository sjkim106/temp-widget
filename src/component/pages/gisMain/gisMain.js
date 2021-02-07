import React, {Component} from 'react';

import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import EventListPanelComponent from './js/panel/eventListPanelComponent';
import CctvListPanelComponent from './js/panel/cctvListPanelComponent';
import LegendListPanelComponent from './js/panel/legendListPanelComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';

import './css/common.css';
import './css/monitoring.css';
import './css/gisIcon.css';
import './css/gisPopup.css';
import './css/seletBox.css';
import './css/01evtList.css';
import './css/02search.css';
import './css/03legend.css';
import './css/pagination.css';
import './css/tree.css';


const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_NONE = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_NONE";

const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT";
const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV";
const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND";

const CCTV_LIST_DUMMY = [

]

const EVENT_LIST_DUMMY = [
  {
    type : "침수",
    state : "발생",
    address : "남해읍 망운로10번가길 3",
    createdTime : "20-12-24 17:49",
    position : {
      lat : "34.840866",
      lon : "127.8924234"
    },
    title : "남해읍 침수 발생",
    contents : `OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중
    OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중
    OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중`,
    cctvList : [
      {
        id : "1",
        index : "1",
        position : {
          lat : "",
          lon : ""
        },
        url : ""
      },
      {
        id : "2",
        index : "2",
        position : {
          lat : "",
          lon : ""
        },
        url : ""
      },
      {
        id : "3",
        index : "3",
        position : {
          lat : "",
          lon : ""
        },
        url : ""
      },
      {
        id : "4",
        index : "4",
        position : {
          lat : "",
          lon : ""
        },
        url : ""
      },
      {
        id : "5",
        index : "5",
        position : {
          lat : "",
          lon : ""
        },
        url : ""
      },
      {
        id : "6",
        index : "6",
        position : {
          lat : "",
          lon : ""
        },
        url : ""
      },
    ]
  },
  {
    type : "침수",
    state : "발생",
    address : "남해읍 망운로10번가길 3",
    createdTime : "20-12-24 17:49",
    position : {
      lat : "34.840866",
      lon : "127.8924234"
    },
    title : "남해읍 침수 발생",
    contents : `OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중
    OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중
    OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중`
  },
  {
    type : "침수",
    state : "발생",
    address : "남해읍 망운로10번가길 3",
    createdTime : "20-12-24 17:49",
    position : {
      lat : "34.840866",
      lon : "127.8924234"
    },
    title : "남해읍 침수 발생",
    contents : `OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중
    OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중
    OOOO 건물 침수발생 / 건물내 화재 발생 / 119 출동 요청 대기중`
  }
];

const MAP_TYPE_BASIC = "MAP_TYPE_BASIC";
const MAP_TYPE_STELLITE = "MAP_TYPE_STELLITE";
const MAP_TYPE_NIGHT = "MAP_TYPE_NIGHT";
const MAP_TYPE_GRAY = "MAP_TYPE_GRAY";

class GisMain extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      currentWidget : GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT,
      eventList : EVENT_LIST_DUMMY,
      currentEventFocus : "",
      currentCctvFocus : "",
      mapControlState : {
        type : MAP_TYPE_BASIC,
        
      },
      facilityList : [

      ]
    };

    this.checkCurrentPanel = this.checkCurrentPanel.bind(this);

    this.changeCurrentFocus = this.changeCurrentFocus.bind(this);

    this.drawCurrentPanel = this.drawCurrentPanel.bind(this);
  }

  componentDidMount() {

  }

  checkCurrentPanel(_type) {
    return (this.state.currentWidget == _type) ? "active" : "";
  }

  changeCurrentFocus (_type) {
    this.setState({
      currentWidget : _type
    })
  }

  drawCurrentPanel () {
    if (this.state.currentWidget ==  GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT) return  <EventListPanelComponent list={this.state.eventList}/>
    else if (this.state.currentWidget ==  GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV) return  <CctvListPanelComponent list={this.state.cctvList}/>
    else if (this.state.currentWidget ==  GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND) return  <LegendListPanelComponent list={this.state.eventList}/>
  }

  render() {
    return (
    <div>
      <section className="dashWrap">
        <div className="gis_area">
          <LeafletMapComponent />
        </div>
        
        <div className="gis_widget_area">
          
          <button 
            type="button" 
            className={"btn_evtlist " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT)}
            onClick={()=>{ this.changeCurrentFocus(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT)}}>
          </button>
          <button 
            type="button" 
            className={"btn_search " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV)}
            onClick={()=>{ this.changeCurrentFocus(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV)}}>
          </button>
          <button 
            type="button" 
            className={"btn_legend " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND)}
            onClick={()=>{ this.changeCurrentFocus(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND)}}>
          </button>
          
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
        </div>

        
        
        <section className="dash_info_wrap">
          
          <button type="button" className="btn_tab"></button>
          
          <button type="button" className="btn_dash_close"></button>

          <header className="dash_header">재난관제</header>
          
          <ul className="menu_btn_area">
            <li className={"btn_menu btn_evtlist " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT) } 
              data-menu="menu1"
              onClick={()=>{ this.changeCurrentFocus(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT)}}>이벤트 리스트</li>
            <li className={"btn_menu btn_search " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV) } 
              data-menu="menu2"
              onClick={()=>{ this.changeCurrentFocus(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV)}}>검색</li>
            <li className={"btn_menu btn_legend " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND) } 
              data-menu="menu3"
              onClick={()=>{ this.changeCurrentFocus(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND)}}>범례</li>
          </ul>

          
          
          { this.drawCurrentPanel()}
          
        </section>

        
        <section className="monitor_wrap">
          
          <button type="button" className="btn_tab"></button>

          
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

          
          <div className="monitor_area">
            <header className="monitor_header">
              <div className="monitor_title">투망</div>
              <div className="monitor_loc">경남 남해군 남해읍 화전로95번길 21</div>
            </header>
            
            <div className="small_monitor_area">
              <div className="cctv_box">
                <header className="cctv_header cctv_1">CCTV_A223CCTV_A223CCTV_A223CCTV_A223CCTV_A223</header>
                <div className="cctv_view"></div>
              </div>
              <div className="cctv_box">
                <header className="cctv_header cctv_2">CCTV 002</header>
                <div className="cctv_view"></div>
              </div>
              <div className="cctv_box">
                <header className="cctv_header cctv_3">CCTV 003</header>
                <div className="cctv_view"></div>
              </div>
              <div className="cctv_box">
                <header className="cctv_header cctv_4">CCTV 004</header>
                <div className="cctv_view"></div>
              </div>
              <div className="cctv_box">
                <header className="cctv_header cctv_5">CCTV 005</header>
                <div className="cctv_view"></div>
              </div>
              <div className="cctv_box">
                <header className="cctv_header cctv_6">CCTV 006</header>
                <div className="cctv_view"></div>
              </div>
            </div>
            
            <div className="big_monitor_area">
              <div className="enlarge_txt">확대 View</div>
              <div className="cctv_box">
                <header className="cctv_header cctv_4">CCTV 004</header>
                <div className="cctv_view"></div>
              </div>
            </div> 
          </div>
        </section>     
      </section>
    </div>
    );
  }
}

export default GisMain;