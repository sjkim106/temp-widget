import React, {Component} from 'react';


class LampPanelComponent extends Component {

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
      <div className="menu_info smartlamp_wrap">
        <header className="dash_header">
          <div className="dash_title">스마트 가로등</div>
          <div className="dash_sub_title">Smart Street Lamp</div>
        </header> 
        <div className="dash_body">          
          <div className="list_box">
            <div className="list_title">S-가로등 001</div>
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
            <div className="list_title">S-가로등 001</div>
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
            <div className="list_title">S-가로등 001</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sensor_icon">센서 상태</div>
              <div className="list_txt error_icon">비정상</div>
            </div>              
          </div>          
          <div className="list_box">
            <div className="list_title">S-가로등 001</div>
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
            <div className="list_title">S-가로등 001</div>
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
            <div className="list_title">S-가로등 001</div>
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
            <div className="list_title">S-가로등 001</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sensor_icon">센서 상태</div>
              <div className="list_txt normal_icon">정상</div>
            </div>              
          </div>
        </div>
      </div>  
    </section>
    );
  }
}

export default LampPanelComponent;
