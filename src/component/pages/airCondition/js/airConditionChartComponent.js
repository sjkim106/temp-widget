import React, {Component} from "react";
import * as util from "../../../common/js/util";
import High from "./High";

class AirConditionChartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type : this.props.dataType,
            value : this.props.dataValue,
            title : this.props.dataTitle,
            text : "-",
            circleClass : "",
            unitClass : "",
            chartClass : "",
            unit : "",
            data : this.props.data
        }
    }

    componentDidMount() {
        let renderData = util.getStateOfAirCondition(this.state.type, this.state.value);
        if (renderData) {
            this.setState({
                text : renderData.textOfState,
                circleClass : renderData.circleClass,
                faceClass : renderData.faceClass,
                chartClass : renderData.chartClass,
                unit : renderData.unit
            });
        }

    }

    render() {
        return (
            <div>
                <div className="chart_info">
                    <div className="detail_info">
                        <div className="detail_title">{this.state.title}</div>
                        <div className={this.state.chartClass}>{this.state.value}</div>
                        <p className="c_unit">{this.state.unit}</p>
                    </div>
                    <High data = {this.state.data} />
                </div>
            </div>
        );
    }



}
export default AirConditionChartComponent;