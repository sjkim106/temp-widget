import React, {Component} from 'react';


class WaterLevelPanelComponent extends Component {

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
    );
  }
}

export default WaterLevelPanelComponent;
