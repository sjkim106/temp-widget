import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

// import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import './css/menuArea.css'
import './css/gisArea.css'
import './css/infoArea.css'

class Weather extends Component {

  constructor(_props){
    super(_props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="dashWrap">
      
      <ul className="menu_area">
        <li className="btn_menu btn_rainfall active" data-menu="menu1"></li>
        <li className="btn_menu btn_temp" data-menu="menu2"></li>
        <li className="btn_menu btn_wind" data-menu="menu3"></li>
        <li className="btn_menu btn_humidity" data-menu="menu4"></li>
      </ul>

      
      <div className="gis_area">
        
        <div className="gis_info gis_rain" id="menu1">
          <div className="loc_box loc_1">
            <div className="loc_name">설천면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_2">
            <div className="loc_name">고현면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_3">
            <div className="loc_name">창선면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_4">
            <div className="loc_name">서면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_5">
            <div className="loc_name">남해읍</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_6">
            <div className="loc_name">삼동면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_7">
            <div className="loc_name">이동면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_8">
            <div className="loc_name">남면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_9">
            <div className="loc_name">상주면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
          <div className="loc_box loc_10">
            <div className="loc_name">미조면</div>
            <div className="rain_num time_title">15<span>mm</span></div>
            <div className="rain_num day_title">25<span>mm</span></div>
          </div>
        </div>

        
        <div className="gis_info gis_temp" id="menu2">
          <div className="loc_box loc_1">
            <div className="loc_name">설천면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_2">
            <div className="loc_name">고현면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_3">
            <div className="loc_name">창선면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_4">
            <div className="loc_name">서면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_5">
            <div className="loc_name">남해읍</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_6">
            <div className="loc_name">삼동면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_7">
            <div className="loc_name">이동면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_8">
            <div className="loc_name">남면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_9">
            <div className="loc_name">상주면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
          <div className="loc_box loc_10">
            <div className="loc_name">미조면</div>
            <div className="temp_num">-1<sup><span>℃</span></sup></div>
            <div className="pressure_num">1020.5</div>
          </div>
        </div>

        
        <div className="gis_info gis_wind" id="menu3">
          <div className="loc_box loc_1">
            <div className="loc_name">설천면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_2">
            <div className="loc_name">고현면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_3">
            <div className="loc_name">창선면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_4">
            <div className="loc_name">서면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_5">
            <div className="loc_name">남해읍</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_6">
            <div className="loc_name">삼동면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_7">
            <div className="loc_name">이동면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_8">
            <div className="loc_name">남면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_9">
            <div className="loc_name">상주면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
          <div className="loc_box loc_10">
            <div className="loc_name">미조면</div>
            <div className="wind_num direct_title">160.1<br/>SEE</div>
            <div className="wind_num speed_title">0.8</div>
          </div>
        </div>

        
        <div className="gis_info gis_humidity" id="menu4">
          <div className="loc_box loc_1">
            <div className="loc_name">설천면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_2">
            <div className="loc_name">고현면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_3">
            <div className="loc_name">창선면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_4">
            <div className="loc_name">서면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_5">
            <div className="loc_name">남해읍</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_6">
            <div className="loc_name">삼동면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_7">
            <div className="loc_name">이동면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_8">
            <div className="loc_name">남면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_9">
            <div className="loc_name">상주면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
          <div className="loc_box loc_10">
            <div className="loc_name">미조면</div>
            <div className="gauge_chart">
              <div className="gauge_bar"></div>
            </div>
            <div className="percent_num">47%</div>
          </div>
        </div>
      </div>
    
      
      <div className="info_area">
         
        <div className="info_title rain_icon">강우 현황</div>
        <div className="table_in">
          
          <table className="list_table">
            <colgroup>
              <col width="28.57%" />
              <col width="13.86%" />
              <col width="13.86%" />
              <col width="13.86%" />
              <col width="13.86%" />
              <col width="15.99%" />
            </colgroup>
            <thead>
              <tr>
                <td>지역</td>
                <td>전시간</td>
                <td>시간</td>
                <td>금일</td>
                <td>전일</td>
                <td>월간</td>
              </tr>          
            </thead>
            <tbody>
              <tr>
                <td>설천면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>    
              <tr>
                <td>고현면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>서면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>남해읍</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>이동면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>남면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>상주면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>미조면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>삼동면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>창선면</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="info_title wind_icon">풍향·풍속</div>
        <div className="table_in">
          
          <table className="list_table">
            <colgroup>
              <col width="28.57%" />
              <col width="20.79%" />
              <col width="20.79%" />
              <col width="14.86%" />
              <col width="14.99%" />
            </colgroup>
            <thead>
              <tr>
                <td>지역</td>
                <td>전시간(풍향)</td>
                <td>시간(풍향)</td>
                <td>전시간(풍속)</td>
                <td>시간(풍속)</td>
              </tr>          
            </thead>
            <tbody>
              <tr>
                <td>설천면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>    
              <tr>
                <td>고현면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>서면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>남해읍</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>이동면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>남면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>상주면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>미조면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>삼동면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
              <tr>
                <td>창선면</td>
                <td>160.1 / SSE</td>
                <td>160.1 / SSE</td>
                <td>0.8</td>
                <td>0.8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
    );
  }
}

export default Weather;