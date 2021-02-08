import React, {Component} from 'react';


class CounterPanelComponent extends Component {

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
            <div className="menu_info counter_wrap">
            <header className="dash_header">
                <div className="dash_title">무인계수기</div>
                <div className="dash_sub_title">Unmanned Counter</div>
                <ul className="legend_area">
                <li className="legend_icon icon_01">실시간 방문자 수</li>
                </ul>
            </header> 
            <div className="dash_body">                
                <div className="list_box active">
                <div className="list_title">Area-001</div>
                <div className="count_num">123</div>
                <div className="count_title">1일 누적수</div>
                <div className="list_row">
                    <div className="list_name loc_icon">위치</div>
                    <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                    <div className="list_name sensor_icon">센서 상태</div>
                    <div className="list_txt normal_icon">ON</div>
                </div>              
                <div className="chart_in">                    
                    <div className="counter_chart" id="counterColumncht01"></div>
                </div>
                <div className="list_row sensor_count">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="off_count">OFF<span>0</span></div>
                    <div className="on_count">ON<span>4</span></div>
                </div>                 
                <div className="sensor_list_area">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="sensor_list">
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt error_icon">OFF</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt error_icon">OFF</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    </div>
                </div>
                </div>                
                <div className="list_box">
                <div className="list_title">Area-002</div>
                <div className="count_num">123</div>
                <div className="count_title">1일 누적수</div>
                <div className="list_row">
                    <div className="list_name loc_icon">위치</div>
                    <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                    <div className="list_name sensor_icon">센서 상태</div>
                    <div className="list_txt error_icon">OFF</div>
                </div>              
                <div className="chart_in">                    
                    <div className="counter_chart" id="counterColumncht02"></div>
                </div>
                <div className="list_row sensor_count">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="off_count">OFF<span>0</span></div>
                    <div className="on_count">ON<span>4</span></div>
                </div>                 
                <div className="sensor_list_area">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="sensor_list">
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    </div>
                </div>
                </div>                
                <div className="list_box">
                <div className="list_title">Area-003</div>
                <div className="count_num">123</div>
                <div className="count_title">1일 누적수</div>
                <div className="list_row">
                    <div className="list_name loc_icon">위치</div>
                    <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                    <div className="list_name sensor_icon">센서 상태</div>
                    <div className="list_txt partialoff_icon">부분 OFF</div>
                </div>              
                <div className="chart_in">                    
                    <div className="counter_chart" id="counterColumncht03"></div>
                </div>
                <div className="list_row sensor_count">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="off_count">OFF<span>0</span></div>
                    <div className="on_count">ON<span>4</span></div>
                </div>                 
                <div className="sensor_list_area">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="sensor_list">
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    </div>
                </div>
                </div>                
                <div className="list_box">
                <div className="list_title">Area-004</div>
                <div className="count_num">123</div>
                <div className="count_title">1일 누적수</div>
                <div className="list_row">
                    <div className="list_name loc_icon">위치</div>
                    <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
                </div>
                <div className="list_row">
                    <div className="list_name sensor_icon">센서 상태</div>
                    <div className="list_txt normal_icon">ON</div>
                </div>              
                <div className="chart_in">                    
                    <div className="counter_chart" id="counterColumncht04"></div>
                </div>
                <div className="list_row sensor_count">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="off_count">OFF<span>0</span></div>
                    <div className="on_count">ON<span>4</span></div>
                </div>                 
                <div className="sensor_list_area">
                    <div className="sensor_title">개별 계측 센서</div>
                    <div className="sensor_list">
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt error_icon">OFF</div>
                    </div>
                    <div className="sensor_box">
                        <div className="sensor_name">계측센서_A0038</div>
                        <div className="list_txt normal_icon">ON</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>  
        </section>
    );
  }
}

export default CounterPanelComponent;
