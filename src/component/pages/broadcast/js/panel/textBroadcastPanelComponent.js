import React, {Component} from 'react';

class TextBroadcastPanelComponent extends Component {
    constructor (_props) {
        super(_props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="menu_info letter_board_wrap" id="menu2">
              <div className="letter_title">문자 전광판<span>List</span></div>
              <div className="list_area">
                
                <div className="list_box active">
                  <div className="board_name">문자 전광판 </div>
                  <div className="letter_state">문자 표출중</div>
                  <div className="board_row">
                    <div className="board_title loc_icon">위치</div>
                    <div className="board_txt">경남 남해군 남해읍 화전로95번길 21</div>
                  </div>
                  <div className="board_row">
                    <div className="board_title state_icon">상태</div>
                    <div className="board_txt normal_icon">ON</div>
                  </div>
                  <div className="realtime_area">
                    <div className="realtime_title">실시간 표출 문구</div>
                    <div className="realtime_box">
                      <div className="realtime_txt">불법 주정차 단속중.<br/>신속히 차량이동 바랍니다.</div>
                    </div>
                  </div>
                </div>
                
                <div className="list_box">
                  <div className="board_name">문자 전광판 </div>
                  <div className="board_row">
                    <div className="board_title loc_icon">위치</div>
                    <div className="board_txt">경남 남해군 남해읍 화전로95번길 21</div>
                  </div>
                  <div className="board_row">
                    <div className="board_title state_icon">상태</div>
                    <div className="board_txt error_icon">OFF</div>
                  </div>   
                  <div className="realtime_area">
                    <div className="realtime_title">실시간 표출 문구</div>
                    <div className="realtime_box">
                      <div className="realtime_txt">불법 주정차 단속중.<br/>신속히 차량이동 바랍니다.</div>
                    </div>
                  </div>             
                </div>
                
                <div className="list_box">
                  <div className="board_name">문자 전광판 </div>
                  <div className="letter_state">문자 표출중</div>
                  <div className="board_row">
                    <div className="board_title loc_icon">위치</div>
                    <div className="board_txt">경남 남해군 남해읍 화전로95번길 21</div>
                  </div>
                  <div className="board_row">
                    <div className="board_title state_icon">상태</div>
                    <div className="board_txt error_icon">OFF</div>
                  </div>   
                  <div className="realtime_area">
                    <div className="realtime_title">실시간 표출 문구</div>
                    <div className="realtime_box">
                      <div className="realtime_txt">불법 주정차 단속중.<br/>신속히 차량이동 바랍니다.</div>
                    </div>
                  </div>             
                </div>
              </div>
            </div>
        )
    }
}   
export default TextBroadcastPanelComponent;