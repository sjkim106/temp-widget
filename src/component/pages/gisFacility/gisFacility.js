import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

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

class GisFacility extends Component {

  constructor(_props){
    super(_props);
    this.state = {

    };
  }

  componentDidMount() {

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

        
        <ul className="menu_btn_area">
          <li className="btn_menu btn_waterlevel active"></li>
          <li className="btn_menu btn_counter"></li>
          <li className="btn_menu btn_wifi"></li>
          <li className="btn_menu btn_lamp"></li>
          <li className="btn_menu btn_weak"></li>
          <li className="btn_menu btn_tidal"></li>
          <li className="btn_menu btn_earthquake"></li>
        </ul>

        
        
        <section className="dash_info_wrap">               
          
          <div className="menu_info waterlevel_wrap">
            <header className="dash_header">
              <div className="dash_title">수위계측</div>
              <div className="dash_sub_title">Water Level Measurement</div>
              <ul className="legend_area">
                <li className="legend_icon icon_01">최고치</li>
                <li className="legend_icon icon_04">주의</li>
                <li className="legend_icon icon_07">실측</li>
                <li className="legend_icon icon_02">최저치</li>
                <li className="legend_icon icon_05">경계</li>
                <li className="legend_icon icon_08">예측</li>
                <li className="legend_icon icon_03">보통</li>   
                <li className="legend_icon icon_06">위험</li>
              </ul>
            </header> 
            <div className="dash_body">
              
              <div className="list_box">
                <div className="list_title">수위계측 센서001</div>
                <div className="list_row">
                  <div className="list_name loc_icon">위치</div>
                  <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                  <div className="list_name sensor_icon">센서 상태</div>
                  <div className="list_txt normal_icon">정상</div>
                </div>              
                <div className="chart_in" id="waterLinecht"></div>
              </div>
              
              <div className="list_box">
                <div className="list_title">수위계측 센서001</div>
                <div className="list_row">
                  <div className="list_name loc_icon">위치</div>
                  <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                  <div className="list_name sensor_icon">센서 상태</div>
                  <div className="list_txt error_icon">비정상</div>
                </div>              
                <div className="chart_in" id=""></div>
              </div>
              
              <div className="list_box">
                <div className="list_title">수위계측 센서001</div>
                <div className="list_row">
                  <div className="list_name loc_icon">위치</div>
                  <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                  <div className="list_name sensor_icon">센서 상태</div>
                  <div className="list_txt normal_icon">정상</div>
                </div>              
                <div className="chart_in" id=""></div>
              </div>
              
              <div className="list_box">
                <div className="list_title">수위계측 센서001</div>
                <div className="list_row">
                  <div className="list_name loc_icon">위치</div>
                  <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                  <div className="list_name sensor_icon">센서 상태</div>
                  <div className="list_txt normal_icon">정상</div>
                </div>              
                <div className="chart_in" id=""></div>
              </div>
            </div>
          </div>  
        </section>
      </section>
    </div>
    );
  }
}

export default GisFacility;