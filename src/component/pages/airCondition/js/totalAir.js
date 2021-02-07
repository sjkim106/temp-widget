import React, {Component} from "react";
import * as util from "../../../common/js/util";

class TotalAir extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type : this.props.dataType,
            value : this.props.dataValue,
            title : this.props.dataTitle,
            text : "-",
            circleClass : "",
            faceClass : ""
        }
    }

    componentDidMount() {
        let renderData = util.getStateOfAirCondition(this.state.type, this.state.value);
        if (renderData) {
            this.setState({
                text : renderData.textOfState,
                circleClass : renderData.circleClass,
                faceClass : renderData.faceClass
            });
        }

    }

    render() {
        return (
            <div>
                <div className="total_area">
                    <div className="total_title">통합대기환경지수</div>
                    <div className={this.state.circleClass}>{this.state.value}</div>
                    <div className={this.state.faceClass}>{this.state.text}</div>
                </div>
            </div>
        );
    }
}

export default TotalAir;