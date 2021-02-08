import React, {Component} from 'react';


const FACILITY_TYPE_WATERLEVEL = "FACILITY_TYPE_WATERLEVEL";
const FACILITY_TYPE_COUNTER = "FACILITY_TYPE_COUNTER";
const FACILITY_TYPE_WIFI = "FACILITY_TYPE_WIFI";
const FACILITY_TYPE_LAMP = "FACILITY_TYPE_LAMP";
const FACILITY_TYPE_WEAK = "FACILITY_TYPE_WEAK";
const FACILITY_TYPE_TIDAL = "FACILITY_TYPE_TIDAL";
const FACILITY_TYPE_EARTHQUAKE = "FACILITY_TYPE_EARTHQUAKE";


class NavigatorComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
        currentFocus : this.props.focus
    };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props);
    if (this.props.focus !== prevProps.focus) {
      this.setState({
        currentFocus : this.props.focus
      })
    }
  }

  render() {
    return (
        <ul className="menu_btn_area">
            <li className={"btn_menu btn_waterlevel " + ((this.state.currentFocus == FACILITY_TYPE_WATERLEVEL ) ? "active" : "")}
              onClick={()=>this.props.changeCurrentType(FACILITY_TYPE_WATERLEVEL)}
            ></li>
            <li className={"btn_menu btn_counter " + ((this.state.currentFocus == FACILITY_TYPE_COUNTER ) ? "active" : "")}
              onClick={()=>this.props.changeCurrentType(FACILITY_TYPE_COUNTER)}
            ></li>
            <li className={"btn_menu btn_wifi " + ((this.state.currentFocus ==  FACILITY_TYPE_WIFI ) ? "active" : "")}
              onClick={()=>this.props.changeCurrentType(FACILITY_TYPE_WIFI)}
            ></li>
            <li className={"btn_menu btn_lamp " + ((this.state.currentFocus ==  FACILITY_TYPE_LAMP) ? "active" : "")}
              onClick={()=>this.props.changeCurrentType(FACILITY_TYPE_LAMP)}
            ></li>
            <li className={"btn_menu btn_weak " + ((this.state.currentFocus == FACILITY_TYPE_WEAK)  ? "active" : "")}
              onClick={()=>this.props.changeCurrentType(FACILITY_TYPE_WEAK)}
            ></li>
            <li className={"btn_menu btn_tidal " + ((this.state.currentFocus == FACILITY_TYPE_TIDAL)  ? "active" : "")}
              onClick={()=>this.props.changeCurrentType(FACILITY_TYPE_TIDAL)}
            ></li>
            <li className={"btn_menu btn_earthquake " + ((this.state.currentFocus == FACILITY_TYPE_EARTHQUAKE ) ? "active" : "")}
              onClick={()=>this.props.changeCurrentType(FACILITY_TYPE_EARTHQUAKE)}
            ></li>
        </ul>
    );
  }
}

export default NavigatorComponent;