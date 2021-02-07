import React, {Component} from 'react';

// import $ from 'jquery';
// import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import "./css/common.css";
import "./css/gisIcon.css";
import "./css/gisWidget.css";
import "./css/seletBox.css";
import "./css/01broadcast.css";
import "./css/02letterBoard.css";
import "./css/slider.css";
import "./css/tree.css";
import "./css/broadcastModal.css";
import "./css/writeModal.css";

class BroadcastComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
    <div style={{width:"100%", height:"100%"}}>
      <section className="dashWrap">
      
        <div className="gis_area">
          <LeafletMapComponent />
        </div>

        {/* <div className="gis_icon_area">
          <div className="gis_icon voice_normal loc_1"></div>
          <div className="gis_icon voice_error loc_2"></div>
          <div className="gis_icon board_on loc_3"></div>
          <div className="gis_icon board_off loc_4"></div>
          <div className="gis_legend voice_legend"></div> 
          
           <div className="gis_legend board_legend"></div>
          
        </div> */}

      
        <div className="gis_widget_area">
          
          <div className="loc_box">
            <select className="select_loc" id="selectDo">
              <option value="1">경상남도</option>
              <option value="1">경상북도</option>
              <option value="1">충청북도</option>
            </select>
            <select className="select_loc" id="selectGun">
              <option value="1">남해군</option>
              <option value="1">남해군</option>
              <option value="1">남해군</option>
            </select>
            <select className="select_loc" id="selectEup">
              <option value="1">남해읍</option>
              <option value="1">남해읍</option>
              <option value="1">남해읍</option>
            </select>
          </div>    
          
          <div className="gis_func_frame">
            
            <div className="view_box">
              <button type="button" className="btn_view map_view active">지도</button>
              <button type="button" className="btn_view sky_view">스카이뷰</button>
            </div>
            
            <div className="zoom_box">
              <button type="button" className="btn_plus active"></button>
              <button type="button" className="btn_minus"></button>
            </div>
            
            <div className="func_box">
              <button type="button" className="btn_area"></button>
              <button type="button" className="btn_length"></button>
              <button type="button" className="btn_radius"></button>
            </div>
          </div>        
        </div>

      
      
        <section className="dash_info_wrap">
          
          <ul className="menu_btn_area">
            <li className="btn_menu btn_broadcast active" data-menu="menu1">음성 방송</li>
            <li className="btn_menu btn_board" data-menu="menu2">문자 전광판</li>
          </ul>

          <div className="dash_body">
            
            <div className="menu_info broadcast_wrap" id="menu1">
              
              <div className="tab_area">
                <button type="button" className="btn_tab active" data-tab="tab1">신규 방송 전파</button>
                <button type="button" className="btn_tab" data-tab="tab2">방송 전파 내역</button>
              </div>
              
              <div className="tab_info new_broadcast_wrap" id="tab1">
                <header className="info_header">
                  <div className="info_title">방송지역 선택</div>
                </header>
                <div className="broadcast_frame">
                  <div className="tree_in" id="tree"></div>
                </div>
                <header className="info_header">
                  <div className="info_title">방송 종류 선택</div>
                  <button type="button" className="btn_write" data-toggle="modal" data-target="#writeModal">직접 작성</button>
                </header>
                <div className="broadcast_frame large_size">
                  <div className="type_box">문자 강풍 경보</div>
                  <div className="type_box">문자 호우 주의보</div>
                  <div className="type_box">문자 강풍 예비 특보</div>
                  <div className="type_box">문자 태풍 주의보</div>
                  <div className="type_box">미세먼지 주의 경보</div>
                  <div className="type_box">문자 강풍 경보</div>
                </div>
                <header className="info_header">
                  <div className="info_title">방송 효과 설정</div>
                  <button type="button" className="btn_listen">미리듣기</button>
                </header>
                <div className="effect_area">
                  <div className="effect_row">
                    <div className="effect_title">방송제목</div>
                    <input type="text" className="effect_input"></input>
                  </div>
                  <div className="effect_row">
                    <div className="effect_title">시작 효과음</div>
                    <select className="select_sound" id="selectStartSound">
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                    </select>
                    <select className="select_sound ftR" id="selectStartRepeat">
                      <option value="1">1회 반복</option>
                      <option value="1">2회 반복</option>
                      <option value="1">3회 반복</option>
                    </select>
                  </div>
                  <div className="effect_row">
                    <div className="effect_title">종료 효과음</div>
                    <select className="select_sound" id="selectEndSound">
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                    </select>
                    <select className="select_sound ftR" id="selectEndRepeat">
                      <option value="1">1회 반복</option>
                      <option value="1">2회 반복</option>
                      <option value="1">3회 반복</option>
                    </select>
                  </div>
                  <div className="effect_row">
                    <div className="effect_title">방송내용 반복</div>
                    <select className="select_repeat" id="selectRepeat">
                      <option value="1">1회 반복</option>
                      <option value="1">2회 반복</option>
                      <option value="1">3회 반복</option>
                    </select>
                  </div>
                  <div className="effect_row">
                    <div className="effect_title">볼륨 조절</div>
                    
                    <div className="speaker_icon"></div>
                    <input id="ex6" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="3"/>
                    <span id="ex6CurrentSliderValLabel"><span id="ex6SliderVal">3</span></span>
                  </div>
                </div>
                
                <button type="button" className="btn_broadcast" data-toggle="modal" data-target="#broadcastModal">방송하기</button>
              </div>
              
              <div className="tab_info broadcast_list_wrap" id="tab2">
                <div className="list_area">
                  
                  <div className="list_box active">
                    <div className="list_row">
                      <div className="list_title">방송 제목</div>
                      <div className="list_txt">코로나 1.5 단계 모임 자제</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 대상</div>
                      <div className="list_txt">남해읍 전체, 고현면 전체, 서면 전체</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 일시</div>
                      <div className="list_txt">2021-01-20   17:42:36</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 종류</div>
                      <div className="list_txt">코로나</div>
                    </div>
                    <div className="effect_info">
                      <div className="effect_info_title">적용 방송 효과</div>
                      <div className="list_row">
                        <div className="list_title">시작 효과음</div>
                        <div className="list_txt">start_music_0012.wmv  /  2회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">종료 효과음</div>
                        <div className="list_txt">end_music_0232.wmv  /  1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">방송내용 반복</div>
                        <div className="list_txt">1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">송출 볼륨</div>
                        <div className="list_txt">62</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list_box">
                    <div className="list_row">
                      <div className="list_title">방송 제목</div>
                      <div className="list_txt">코로나 1.5 단계 모임 자제</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 대상</div>
                      <div className="list_txt">남해읍 전체, 고현면 전체, 서면 전체</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 일시</div>
                      <div className="list_txt">2021-01-20   17:42:36</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 종류</div>
                      <div className="list_txt">코로나</div>
                    </div>
                    <div className="effect_info">
                      <div className="effect_info_title">적용 방송 효과</div>
                      <div className="list_row">
                        <div className="list_title">시작 효과음</div>
                        <div className="list_txt">start_music_0012.wmv  /  2회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">종료 효과음</div>
                        <div className="list_txt">end_music_0232.wmv  /  1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">방송내용 반복</div>
                        <div className="list_txt">1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">송출 볼륨</div>
                        <div className="list_txt">62</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list_box">
                    <div className="list_row">
                      <div className="list_title">방송 제목</div>
                      <div className="list_txt">코로나 1.5 단계 모임 자제</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 대상</div>
                      <div className="list_txt">남해읍 전체, 고현면 전체, 서면 전체</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 일시</div>
                      <div className="list_txt">2021-01-20   17:42:36</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 종류</div>
                      <div className="list_txt">코로나</div>
                    </div>
                    <div className="effect_info">
                      <div className="effect_info_title">적용 방송 효과</div>
                      <div className="list_row">
                        <div className="list_title">시작 효과음</div>
                        <div className="list_txt">start_music_0012.wmv  /  2회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">종료 효과음</div>
                        <div className="list_txt">end_music_0232.wmv  /  1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">방송내용 반복</div>
                        <div className="list_txt">1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">송출 볼륨</div>
                        <div className="list_txt">62</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list_box">
                    <div className="list_row">
                      <div className="list_title">방송 제목</div>
                      <div className="list_txt">코로나 1.5 단계 모임 자제</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 대상</div>
                      <div className="list_txt">남해읍 전체, 고현면 전체, 서면 전체</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 일시</div>
                      <div className="list_txt">2021-01-20   17:42:36</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 종류</div>
                      <div className="list_txt">코로나</div>
                    </div>
                    <div className="effect_info">
                      <div className="effect_info_title">적용 방송 효과</div>
                      <div className="list_row">
                        <div className="list_title">시작 효과음</div>
                        <div className="list_txt">start_music_0012.wmv  /  2회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">종료 효과음</div>
                        <div className="list_txt">end_music_0232.wmv  /  1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">방송내용 반복</div>
                        <div className="list_txt">1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">송출 볼륨</div>
                        <div className="list_txt">62</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list_box">
                    <div className="list_row">
                      <div className="list_title">방송 제목</div>
                      <div className="list_txt">코로나 1.5 단계 모임 자제</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 대상</div>
                      <div className="list_txt">남해읍 전체, 고현면 전체, 서면 전체</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 일시</div>
                      <div className="list_txt">2021-01-20   17:42:36</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 종류</div>
                      <div className="list_txt">코로나</div>
                    </div>
                    <div className="effect_info">
                      <div className="effect_info_title">적용 방송 효과</div>
                      <div className="list_row">
                        <div className="list_title">시작 효과음</div>
                        <div className="list_txt">start_music_0012.wmv  /  2회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">종료 효과음</div>
                        <div className="list_txt">end_music_0232.wmv  /  1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">방송내용 반복</div>
                        <div className="list_txt">1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">송출 볼륨</div>
                        <div className="list_txt">62</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list_box">
                    <div className="list_row">
                      <div className="list_title">방송 제목</div>
                      <div className="list_txt">코로나 1.5 단계 모임 자제</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 대상</div>
                      <div className="list_txt">남해읍 전체, 고현면 전체, 서면 전체</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 일시</div>
                      <div className="list_txt">2021-01-20   17:42:36</div>
                    </div>
                    <div className="list_row">
                      <div className="list_title">방송 종류</div>
                      <div className="list_txt">코로나</div>
                    </div>
                    <div className="effect_info">
                      <div className="effect_info_title">적용 방송 효과</div>
                      <div className="list_row">
                        <div className="list_title">시작 효과음</div>
                        <div className="list_txt">start_music_0012.wmv  /  2회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">종료 효과음</div>
                        <div className="list_txt">end_music_0232.wmv  /  1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">방송내용 반복</div>
                        <div className="list_txt">1회 반복</div>
                      </div>
                      <div className="list_row">
                        <div className="list_title">송출 볼륨</div>
                        <div className="list_txt">62</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
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
          </div>
        </section>

      
        <div className="modal fade broadcast_modal" id="broadcastModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">방송 전파 하기</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="end_title">2021년 1월(대한) - 호우 주의보<br/>음성방송</div>
                <div className="end_sub_txt">선택하신 지역에<br/><span>방송</span>을 하시겠습니까?</div>
                
                <button type="button" className="btn btn-default spread" data-dismiss="modal" data-toggle="modal">방송하기</button>
              </div>
            </div>
          </div>
        </div>

      
        <div className="modal fade write_modal" id="writeModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">방송 전파 내용 직접 작성</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <textarea className="broadcast_text"></textarea>
                <div className="byte_txt"><span>60</span>/ 1000 byte</div>
                
                <button type="button" className="btn btn-default spread" data-dismiss="modal" data-toggle="modal">적용</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default BroadcastComponent;