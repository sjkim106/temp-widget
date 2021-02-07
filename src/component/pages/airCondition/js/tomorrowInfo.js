import React, {Component} from "react";
import * as util from "../../../common/js/util";
import TomorrowIndex from "./tomorrowIndex";

const dummyData = [
    {
        dataType : util.TYPE_OF_AIR_CONDITION_TOTAL_MORNING,
        dataValue : 261
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_TOTAL_AFTERNOON,
        dataValue : 252
    },
    {
        dataType : util.TYPE_OF_AIR_CONDITION_TOTAL_EVENING,
        dataValue : 101
    }
]

class TomorrowInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentData : dummyData
        }
    }

    render() {
    return (
        <div>
            <div className="next_info">
                <div className="std_title cond_icon">남해군 내일 대기정보</div>
                <div className="main_box">
                    {
                        this.state.currentData.map((_item, _index)=> {
                            return <TomorrowIndex dataType={_item.dataType} dataValue={_item.dataValue} />;
                        })
                    }
                </div>
            </div>
        </div>
    );

    }
}

export default TomorrowInfo;