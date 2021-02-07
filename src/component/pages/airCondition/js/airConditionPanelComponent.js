import React, {Component} from "react";
import * as util from "../../../common/js/util";


class AirConditionPanelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : this.props.dataType,
            value : this.props.dataValue,
            title : this.props.dataTitle,
            text : "-",
            circleClass : "",
            faceClass : "",
            unitClass : ""
        }
    }

    componentDidMount() {
        let renderData = util.getStateOfAirCondition(this.state.type, this.state.value);
        if (renderData) {
            this.setState({
                text : renderData.textOfState,
                circleClass : renderData.circleClass,
                faceClass : renderData.faceClass,
                unitClass : renderData.unitClass
            });
        }

    }

    render() {
        return (
            <div>
                <div className={this.state.unitClass}>
                    <div className={this.state.circleClass}>{this.state.value}</div>
                    <div className="air_info">
                        <div className="air_name">{this.state.title}</div>
                        <div className={this.state.faceClass}>{this.state.text}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AirConditionPanelComponent;