import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';


class LegendListPanelComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
        pagination : 0,
        eventList : this.props.list,
        currentFocus : 0 
    };

    this.itemClickEvent = this.itemClickEvent.bind(this);
    this.checkCurrentFocus = this.checkCurrentFocus.bind(this);
  }

  componentDidMount() {

  }

  checkCurrentFocus (_index) {
    return (this.state.currentFocus == _index) ? "active" : "";
  }

  itemClickEvent (_index) {
    this.setState({
        currentFocus : _index
    });
  }
  
  render() {
    return (
      <div className="menu_info legend_wrap" id="menu3">
        <div className="dash_body">
          <div className="legend_title">지도 타입 선택</div>
          <div className="map_btn_area">
            <button type="button" className="btn_map_type active">카카오 지도</button>
            <button type="button" className="btn_map_type">V world</button>
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