import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';


const MAP_TYPE_KAKAO = "MAP_TYPE_KAKAO";
const MAP_TYPE_VWORLD = "MAP_TYPE_VWORLD";
const MAP_TYPE_GOOGLE = "MAP_TYPE_GOOGLE";

const MAP_TYPE_BASIC = "MAP_TYPE_BASIC";
const MAP_TYPE_STELLITE = "MAP_TYPE_STELLITE";
const MAP_TYPE_NIGHT = "MAP_TYPE_NIGHT";
const MAP_TYPE_GRAY = "MAP_TYPE_GRAY";

class LegendListPanelComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
        pagination : 0,
        eventList : this.props.list,
        currentFocus : this.props.mapType 
    };

    this.itemClickEvent = this.itemClickEvent.bind(this);
    this.checkCurrentFocus = this.checkCurrentFocus.bind(this);
  }

  componentDidMount() {

  }

  checkCurrentFocus (_index) {
    return (this.state.currentFocus == _index) ? "active" : "";
  }

  itemClickEvent (_type) {
    this.props.changeCurrentMap(_type);
    
  }
  
  render() {
    return (
      <div className="menu_info legend_wrap" id="menu3">
        <div className="dash_body">
          <div className="legend_title">지도 타입 선택</div>
          <div className="map_btn_area">
            <button 
              type="button" 
              className={"btn_map_type " + ((this.props.mapType == MAP_TYPE_GOOGLE) ? "active" : "")}
              onClick={()=>this.itemClickEvent(MAP_TYPE_GOOGLE)}>Google 지도</button>
            <button 
              type="button" 
              className={"btn_map_type " + ((this.props.mapType == MAP_TYPE_VWORLD) ? "active" : "")}
              onClick={()=>this.itemClickEvent(MAP_TYPE_VWORLD)}>V world</button>
          </div>
          <div className="legend_title">시설물 선택</div>
          <div className="facil_list_area">
            <div className="tree_in" id="tree"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LegendListPanelComponent;