import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';
import selectric from 'jquery-selectric';

// import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import '../../common/css/selectric.css';

import "./css/common.css";
import "./css/menuArea.css";
import "./css/gisArea.css";
import "./css/infoArea.css";
import "./css/selectBox.css";


const EVENT_TYPE_POLICE = "EVENT_TYPE_POLICE" ;
const EVENT_TYPE_VEHICLE = "EVENT_TYPE_VEHICLE";
const EVENT_TYPE_FIRSTATION = "EVENT_TYPE_FIRSTATION" ;
const EVENT_TYPE_WEAK = "EVENT_TYPE_WEAK" ;
const EVENT_TYPE_FIRE = "EVENT_TYPE_FIRE" ;

const dummyData = [
  {
    name : "설천면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "고현면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "서면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "남해읍",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "남면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "이동면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "창선면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "삼동면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "상주면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
  {
    name : "미조면",
    event : {
      police : parseInt(Math.random() * 100),
      vehicle : parseInt(Math.random() * 100),
      firestation : parseInt(Math.random() * 100),
      weak : parseInt(Math.random() * 100),
      fire : parseInt(Math.random() * 100),
    },
  },
]

// 
// 
// 
// 
// 
// 
// 
// 



class EventStatisticComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      currentEventType : EVENT_TYPE_POLICE,
      areaList : dummyData,
      currentFocusArea : 0,
    };

    this.changeFocusEvent = this.changeFocusEvent.bind(this);

    this.changeFocusArea = this.changeFocusArea.bind(this);

    this.getCurrentEventName = this.getCurrentEventName.bind(this);

    this.selectriRef = React.createRef();
  }

  componentDidMount() {
    $("#" + this.selectriRef.current.id).selectric();
  }

  changeFocusEvent (_eventType) {
    this.setState({
      currentEventType : _eventType
    })
  }

  changeFocusArea (_index) {
    this.setState({
      currentFocusArea : _index
    })
  }

  getCurrentEventName () {
    
    if (this.state.currentEventType == EVENT_TYPE_POLICE) return "police";
    else if (this.state.currentEventType == EVENT_TYPE_VEHICLE) return "vehicle";
    else if (this.state.currentEventType == EVENT_TYPE_FIRSTATION) return "firestation";
    else if (this.state.currentEventType == EVENT_TYPE_WEAK) return "weak";
    else if (this.state.currentEventType == EVENT_TYPE_FIRE) return "fire";
  }

  render() {
    return (
    <div style={{width:"100%", height:"100%"}}>
      <section className="dashWrap">
      
      <ul className="menu_area">
        <li className={"btn_menu btn_112 " + ((this.state.currentEventType == EVENT_TYPE_POLICE) ? "active" : "")}
          onClick={()=>{this.changeFocusEvent(EVENT_TYPE_POLICE)}}
        >
          </li>
        <li className={"btn_menu btn_vehicle " + ((this.state.currentEventType == EVENT_TYPE_VEHICLE) ? "active" : "")}
          onClick={()=>{this.changeFocusEvent(EVENT_TYPE_VEHICLE)}}
        >            
          </li>
        <li className={"btn_menu btn_119 " + ((this.state.currentEventType == EVENT_TYPE_FIRSTATION) ? "active" : "")}
          onClick={()=>{this.changeFocusEvent(EVENT_TYPE_FIRSTATION)}}
        >            
          </li>
        <li className={"btn_menu btn_weak " + ((this.state.currentEventType == EVENT_TYPE_WEAK) ? "active" : "")}
          onClick={()=>{this.changeFocusEvent(EVENT_TYPE_WEAK)}}
        >            
          </li>
        <li className={"btn_menu btn_fire " + ((this.state.currentEventType == EVENT_TYPE_FIRE) ? "active" : "")}
          onClick={()=>{this.changeFocusEvent(EVENT_TYPE_FIRE)}}
        >            
          </li>
      </ul>

      
      <section className="content_area">
        
        <div className="gis_area">
          {
            this.state.areaList.map((_item, _index) => {
              let index = (_index + 1)
              let isActive = (_index == this.state.currentFocusArea) ? " active" : ""
              return (
                <div className={"map_box loc_" + index + isActive} id={"mapbg" + index}>
                  <div className="count_txt">{_item.event[this.getCurrentEventName()]}</div>
                </div>
              )
            })
          }
        </div>

        
        <div className="info_area">
          
          <div className="info_title event_icon">일 / 총 이벤트 현황</div>
          <div className="count_num">31<span className="slash_txt">/</span><span className="total_num">109</span></div>
          <div className="loc_area">
            <div className="loc_row">
              <div 
              className={"loc_box ftL" + ((this.state.currentFocusArea == (1 - 1))? " active" : "")} 
              data-mapbg="mapbg1"
              onClick={()=>{this.changeFocusArea(1 - 1)}}>설천면</div>
            </div>
            <div className="loc_row">
              <div 
              className={"loc_box ftL" + ((this.state.currentFocusArea == (2 - 1))? " active" : "")} 
              data-mapbg="mapbg2"
              onClick={()=>{this.changeFocusArea(2 - 1)}}>고현면</div>
              <div 
              className={"loc_box ftR" + ((this.state.currentFocusArea == (7 - 1))? " active" : "")} 
              data-mapbg="mapbg7"
              onClick={()=>{this.changeFocusArea(7 - 1)}}>창선면</div>
            </div>
            <div className="loc_row">
              <div 
              className={"loc_box ftL" + ((this.state.currentFocusArea == (3 - 1))? " active" : "")} 
              data-mapbg="mapbg3"
              onClick={()=>{this.changeFocusArea(3 - 1)}}>서면</div>
              <div 
              className={"loc_box ftL" + ((this.state.currentFocusArea == (4 - 1))? " active" : "")} 
              data-mapbg="mapbg4"
              onClick={()=>{this.changeFocusArea(4 - 1)}}>남해읍</div>
            </div>
            <div className="loc_row">
              <div 
              className={"loc_box ftR" + ((this.state.currentFocusArea == (8 - 1))? " active" : "")} 
              data-mapbg="mapbg8"
              onClick={()=>{this.changeFocusArea(8 - 1)}}>삼동면</div>
              <div 
              className={"loc_box ftR" + ((this.state.currentFocusArea == (6 - 1))? " active" : "")} 
              data-mapbg="mapbg6"
              onClick={()=>{this.changeFocusArea(6 - 1)}}>이동면</div>
              <div 
              className={"loc_box ftR" + ((this.state.currentFocusArea == (5 - 1))? " active" : "")} 
              data-mapbg="mapbg5"
              onClick={()=>{this.changeFocusArea(5 - 1)}}>남면</div>      
            </div>
            <div className="loc_row">              
              <div 
              className={"loc_box ftR" + ((this.state.currentFocusArea == (10 - 1))? " active" : "")} 
              data-mapbg="mapbg10"
              onClick={()=>{this.changeFocusArea(10 - 1)}}>미조면</div>
              <div 
              className={"loc_box ftR" + ((this.state.currentFocusArea == (9 - 1))? " active" : "")} 
              data-mapbg="mapbg9"
              onClick={()=>{this.changeFocusArea(9 - 1)}}>상주면</div>
            </div>
          </div>

          
          <div className="info_title chart_icon">기간별 이벤트 그래프</div>
          <div className="evt_btn_area">
            <button type="button" className="btn_evt">이벤트 1</button>
            <button type="button" className="btn_evt">이벤트 2</button>
            <button type="button" className="btn_evt">이벤트 3</button>
          </div>
          <div className="chart_area">
            <select className="select_period" id="selectPeriod" ref={this.selectriRef}>
              <option value="1">월별</option>
              <option value="1">일별</option>
            </select>
            
            <div className="chart_in" id="evtColumncht"></div>
          </div>
        </div>
      </section>
    </section>
    </div>
    );
  }
}

export default EventStatisticComponent;