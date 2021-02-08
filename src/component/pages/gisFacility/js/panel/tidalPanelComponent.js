import React, {Component} from 'react';
import TidalChartComponent from '../chart/tidalChartComponent';


class TidalPanelComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
        currentFocus : this.props.focus
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <section class="dash_info_wrap">               
      
      <div class="menu_info tidalobserve_wrap">
        <header class="dash_header">
          <div class="dash_title">조위관측</div>
          <div class="dash_sub_title">Tidal Observation</div>
          <ul class="legend_area">
            <li class="legend_icon icon_01">최고치</li>
            <li class="legend_icon icon_04">주의</li>
            <li class="legend_icon icon_07">실측</li>
            <li class="legend_icon icon_02">최저치</li>
            <li class="legend_icon icon_05">경계</li>
            <li class="legend_icon icon_08">예측</li>
            <li class="legend_icon icon_03">보통</li>   
            <li class="legend_icon icon_06">위험</li>
          </ul>
        </header> 
        <div class="dash_body">
          
          <div class="list_box">
            <div class="list_title">삼천포</div>
            <div class="list_row">
              <div class="list_name loc_icon">위치</div>
              <div class="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>             
            <div class="chart_in" id="tidalLinecht">
              <TidalChartComponent />
            </div>
          </div>
          
          <div class="list_box">
            <div class="list_title">광양</div>
            <div class="list_row">
              <div class="list_name loc_icon">위치</div>
              <div class="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>             
            <div class="chart_in" >
              <TidalChartComponent />
            </div>
          </div>
          
          <div class="list_box">
            <div class="list_title">여수항</div>
            <div class="list_row">
              <div class="list_name loc_icon">위치</div>
              <div class="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>             
            <div class="chart_in" >
              <TidalChartComponent />
            </div>
          </div>
        </div>
      </div>  
    </section>
    );
  }
}

export default TidalPanelComponent;
