import React, {Component} from 'react';

import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import EventListPanelComponent from './js/panel/list/eventListPanelComponent';
import CctvListPanelComponent from './js/panel/list/cctvListPanelComponent';
import LegendListPanelComponent from './js/panel/list/legendListPanelComponent';

import CctvViewerComponent from './js/viewer/cctvViewerComponent';

import './css/selectric.css';
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


const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_SHOW = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_SHOW";
const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_HIDE = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_HIDE";

const GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_SHOW = "GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_SHOW";
const GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_HIDE = "GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_HIDE";

const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT";
const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV";
const GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND = "GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND";

const AREA_LIST = [
  {
    index : 0,
    name : "설천면"
  },
  {
    index : 1,
    name : "고현면"
  },
  {
    index : 2,
    name : "서면"
  },
  {
    index : 3,
    name : "남해읍"
  },
  {
    index : 4,
    name : "남면"
  },
  {
    index : 5,
    name : "이동면"
  },
  {
    index : 6,
    name : "창선면"
  },
  {
    index : 7,
    name : "삼동면"
  },
  {
    index : 8,
    name : "상주면"
  },
  {
    index : 9,
    name : "미조면"
  },
]



const CCTV_LIST_DUMMY =  [
  {
    id : "CTV0032687",
    index : "1",
    position : {
      lat : "34.892971264777344",
      lon : "127.88463592529298"
    },
    url : ""
  },
  {
    id : "CTV0032680",
    index : "2",
    position : {
      lat : "34.84733925602843",
      lon : "127.84652709960939"
    },
    url : ""
  },
  {
    id : "CTV0032666",
    index : "3",
    position : {
      lat : "34.801681929887756",
      lon : "127.88635253906251"
    },
    url : ""
  },
  {
    id : "CTV0032755",
    index : "4",
    position : {
      lat : "34.79660733149717",
      lon : "127.93304443359376"
    },
    url : ""
  },
  {
    id : "CTV0032664",
    index : "5",
    position : {
      lat : "34.77517780602819",
      lon : "127.99072265625001"
    },
    url : ""
  },
  {
    id : "CTV0032774",
    index : "6",
    position : {
      lat: "34.86339785041955",
      lng: "128.05664062500003"
    },
    url : ""
  },
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


const MAP_TYPE_KAKAO = "MAP_TYPE_KAKAO";
const MAP_TYPE_VWORLD = "MAP_TYPE_VWORLD";
const MAP_TYPE_GOOGLE = "MAP_TYPE_GOOGLE";


const MAP_STYLE_STELLITE = "MAP_STYLE_STELLITE";
const MAP_STYLE_BASIC = "MAP_STYLE_BASIC";

class GisMain extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      currentShowLeft : GIS_MAIN_VIEW_STATUS_LEFT_PANEL_SHOW,
      currentShowRight : GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_SHOW,
      currentWidget : GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT,
      eventList : EVENT_LIST_DUMMY,
      currentEventFocus : "0",
      currentCctvFocus : "0",
      mapControlState : {
        type : MAP_TYPE_VWORLD,
        style : MAP_STYLE_BASIC,
        level : 13
      },
      facilityList : [

      ],
      cctvList : CCTV_LIST_DUMMY,
      areaList : AREA_LIST
    };

    this.checkCurrentPanel = this.checkCurrentPanel.bind(this);

    this.changeCurrentWidget = this.changeCurrentWidget.bind(this);

    this.drawCurrentPanel = this.drawCurrentPanel.bind(this);

    this.changeCurrentCctv = this.changeCurrentCctv.bind(this);

    this.changeCurrentMap = this.changeCurrentMap.bind(this);

    this.changeCurrentMapStyle = this.changeCurrentMapStyle.bind(this);

    this.changeCurrentMapLevel = this.changeCurrentMapLevel.bind(this);

    this.changeShowAndHideLeftPanel = this.changeShowAndHideLeftPanel.bind(this);

    this.changeShowAndHideRightPanel = this.changeShowAndHideRightPanel.bind(this);
  }  

  componentDidMount() {

  }

  checkCurrentPanel(_type) {
    return (this.state.currentWidget == _type) ? "active" : "";
  }

  changeCurrentWidget (_type) {
    this.setState({
      currentWidget : _type
    })
  }

  changeCurrentCctv (_index) {
    this.setState({
      currentCctvFocus : _index
    })
  }

  changeCurrentMapLevel (_type) {
    let mapControlState = this.state.mapControlState;
    let currentLevel = mapControlState.level;

    if (_type) currentLevel++;
    else currentLevel--;

    if (currentLevel > 15) currentLevel = 15;
    if (currentLevel < 9) currentLevel = 9;
    
    mapControlState.level = currentLevel;
    console.log(mapControlState);
    this.setState({
      mapControlState : mapControlState
    })
  }

  changeCurrentMap (_type) {
    let mapControlState = this.state.mapControlState;
    mapControlState.type = _type
    this.setState({
      mapControlState : mapControlState
    })
  }

  changeCurrentMapStyle (_style) {
    let mapControlState = this.state.mapControlState;
    mapControlState.style = _style
    this.setState({
      mapControlState : mapControlState
    })
  }

  drawCurrentPanel () {
    if (this.state.currentWidget ==  GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT) 
      return  <EventListPanelComponent list={this.state.eventList}/>
    else if (this.state.currentWidget ==  GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV) 
      return  <CctvListPanelComponent list={this.state.cctvList} areaList={this.state.areaList}/>
    else if (this.state.currentWidget ==  GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND) 
      return  <LegendListPanelComponent 
        list={this.state.eventList} 
        mapType={this.state.mapControlState.type} 
        changeCurrentMap={this.changeCurrentMap}
        />
  }

  changeShowAndHideLeftPanel (_type) {
    this.setState({
      currentShowLeft : _type
    })
  }

  changeShowAndHideRightPanel (_type) {
    this.setState({
      currentShowRight : _type
    })
  }

  render() {
    return (
    <div>
      <section className="dashWrap">
        <div className="gis_area">
          <LeafletMapComponent 
            eventList={this.state.eventList}
            cctvList={this.state.cctvList}
            mapType={this.state.mapControlState.type}
            mapStyle={this.state.mapControlState.style}
            mapLevel={this.state.mapControlState.level}
          />
        </div>
        
        <div className="gis_widget_area">
          
          <button 
            type="button" 
            className={"btn_evtlist " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT)}
            onClick={()=>{ this.changeCurrentWidget(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT)}}>
          </button>
          <button 
            type="button" 
            className={"btn_search " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV)}
            onClick={()=>{ this.changeCurrentWidget(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV)}}>
          </button>
          <button 
            type="button" 
            className={"btn_legend " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND)}
            onClick={()=>{ this.changeCurrentWidget(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND)}}>
          </button>
          
          <div className="loc_box">
            <select className="select_loc" id="selectDo">
              <option value="1">경상남도</option>              
            </select>
            <select className="select_loc" id="selectGun">
              <option value="1">남해군</option>              
            </select>
            <select className="select_loc" id="selectEup">
            {
              this.state.areaList.map((_item, _index)=>{
                return <option value={_index}>{_item.name}</option>;
              })
            }
            </select>
          </div>            
        </div>
        
        <section 
          className="dash_info_wrap" 
          style={(this.state.currentShowLeft == GIS_MAIN_VIEW_STATUS_LEFT_PANEL_HIDE) ? {left : "-23.54vw"} : {left : "0vw"}}>
          
          <button 
            type="button" 
            className="btn_tab"
            onClick={() => {
              if (this.state.currentShowLeft == GIS_MAIN_VIEW_STATUS_LEFT_PANEL_HIDE) {
                this.changeShowAndHideLeftPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_SHOW)
              } else {
                this.changeShowAndHideLeftPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_HIDE)
              }
              
            }}>
          </button>
          
          <button 
            type="button" 
            className="btn_dash_close"
            onClick={()=>{
              this.changeShowAndHideLeftPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_HIDE)
            }}
            >
          </button>

          <header className="dash_header">재난관제</header>
          
          <ul className="menu_btn_area">
            <li className={"btn_menu btn_evtlist " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT) } 
              data-menu="menu1"
              onClick={()=>{ this.changeCurrentWidget(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_EVENT)}}>이벤트 리스트</li>
            <li className={"btn_menu btn_search " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV) } 
              data-menu="menu2"
              onClick={()=>{ this.changeCurrentWidget(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_CCTV)}}>검색</li>
            <li className={"btn_menu btn_legend " + this.checkCurrentPanel(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND) } 
              data-menu="menu3"
              onClick={()=>{ this.changeCurrentWidget(GIS_MAIN_VIEW_STATUS_LEFT_PANEL_LEGEND)}}>범례</li>
          </ul>
          
          { this.drawCurrentPanel() }
          
        </section>

        
        <section 
          className="monitor_wrap"
          style={(this.state.currentShowRight == GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_HIDE) ? {right : "-23.54vw"} : {right : "0vw"}}>
          
          <button 
            type="button" 
            className="btn_tab"
            onClick={() => {
              console.log(this.state.currentShowRight);
              if (this.state.currentShowRight == GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_HIDE) {
                this.changeShowAndHideRightPanel(GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_SHOW)
              } else {
                this.changeShowAndHideRightPanel(GIS_MAIN_VIEW_STATUS_RIGHT_PANEL_HIDE)
              }
            }}>
          </button>
          
          <div className="gis_func_frame">
            
            <div className="view_box">
              <button 
                type="button" 
                className={"btn_view map_view " + ((this.state.mapControlState.style == MAP_STYLE_BASIC) ? "active" : "")}
                onClick={()=>{this.changeCurrentMapStyle(MAP_STYLE_BASIC)}}
                >지도</button>
              <button 
                type="button" 
                className={"btn_view sky_view " + ((this.state.mapControlState.style == MAP_STYLE_STELLITE)  ? "active" : "")}
                onClick={()=>{this.changeCurrentMapStyle(MAP_STYLE_STELLITE)}}
                >스카이뷰</button>
            </div>
            
            <div className="zoom_box">
              <button 
                type="button" 
                className="btn_plus"
                onClick={()=>{this.changeCurrentMapLevel(true)}}
                >                
              </button>
              <button 
                type="button" 
                className="btn_minus"
                onClick={()=>{this.changeCurrentMapLevel(false)}}
                >                
              </button>
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
              {
                this.state.cctvList.map((_item, _index) => {
                  return <CctvViewerComponent 
                    clickEvent={this.changeCurrentCctv}
                    isActive={(_index == this.state.currentCctvFocus) ? "active" : ""}
                    index={_index} 
                    itemData={_item}/>
                })
              }         
            </div>
            
            <div className="big_monitor_area">
              <div className="enlarge_txt">확대 View</div>
              <CctvViewerComponent                 
                index={this.state.currentCctvFocus} 
                itemData={this.state.cctvList[this.state.currentCctvFocus]} 
                isLarge={true}/>
            </div> 
          </div>
        </section>     
      </section>
    </div>
    );
  }
}

export default GisMain;