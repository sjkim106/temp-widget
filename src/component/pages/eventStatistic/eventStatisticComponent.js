import React, {Component} from 'react';

// import $ from 'jquery';
// import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

// import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import "./css/common.css";
import "./css/menuArea.css";
import "./css/gisArea.css";
import "./css/infoArea.css";
import "./css/selectBox.css";

class EventStatisticComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
    <div style={{width:"100%", height:"100%"}}>
      <section className="dashWrap">
      
      <ul className="menu_area">
        <li className="btn_menu btn_112 active"></li>
        <li className="btn_menu btn_vehicle"></li>
        <li className="btn_menu btn_119"></li>
        <li className="btn_menu btn_weak"></li>
        <li className="btn_menu btn_fire"></li>
      </ul>

      
      <section className="content_area">
        
        <div className="gis_area">
          
          <div className="map_box loc_1" id="mapbg1">
            <div className="count_txt">23</div>
          </div>
          <div className="map_box loc_2" id="mapbg2">
            <div className="count_txt">16</div>
          </div>
          <div className="map_box loc_3" id="mapbg3">
            <div className="count_txt">8</div>
          </div>
          <div className="map_box loc_4" id="mapbg4">
            <div className="count_txt">31</div>
          </div>
          <div className="map_box loc_5" id="mapbg5">
            <div className="count_txt">5</div>
          </div>
          <div className="map_box loc_6" id="mapbg6">
            <div className="count_txt">49</div>
          </div>
          <div className="map_box loc_7" id="mapbg7">
            <div className="count_txt">19</div>
          </div>
          <div className="map_box loc_8" id="mapbg8">
            <div className="count_txt">28</div>
          </div>
          <div className="map_box loc_9" id="mapbg9">
            <div className="count_txt">12</div>
          </div>
          <div className="map_box loc_10" id="mapbg10">
            <div className="count_txt">9</div>
          </div>
        </div>

        
        <div className="info_area">
          
          <div className="info_title event_icon">일 / 총 이벤트 현황</div>
          <div className="count_num">31<span className="slash_txt">/</span><span className="total_num">109</span></div>
          <div className="loc_area">
            <div className="loc_row">
              <div className="loc_box ftL" data-mapbg="mapbg1">설천면</div>
            </div>
            <div className="loc_row">
              <div className="loc_box ftL" data-mapbg="mapbg2">고현면</div>
              <div className="loc_box ftR" data-mapbg="mapbg7">창선면</div>
            </div>
            <div className="loc_row">
              <div className="loc_box ftL" data-mapbg="mapbg3">서면</div>
              <div className="loc_box ftL" data-mapbg="mapbg4">남해읍</div>
            </div>
            <div className="loc_row">
              <div className="loc_box ftR" data-mapbg="mapbg8">삼동면</div>
              <div className="loc_box ftR" data-mapbg="mapbg6">이동면</div>
              <div className="loc_box ftR" data-mapbg="mapbg5">남면</div>      
            </div>
            <div className="loc_row">              
              <div className="loc_box ftR" data-mapbg="mapbg10">미조면</div>
              <div className="loc_box ftR" data-mapbg="mapbg9">상주면</div>
            </div>
          </div>

          
          <div className="info_title chart_icon">기간별 이벤트 그래프</div>
          <div className="evt_btn_area">
            <button type="button" className="btn_evt active">이벤트 1</button>
            <button type="button" className="btn_evt">이벤트 2</button>
            <button type="button" className="btn_evt">이벤트 3</button>
          </div>
          <div className="chart_area">
            <select className="select_period" id="selectPeriod">
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