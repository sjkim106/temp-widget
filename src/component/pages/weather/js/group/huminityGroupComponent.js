import React, {Component} from 'react';

;

class HuminityGroupComponent extends Component { 

  constructor(_props){
    super(_props);
    this.state = {
        
    };

  }

  componentDidMount() {

  }

  changeCurrentType (_type) {
    this.setState({
        type : _type
    })
  }

  render() {
    return (
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
    );
  }
}

export default HuminityGroupComponent;