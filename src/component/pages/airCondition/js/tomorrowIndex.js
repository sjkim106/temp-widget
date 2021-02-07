import React, {Component} from "react";
import * as util from "../../../common/js/util";

class TomorrowIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : this.props.dataType,
            value : this.props.dataValue,
            title : this.props.dataTitle,
            text : "-",
            circleClass : "",
            weatherClass: "",
            name: ""
        }
    }

    componentDidMount() {
        let renderData = util.getStateOfAirCondition(this.state.type, this.state.value);
        if (renderData) {
            this.setState({
                text : renderData.textOfState,
                circleClass : renderData.circleClass,
                weatherClass: renderData.weatherClass,
                name: renderData.name

            });
        }

    }

    render() {
    return (
        <div className="main_row">
            <div className={this.state.weatherClass}>{this.state.name}</div>
            <div className={this.state.circleClass}>{this.state.text}</div>
        </div>
    );

    }
}

export default TomorrowIndex;