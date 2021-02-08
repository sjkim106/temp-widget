import React, {Component} from 'react';


class WifiPanelComponent extends Component {

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
        <div className="menu_info wifi_wrap">
          <header className="dash_header">
            <div className="dash_title">공공 와이파이</div>
            <div className="dash_sub_title">Public Wi-fi</div>
          </header> 
          <div className="dash_body">
            
            <div className="list_box">
              <div className="list_title">Wi-fi 001</div>
              <div className="count_num">123</div>
              <div className="count_title">실시간 접속자 수</div>
              <div className="list_row">
                <div className="list_name loc_icon">위치</div>
                <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
              </div>
              <div className="list_row">
                <div className="list_name sensor_icon">센서 상태</div>
                <div className="list_txt normal_icon">정상</div>
              </div>              
            </div>
           
            <div className="list_box">
              <div className="list_title">Wi-fi 001</div>
              <div className="count_num error_state">123</div>
              <div className="count_title">실시간 접속자 수</div>
              <div className="list_row">
                <div className="list_name loc_icon">위치</div>
                <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
              </div>
              <div className="list_row">
                <div className="list_name sensor_icon">센서 상태</div>
                <div className="list_txt error_icon">비정상</div>
              </div>              
            </div>           
          </div>
        </div>  
      </section>
    );
  }
}

export default WifiPanelComponent;
