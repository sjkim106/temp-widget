import React, {Component} from "react";
import * as util from "../../../common/js/util";
import '../rightPanel.css';
import AirConditionPanelComponent from "./airConditionPanelComponent";
import TotalAir from "./totalAir";
import AirConditionChartComponent from "./airConditionChartComponent";
import {TYPE_OF_AIR_CONDITION_TOTAL} from "../../../common/js/util";


const dummyData = [
    {
        dataType : util.TYPE_OF_AIR_CONDITION_TOTAL,
        dataValue : 35
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_FINE_DUST,
        dataTitle : "미세먼지",
        dataValue : 35
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_ULTRA_DUST,
        dataTitle : "초미세먼지",
        dataValue : 101
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_SO2,
        dataTitle : "아황산가스",
        dataValue : 0.02
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_CO,
        dataTitle : "일산화탄소",
        dataValue : 10
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_OZONE,
        dataTitle : "오존",
        dataValue : 0.15
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_NO2,
        dataTitle : "이산화질소",
        dataValue : 0
    }
]

const chartData = [
    {
        dataType : util.TYPE_OF_AIR_CONDITION_FINE_DUST,
        dataTitle : "미세먼지",
        dataValue : 35
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_ULTRA_DUST,
        dataTitle : "초미세먼지",
        dataValue : 101
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_SO2,
        dataTitle : "아황산가스",
        dataValue : 0.02
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_CO,
        dataTitle : "일산화탄소",
        dataValue : 10
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_OZONE,
        dataTitle : "오존",
        dataValue : 0.15
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_NO2,
        dataTitle : "이산화질소",
        dataValue : 0
    }
]


class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData : dummyData,
            chartData : chartData
        }
    }

    render() {
        return (
            <div className="right_area">
                <div className="loc_txt">남해군</div>
                <div className="realtime_area">
                    <div className="title_txt">실시간 대기질 현황<span>(00시 00분 기준)</span></div>
                    {
                        this.state.currentData.map((_item, _index)=> {
                            if (_item.dataType === TYPE_OF_AIR_CONDITION_TOTAL) {
                                return <TotalAir dataType={_item.dataType} dataValue={_item.dataValue} />;
                            } else {
                                return <AirConditionPanelComponent dataType={_item.dataType} dataTitle={_item.dataTitle} dataValue={_item.dataValue} />;
                            }
                        })
                    }
                </div>
                <div className="hourly_area">
                    <div className="title_txt">
                        시간별 대기질 현황
                    </div>
                    {
                        this.state.chartData.map((_item, _index)=> {
                            return <AirConditionChartComponent dataType={_item.dataType} dataTitle={_item.dataTitle} dataValue={_item.dataValue} />;
                        })
                    }
                </div>
            </div>
        );
    }

}

export default RightPanel;
