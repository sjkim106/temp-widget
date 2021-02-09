import React, {Component} from 'react';

const textDummyData = [
  {
    address : "경남 남해군 남해읍 화전로95번길 21",
    state : true,
    isActive : true,
    text : "불법 주정차 단속중. 신속히 차량이동 바랍니다."
  },
  {
    address : "경남 남해군 남해읍 화전로95번길 21",
    state : false,
    isActive : false,
    text : "불법 주정차 단속중. 신속히 차량이동 바랍니다."
  },
  {
    address : "경남 남해군 남해읍 화전로95번길 21",
    state : false,
    isActive : false,
    text : "불법 주정차 단속중. 신속히 차량이동 바랍니다."
  },
]
class TextBroadcastPanelComponent extends Component {
    constructor (_props) {
        super(_props);
        this.state = {
          currentFocus : 0,
          textList : textDummyData
        };

        this.changeFocus = this.changeFocus.bind(this);
    }

    changeFocus (_index) {
      this.setState({
        currentFocus : _index
      })
    }

    render() {
        return (
            <div className="menu_info letter_board_wrap" id="menu2">
              <div className="letter_title">문자 전광판<span>List</span></div>
              <div className="list_area">
                {this.state.textList.map((_item, _index) => {
                  let isActive = (_index == this.state.currentFocus) ? " active" : ""
                  let isOn = (_item.state) ? "ON" : "OFF";
                  let isOnClass = (_item.state) ? "normal_icon" : "error_icon";
                  return (
                    <div 
                      className={"list_box" + isActive}
                      onClick={()=> {this.changeFocus(_index)}}
                    >
                      <div className="board_name">문자 전광판 </div>
                      {(_item.isActive) ? <div className="letter_state">문자 표출중</div> : ""}
                      <div className="board_row">
                        <div className="board_title loc_icon">위치</div>
                        <div className="board_txt">경남 남해군 남해읍 화전로95번길 21</div>
                      </div>
                      <div className="board_row">
                        <div className="board_title state_icon">상태</div>
                        <div className={"board_txt " + isOnClass}>{isOn}</div>
                      </div>
                      <div className="realtime_area">
                        <div className="realtime_title">실시간 표출 문구</div>
                        <div className="realtime_box">
                          <div className="realtime_txt">{_item.text}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                
                
             
              </div>
            </div>
        )
    }
}   
export default TextBroadcastPanelComponent;