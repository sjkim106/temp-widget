import React, {Component} from 'react';

import RainGroupComponet from './js/group/rainGroupComponent';
import TemperatureGroupComponet from './js/group/temperatureGroupComponent';
import WindGroupComponet from './js/group/windGroupComponent';
import HuminityGroupComponent from './js/group/huminityGroupComponent';


import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import './css/menuArea.css'
import './css/gisArea.css'
import './css/infoArea.css'


const WEATHER_TYPE_RAIN = "WEATHER_TYPE_RAIN";
const WEATHER_TYPE_HIMINITY = "WEATHER_TYPE_HIMINITY";
const WEATHER_TYPE_TEMPERATURE = "WEATHER_TYPE_TEMPERATURE";
const WEATHER_TYPE_GROUP = "WEATHER_TYPE_GROUP";

class Weather extends Component { 

  constructor(_props){
    super(_props);
    this.state = {
        type : WEATHER_TYPE_RAIN
    };

    this.changeCurrentType = this.changeCurrentType.bind(this);

    this.renderMapGroup = this.renderMapGroup.bind(this);
  }

  componentDidMount() {

  }

  changeCurrentType (_type) {
    this.setState({
        type : _type
    })
  }

  renderMapGroup () {
    if (this.state.type == WEATHER_TYPE_RAIN) return <RainGroupComponet />
    else if (this.state.type == WEATHER_TYPE_HIMINITY) return <TemperatureGroupComponet />
    else if (this.state.type == WEATHER_TYPE_TEMPERATURE) return <WindGroupComponet />
    else if (this.state.type == WEATHER_TYPE_GROUP) return <HuminityGroupComponent />
  }

  render() {
    return (
      <section className="dashWrap">
      
      <ul className="menu_area">
        <li 
            className={"btn_menu btn_rainfall " + ((this.state.type == WEATHER_TYPE_RAIN ) ? "active" : "") }
            data-menu="menu1"
            onClick={() => { this.changeCurrentType(WEATHER_TYPE_RAIN)}}>
        </li>
        <li 
            className={"btn_menu btn_temp " + ((this.state.type == WEATHER_TYPE_HIMINITY ) ? "active" : "") }
            data-menu="menu2"
            onClick={() => { this.changeCurrentType(WEATHER_TYPE_HIMINITY)}}>
        </li>
        <li 
            className={"btn_menu btn_wind " + ((this.state.type == WEATHER_TYPE_TEMPERATURE ) ? "active" : "") }
            data-menu="menu3"
            onClick={() => { this.changeCurrentType(WEATHER_TYPE_TEMPERATURE)}}>
        </li>
        <li 
            className={"btn_menu btn_humidity " + ((this.state.type == WEATHER_TYPE_GROUP ) ? "active" : "") }
            data-menu="menu4"
            onClick={() => { this.changeCurrentType(WEATHER_TYPE_GROUP)}}>
        </li>
      </ul>

      
      <div className="gis_area">
        { this.renderMapGroup() }
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