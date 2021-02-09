import React, {Component} from 'react';

// import $ from 'jquery';
// import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

// import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import FacilityRateChartComponent from './js/chart/facilityRateChartComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import "./css/common.css"
import "./css/gisArea.css"
import "./css/infoArea.css"

const dummyData = [{
  name : "설천면",
  index : 1
},
{
  name : "고현면",
  index : 2
},
{
  name : "서면",
  index : 3
},
{
  name : "남해읍",
  index : 4
},
{
  name : "남면",
  index : 5
},
{
  name : "이동면",
  index : 6
},
{
  name : "창선면",
  index : 7
},
{
  name : "삼동면",
  index : 8
},
{
  name : "상주면",
  index : 9
},
{
  name : "미조면",
  index : 10
}];

class FacilityStatisticComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
      areaList : dummyData.map((_item) => {
        let item = _item;
        item.facilityList = {
          "cctv": parseInt(Math.random() * 100),
          "wifi": parseInt(Math.random() * 100),
          "lamp": parseInt(Math.random() * 100),
          "extinguisher": parseInt(Math.random() * 100),
          "toilet": parseInt(Math.random() * 100),
          "parkingLot": parseInt(Math.random() * 100),
          "radian": parseInt(Math.random() * 100),
          "oil": parseInt(Math.random() * 100),
          "farm": parseInt(Math.random() * 100),
        }
        return item;
      }),
      currentFocusArea : 1
    };

    this.changeFocusArea = this.changeFocusArea.bind(this);
  }

  componentDidMount() {

  }

  changeFocusArea (_index) {
    if (_index == 0) _index = this.state.areaList.length;
    else if (_index > this.state.areaList.length) _index = 1;
    this.setState({
      currentFocusArea : _index
    })
  }

  render() {
    return (
    <div style={{width:"100%", height:"100%"}}>
      <section className="dashWrap">
      
      <section className="content_area">
        <div className="loc_txt">{this.state.areaList[(this.state.currentFocusArea - 1)].name}</div>
        
        <div className="gis_area">
          {this.state.areaList.map((_item, _index)=>{
            let isActive = (_item.index == this.state.currentFocusArea) ? " active" : ""
            return (
            <div className={"map_box loc_" + _item.index + isActive} id={"mapbg" + _item.index}>
              <div 
                className="loc_box" 
                data-mapbg={"mapbg" + _item.index}
                onClick={()=>{this.changeFocusArea(_item.index)}}
                >{_item.name}</div>
            </div>);
          })}
        </div>

        
        <div className="info_area">
          
          <header className="info_header">
            <div className="info_title">시설물 현황</div>
            <button type="button" className="btn_download">액셀 다운로드</button>
          </header>

          
          <div className="pie_chart_area">
            
            <div className="pie_chart" id="pieChart">
              <FacilityRateChartComponent seriesData={this.state.areaList[(this.state.currentFocusArea - 1)].facilityList}/>
            </div>
            
            <div className="pie_legend_area">
              <div className="legend_row">
                <div className="legend_name purple_circle">CCTV</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name red_circle">공공와이파이</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name deepred_circle">스마트가로등</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name orange_circle">소화기</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name yellow_circle">공공화장실</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name green_circle">공공주차장</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name mint_circle">심장충격기</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name sky_circle">주유시설</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
              <div className="legend_row">
                <div className="legend_name violet_circle">차번호 인식 시스템</div>
                <div className="legend_num">308 / 41.5%</div>
              </div>
            </div>
          </div>

          
          <div className="facil_info_area">
            <div className="facil_slide_area">
              <button 
                type="button" 
                className="btn_prev"
                onClick={()=>{this.changeFocusArea(this.state.currentFocusArea - 1)}}></button>
              <button 
                type="button" 
                className="btn_next"
                onClick={()=>{this.changeFocusArea(this.state.currentFocusArea + 1)}}></button>
              <div className="loc_name">{this.state.areaList[(this.state.currentFocusArea - 1)].name}</div>
            </div>
            
            <div className="facil_list_area">
              <div className="facil_box mr266px">
                <div className="facil_icon cctv_icon"></div>
                <div className="facil_name">CCTV</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.cctv}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon wifi_icon"></div>
                <div className="facil_name">공공와이파이</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.wifi}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon lamp_icon"></div>
                <div className="facil_name">스마트가로등</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.lamp}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon fire_icon"></div>
                <div className="facil_name">소화기</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.extinguisher}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon toilet_icon"></div>
                <div className="facil_name">공공화장실</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.toilet}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon parking_icon"></div>
                <div className="facil_name">공공주차장</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.parkingLot}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon aed_icon"></div>
                <div className="facil_name">심장충격기</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.radian}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon petrol_icon"></div>
                <div className="facil_name">주유시설</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.oil}</div>
              </div>
              <div className="facil_box">
                <div className="facil_icon stock_icon"></div>
                <div className="facil_name">축산시설</div>
                <div className="facil_num">{this.state.areaList[(this.state.currentFocusArea - 1)].facilityList.farm}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
    );
  }
}

export default FacilityStatisticComponent;