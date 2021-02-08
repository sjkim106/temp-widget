import React, {Component} from 'react';
import EarthquakeChartComponent from '../chart/earthquakeChartComponent';


class EarhquakePanelComponent extends Component {

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
      
      <div className="menu_info earthquake_wrap">
        <header className="dash_header">
          <div className="dash_title">지진계측</div>
          <div className="dash_sub_title">Earthquake Measurement</div>
        </header> 
        <div className="dash_body">
          
          <div className="list_box">
            <div className="list_title">지진 계측기 001</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sensor_icon">센서 상태</div>
              <div className="list_txt normal_icon">정상</div>
            </div>              
            <div className="chart_in" id="earthquakeLinecht">
              <EarthquakeChartComponent />
            </div>
          </div>
          
          <div className="list_box">
            <div className="list_title">지진 계측기 001</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sensor_icon">센서 상태</div>
              <div className="list_txt normal_icon">정상</div>
            </div>              
            <div className="chart_in" id="">
              <EarthquakeChartComponent />
            </div>
          </div>
        </div>
      </div>  
    </section>
    );
  }
}

export default EarhquakePanelComponent;
