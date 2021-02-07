import React, {Component} from 'react';

// import $ from 'jquery';
// import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

// import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import "./css/common.css"
import "./css/gisArea.css"
import "./css/infoArea.css"


class FacilityStatisticComponent extends Component {

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
      
      <section className="content_area">
        <div className="loc_txt">남해읍</div>
        
        <div className="gis_area">
          
          <div className="map_box loc_1" id="mapbg1">
            <div className="loc_box" data-mapbg="mapbg1">설천면</div>
          </div>
          <div className="map_box loc_2" id="mapbg2">
            <div className="loc_box" data-mapbg="mapbg2">고현면</div>
          </div>
          <div className="map_box loc_3" id="mapbg3">
            <div className="loc_box" data-mapbg="mapbg3">서면</div>
          </div>
          <div className="map_box loc_4" id="mapbg4">
            <div className="loc_box" data-mapbg="mapbg4">남해읍</div>
          </div>
          <div className="map_box loc_5" id="mapbg5">
            <div className="loc_box" data-mapbg="mapbg5">남면</div>
          </div>
          <div className="map_box loc_6" id="mapbg6">
            <div className="loc_box" data-mapbg="mapbg6">이동면</div>
          </div>
          <div className="map_box loc_7" id="mapbg7">
            <div className="loc_box" data-mapbg="mapbg7">창선면</div>
          </div>
          <div className="map_box loc_8" id="mapbg8">
            <div className="loc_box" data-mapbg="mapbg8">삼동면</div>
          </div>
          <div className="map_box loc_9" id="mapbg9">
            <div className="loc_box" data-mapbg="mapbg9">상주면</div>
          </div>
          <div className="map_box loc_10" id="mapbg10">
            <div className="loc_box" data-mapbg="mapbg10">미조면</div>
          </div>
        </div>

        
        <div className="info_area">
          
          <header className="info_header">
            <div className="info_title">시설물 현황</div>
            <button type="button" className="btn_download">액셀 다운로드</button>
          </header>

          
          <div className="pie_chart_area">
            
            <div className="pie_chart" id="pieChart"></div>
            
            <div className="pie_legend_area">
              <div className="legend_row">
                <div className="legend_name purple_circle">CCTV</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name red_circle">공공와이파이</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name deepred_circle">스마트가로등</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name orange_circle">소화기</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name yellow_circle">공공화장실</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name green_circle">공공주차장</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name mint_circle">심장충격기</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name sky_circle">주유시설</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name violet_circle">차번호 인식 시스템</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
            </div>
          </div>

          
          <div className="facil_info_area">
            <div className="facil_slide_area">
              <button type="button" className="btn_prev"></button>
              <button type="button" className="btn_next"></button>
              <div className="loc_name">남해읍</div>
            </div>
            
            <div className="facil_list_area">
              <div className="facil_box mr266px">
                <div className="facil_icon cctv_icon"></div>
                <div className="facil_name">CCTV</div>
                <div className="facil_num">178</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon wifi_icon"></div>
                <div className="facil_name">공공와이파이</div>
                <div className="facil_num">15</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon lamp_icon"></div>
                <div className="facil_name">스마트가로등</div>
                <div className="facil_num">16</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon fire_icon"></div>
                <div className="facil_name">소화기</div>
                <div className="facil_num">22</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon toilet_icon"></div>
                <div className="facil_name">공공화장실</div>
                <div className="facil_num">84</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon parking_icon"></div>
                <div className="facil_name">공공주차장</div>
                <div className="facil_num">17</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon aed_icon"></div>
                <div className="facil_name">심장충격기</div>
                <div className="facil_num">29</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon petrol_icon"></div>
                <div className="facil_name">주유시설</div>
                <div className="facil_num">8</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon stock_icon"></div>
                <div className="facil_name">축산시설</div>
                <div className="facil_num">33</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
    );
  }
}

export default FacilityStatisticComponent;