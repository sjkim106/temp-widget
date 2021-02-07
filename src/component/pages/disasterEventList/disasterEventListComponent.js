import React, {Component} from 'react';

// import $ from 'jquery';
// import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

import LeafletMapComponent from './js/map/leaflet/leafletMapComponent';

import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import '../../common/css/common.css';

import "./css/common.css";
import "./css/gisIcon.css";
import "./css/disasterList.css";
import "./css/evtDetail.css";
import "./css/situSpread.css";
import "./css/report.css";
import "./css/selecBox.css";
import "./css/tree.css";
import "./css/slider.css";
import "./css/datePicker.css";
import "./css/evtEndModal.css";
import "./css/situSpreadModal.css";
import "./css/broadCastModal.css";
import "./css/selectCctvModal.css";


class DisasterEventListComponent extends Component {

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
        <section className="dash_list_wrap">
          <header className="dash_header">재난상황 발생 목록</header>
          <div className="dash_body">
            <div className="timeline_bar"></div>
            
            <div className="list_area">
              
              <div className="list_frame">
                <div className="evt_figure">
                  <div className="time_txt">2021-01-08    17:26:43</div>
                  <div className="evt_circle"></div>
                </div>
                <div className="list_box evt_occur">
                  <div className="evt_title">주택 / 창고 화재 발생</div>
                  <div className="evt_txt">※ 화재</div>
                  <div className="list_row">
                    <div className="list_name">발송처</div>
                    <div className="list_txt">소방긴급구조</div>
                  </div>
                  <div className="list_row">
                    <div className="list_name">처리상태</div>
                    <div className="list_txt">발생</div>
                  </div>
                  <button type="button" className="btn_evtend" data-toggle="modal" data-target="#evtEndModal">이벤트 종료</button>
                </div>
              </div>
              
              <div className="list_frame">
                <div className="evt_figure">
                  <div className="time_txt">2021-01-08    17:26:43</div>
                  <div className="history_circle"></div>
                </div>
                <div className="list_box active">
                  <div className="evt_title">주택 / 창고 화재 발생</div>
                  <div className="evt_txt">※ 긴급구조</div>
                  <div className="list_row">
                    <div className="list_name">발송처</div>
                    <div className="list_txt">소방긴급구조</div>
                  </div>
                  <div className="list_row">
                    <div className="list_name">처리상태</div>
                    <div className="list_txt">발생</div>
                  </div>
                  <button type="button" className="btn_evtend dimmed_state">종료 완료</button>
                </div>
              </div>
              
              <div className="list_frame">
                <div className="evt_figure">
                  <div className="time_txt">2021-01-08    17:26:43</div>
                  <div className="normal_circle"></div>
                </div>
                <div className="list_box">
                  <div className="evt_title">주택 / 창고 화재 발생</div>
                  <div className="evt_txt">※ 긴급구조</div>
                  <div className="list_row">
                    <div className="list_name">발송처</div>
                    <div className="list_txt">소방긴급구조</div>
                  </div>
                  <div className="list_row">
                    <div className="list_name">처리상태</div>
                    <div className="list_txt">발생</div>
                  </div>
                  <button type="button" className="btn_evtend dimmed_state">이벤트 종료</button>
                </div>
              </div>
              
              <div className="list_frame">
                <div className="evt_figure">
                  <div className="time_txt">2021-01-08    17:26:43</div>
                  <div className="normal_circle"></div>
                </div>
                <div className="list_box">
                  <div className="evt_title">주택 / 창고 화재 발생</div>
                  <div className="evt_txt">※ 긴급구조</div>
                  <div className="list_row">
                    <div className="list_name">발송처</div>
                    <div className="list_txt">소방긴급구조</div>
                  </div>
                  <div className="list_row">
                    <div className="list_name">처리상태</div>
                    <div className="list_txt">발생</div>
                  </div>
                  <button type="button" className="btn_evtend dimmed_state">이벤트 종료</button>
                </div>
              </div>
              
              <div className="list_frame">
                <div className="evt_figure">
                  <div className="time_txt">2021-01-08    17:26:43</div>
                  <div className="normal_circle"></div>
                </div>
                <div className="list_box">
                  <div className="evt_title">주택 / 창고 화재 발생</div>
                  <div className="evt_txt">※ 긴급구조</div>
                  <div className="list_row">
                    <div className="list_name">발송처</div>
                    <div className="list_txt">소방긴급구조</div>
                  </div>
                  <div className="list_row">
                    <div className="list_name">처리상태</div>
                    <div className="list_txt">발생</div>
                  </div>
                  <button type="button" className="btn_evtend dimmed_state">이벤트 종료</button>
                </div>
              </div>
              
              <div className="list_frame">
                <div className="evt_figure">
                  <div className="time_txt">2021-01-08    17:26:43</div>
                  <div className="normal_circle"></div>
                </div>
                <div className="list_box">
                  <div className="evt_title">주택 / 창고 화재 발생</div>
                  <div className="evt_txt">※ 긴급구조</div>
                  <div className="list_row">
                    <div className="list_name">발송처</div>
                    <div className="list_txt">소방긴급구조</div>
                  </div>
                  <div className="list_row">
                    <div className="list_name">처리상태</div>
                    <div className="list_txt">발생</div>
                  </div>
                  <button type="button" className="btn_evtend dimmed_state">이벤트 종료</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="dash_detail_wrap">
          <header className="dash_detail_header">
            <div className="header_title">주택 / 창고 화재 발생</div>
            <div className="type_txt">화재</div>
            
            <button type="button" className="btn_end">이벤트 종료</button>
          </header>
          <div className="dash_detail_body">
            <div className="btn_menu_area">
              <button type="button" className="btn_menu active" data-menu="menu1">이벤트 상세정보</button>
              <button type="button" className="btn_menu" data-menu="menu2">상황전파</button>
              <button type="button" className="btn_menu" data-menu="menu3">조치 및 보고서</button>
            </div>
            <div className="dash_frame">
              
              <div className="menu_info evt_detail_wrap" id="menu1">
                
                <div className="gis_area">
                  <LeafletMapComponent />
                  {/* <div className="gis_icon history_icon loc_1"></div>
                  <div className="history_icon_bg loc_2"></div>
                  <div className="gis_icon event_icon loc_3"></div>
                  <div className="event_icon_bg loc_4"></div> */}
                  

                </div>
                <div className="info_area">
                  <div className="info_row">
                    <div className="info_title">발생유형</div>
                    <div className="info_txt">화재</div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">발생일시</div>
                    <div className="info_txt">2021-01-08    17:26:43</div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">처리상태</div>
                    <div className="info_txt">발생</div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">발생위치</div>
                    <div className="info_txt">경남 남해군 남해읍 아산리 57</div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">발생좌표</div>
                    <div className="info_txt">X: 34.84681638039724  /  Y: 127.88897324234568</div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">발생처(출처)</div>
                    <div className="info_txt">소방긴급구조</div>
                  </div>
                  <div className="info_row wide_size">
                    <div className="info_title">내용</div>
                    <div className="info_txt wide_size">남해읍 아산리 주택 / 창고 화재 발생 - 화재 진압 필요<br/>창고 내부 인명 구조 요청 - 긴급구조 지원 / 담당자 연락 요망</div>
                  </div>
                </div>
              </div>
              
              <div className="menu_info situ_spread_wrap" id="menu2">
                <div className="situ_left_area">
                  <button type="button" className="btn_spread_add">전파 내역 추가</button>
                  <div className="spread_list_area">
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">전파 유형</div>
                        <div className="spread_txt">SMS</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 대상</div>
                        <div className="spread_txt">홍길동(010-1234-1234), OOO000</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">전파 유형</div>
                        <div className="spread_txt">SMS</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 대상</div>
                        <div className="spread_txt">홍길동(010-1234-1234), OOO000</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">전파 유형</div>
                        <div className="spread_txt">SMS</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 대상</div>
                        <div className="spread_txt">홍길동(010-1234-1234), OOO000</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">전파 유형</div>
                        <div className="spread_txt">SMS</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 대상</div>
                        <div className="spread_txt">홍길동(010-1234-1234), OOO000</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">전파 유형</div>
                        <div className="spread_txt">SMS</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 대상</div>
                        <div className="spread_txt">홍길동(010-1234-1234), OOO000</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">전파 유형</div>
                        <div className="spread_txt">SMS</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 대상</div>
                        <div className="spread_txt">홍길동(010-1234-1234), OOO000</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">전파 유형</div>
                        <div className="spread_txt">SMS</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">전파 대상</div>
                        <div className="spread_txt">홍길동(010-1234-1234), OOO000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="situ_content_area">
                  <header className="situ_header">
                    <div className="btn_tab_area">
                      <button type="button" className="btn_tab btn_tab_sms active" data-tab="tab1">SMS</button>
                      <button type="button" className="btn_tab btn_tab_share" data-tab="tab2">공유</button>
                      <button type="button" className="btn_tab btn_tab_broadcast" data-tab="tab3">방송</button>
                    </div>
                  </header>
                  <div className="situ_body">
                    
                    <div className="tab_info sms_wrap" id="tab1">
                      <div className="tree_area">
                        <div className="tree_in" id="tree"></div>
                      </div>
                      <div className="right_area">
                        
                        <div className="spread_sms_frame spread_object">
                          <div className="spread_object_box">
                            <div className="object_name">홍길동 (010-1234-1234)</div>
                            <div className="object_name">홍길동 (010-1234-1234)</div>
                            <div className="object_name">홍길동 (010-1234-1234)</div>
                          </div>
                          <div className="spread_row">
                            <input type="text" className="object_input name_input" placeholder="이름 입력"/>
                            <input type="text" className="object_input number_input" placeholder="전화번호 입력"/>
                            <button type="button" className="btn_add">추가</button>
                          </div>
                        </div>
                        
                        <div className="spread_sms_frame spread_content">
                          <div className="spread_row">
                            <div className="object_title">제목</div>
                            <input type="text" className="object_input large_size"/>
                          </div>
                          <div className="spread_row">
                            <div className="object_title">내용</div>
                            <textarea className="object_text"></textarea>
                            <div className="byte_txt">60 / 1000 byte</div>
                          </div>                        
                        </div>
                        
                        <button type="button" className="btn_spread" data-toggle="modal" data-target="#situSpreadModal">상황 전파</button>
                      </div>
                    </div>
                    
                    <div className="tab_info share_wrap" id="tab2">
                      <div className="tree_area">
                        <div className="tree_in" id="tree2"></div>
                      </div>
                      <div className="right_area">
                        
                        <div className="spread_sms_frame spread_object">
                          <div className="spread_object_box">
                            <div className="object_name">홍길동 (010-1234-1234)</div>
                            <div className="object_name">홍길동 (010-1234-1234)</div>
                            <div className="object_name">홍길동 (010-1234-1234)</div>
                          </div>
                        </div>
                        
                        <div className="spread_sms_frame spread_content">
                          <div className="spread_row">
                            <div className="object_title">제목</div>
                            <input type="text" className="object_input large_size"/>
                          </div>
                          <div className="spread_row">
                            <div className="object_title">내용</div>
                            <textarea className="object_text"></textarea>
                            <div className="byte_txt">60 / 1000 byte</div>
                          </div>                       
                        </div>
                        <div className="spread_row">
                          <div className="object_title">cctv</div>
                          <div className="object_box">01cctv</div>
                          
                          <button type="button" className="btn_cctv" data-toggle="modal" data-target="#selectCctvModal">CCTV 선택</button>
                        </div>
                        
                        <button type="button" className="btn_share"  data-toggle="modal" data-target="#shareModal">공유</button>
                      </div>
                    </div>
                    
                    <div className="tab_info broadcast_wrap" id="tab3">
                      <div className="spread_type_frame">
                        <button type="button" className="btn_spread_type active">음성 방송</button>
                      </div>
                      
                      <div className="type_info voice_wrap">
                        <div className="spread_row">
                          <div className="object_title">전파 대상</div>
                          <div className="object_box middle_size">대상1</div>
                          
                          <button type="button" className="btn_select" data-toggle="modal" data-target="#selectBroadcastModal">대상 선택</button>
                        </div>
                        <div className="spread_row">
                          <div className="object_title">전파 종류</div>
                          <select className="select_type" id="selectSpreadType">
                            <option value="1">화재</option>
                            <option value="1">화재</option>
                            <option value="1">화재</option>
                          </select>
                        </div>
                        <div className="spread_row">
                          <div className="object_title">전파 제목</div>
                          <input type="text" className="object_input super_size"/>
                        </div>
                        <div className="effect_area">
                          <div className="seperate_area ftL">
                            <div className="spread_row">
                              <div className="object_title">시작 효과음 선택</div>
                              <select className="select_effect" id="selectStartSound">
                                <option value="1">start_setting_music_001</option>
                                <option value="1">start_setting_music_001</option>
                                <option value="1">start_setting_music_001</option>
                              </select>
                            </div>
                            <div className="spread_row">
                              <div className="object_title">시작 효과음 반복</div>
                              <select className="select_effect" id="selectStartRepeat">
                                <option value="1">1번</option>
                                <option value="1">2번</option>
                                <option value="1">3번</option>
                              </select>
                            </div>
                            <div className="spread_row">
                              <div className="object_title">방송 내용 반복 수</div>
                              <select className="select_effect" id="selectRepeatCount">
                                <option value="1">1번</option>
                                <option value="1">2번</option>
                                <option value="1">3번</option>
                              </select>
                            </div>
                          </div>
                          <div className="seperate_area ftR">
                            <div className="spread_row">
                              <div className="object_title">종료 효과음 선택</div>
                              <select className="select_effect" id="selectEndSound">
                                <option value="1">start_setting_music_001</option>
                                <option value="1">start_setting_music_001</option>
                                <option value="1">start_setting_music_001</option>
                              </select>
                            </div>
                            <div className="spread_row">
                              <div className="object_title">종료 효과음 반복</div>
                              <select className="select_effect" id="selectEndRepeat">
                                <option value="1">1번</option>
                                <option value="1">2번</option>
                                <option value="1">3번</option>
                              </select>
                            </div>
                            <div className="spread_row">
                              <div className="object_title">방송 볼륨 조절</div>
                              
                              <div className="speaker_icon"></div>
                              <input id="ex6" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="3"/>
                              <span id="ex6CurrentSliderValLabel"><span id="ex6SliderVal">3</span></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                      <button type="button" className="btn_broadcast" data-toggle="modal" data-target="#broadcastModal">방송 전파</button>
                      
                      <button type="button" className="btn_listen">미리 듣기</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="menu_info report_wrap" id="menu3">
                <div className="situ_left_area">
                  <button type="button" className="btn_report_add">조치 및 보고서 내역 추가</button>
                  <div className="spread_list_area">
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">등록자</div>
                        <div className="spread_txt">홍길동</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">등록 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">제목</div>
                        <div className="spread_txt">주책/창고 화재 발생</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">등록자</div>
                        <div className="spread_txt">홍길동</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">등록 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">제목</div>
                        <div className="spread_txt">주책/창고 화재 발생</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">등록자</div>
                        <div className="spread_txt">홍길동</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">등록 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">제목</div>
                        <div className="spread_txt">주책/창고 화재 발생</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">등록자</div>
                        <div className="spread_txt">홍길동</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">등록 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">제목</div>
                        <div className="spread_txt">주책/창고 화재 발생</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">등록자</div>
                        <div className="spread_txt">홍길동</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">등록 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">제목</div>
                        <div className="spread_txt">주책/창고 화재 발생</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">등록자</div>
                        <div className="spread_txt">홍길동</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">등록 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">제목</div>
                        <div className="spread_txt">주책/창고 화재 발생</div>
                      </div>
                    </div>
                    <div className="spread_box">
                      <div className="spread_row">
                        <div className="spread_name">등록자</div>
                        <div className="spread_txt">홍길동</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">등록 일시</div>
                        <div className="spread_txt">21-01-06    12:35:42</div>
                      </div>
                      <div className="spread_row">
                        <div className="spread_name">제목</div>
                        <div className="spread_txt">주책/창고 화재 발생</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="situ_content_area">
                  <div className="situ_body">
                    <div className="spread_row">
                      <div className="object_title">담당부서</div>
                      <select className="select_depart" id="selectDepart">
                        <option value="1">OOOO부서</option>
                        <option value="1">OOOO부서</option>
                        <option value="1">OOOO부서</option>
                      </select>
                      <div className="object_title">등록자</div>
                      <input type="text" className="object_input small_size"/>
                    </div>
                    <div className="spread_row calen_icon">
                      <div className="object_title">등록일시</div>
                      <input type="text" className="object_input calen_input" id="from_calendar" />
                      <select className="select_time" id="selectHour">
                        <option value="1">14시</option>
                        <option value="1">14시</option>
                        <option value="1">14시</option>
                      </select>
                      <select className="select_time" id="selectMin">
                        <option value="1">02분</option>
                        <option value="1">02분</option>
                        <option value="1">02분</option>
                      </select>
                    </div>
                    <div className="spread_row">
                      <div className="object_title">제목</div>
                      <input type="text" className="object_input large_size"/>
                    </div>
                    <div className="spread_row wide_size">
                      <div className="object_title">내용</div>
                      <textarea className="object_text"></textarea>
                      <div className="byte_txt">60 / 1000 byte</div>
                    </div>
                    <div className="spread_row">
                      <div className="object_title">파일</div>
                      <div className="object_box middle_size">파일1</div>
                      <button type="button" className="btn_file">파일 선택</button>
                    </div>
                    
                    <button type="button" className="btn_save">저장</button>
                    
                    <button type="button" className="btn_report_down">보고서 다운로드</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>   

        
        
        <div className="modal fade evt_end_modal" id="evtEndModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">이벤트 종료</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="end_title">주택 / 창고 화재 발생</div>
                <div className="end_sub_txt">선택하신 이벤트를<br/>정말<span>종료</span>하시겠습니까?</div>
                
                <button type="button" className="btn btn-default end" data-dismiss="modal" data-toggle="modal">이벤트 종료</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="modal fade situ_spread_modal" id="situSpreadModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">상황 전파</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="end_title">주택 / 창고 화재 발생</div>
                <div className="end_sub_txt">선택하신 대상자들에게<br/><span>상황전파</span>를 하시겠습니까?</div>
                
                <button type="button" className="btn btn-default spread" data-dismiss="modal" data-toggle="modal">상황 전파</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="modal fade situ_spread_modal" id="shareModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">공유</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body share_body">
                <div className="end_title">주택 / 창고 화재 발생</div>
                <div className="end_sub_txt">선택하신 대상자들에게<br/><span>공유</span>를 하시겠습니까?</div>
                
                <button type="button" className="btn btn-default spread" data-dismiss="modal" data-toggle="modal">공유</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="modal fade situ_spread_modal" id="broadcastModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">방송 전파</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body broadcast_body">
                <div className="end_title">주택 / 창고 화재 발생</div>
                <div className="end_sub_txt">선택하신 대상자들에게<br/><span>방송 전파</span>를 하시겠습니까?</div>
                
                <button type="button" className="btn btn-default spread" data-dismiss="modal" data-toggle="modal">방송 전파</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="modal fade broadcast_modal" id="selectBroadcastModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">방송 대상 선택</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="broadcast_frame ftL">
                  <div className="tree_in" id="tree3"></div>
                </div>
                <div className="broadcast_frame ftR">
                  <div className="object_txt">차산리 전체</div>
                  <div className="object_txt">남변리 전체</div>
                  <div className="object_txt">설천면</div>
                  <div className="object_txt">고현면</div>
                </div>
                
                <button type="button" className="btn btn-default spread" data-dismiss="modal" data-toggle="modal">적용</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="modal fade cctv_modal" id="selectCctvModal" role="dialog">
          <div className="modal-dialog">
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="header_title">공유 CCTV 선택</div>
                <button
                  type="button"
                  className="btn_close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                
                <div className="gis_area">
                  {/* <div className="gis_icon_area">
                    <div className="gis_icon cctv_normal loc_1"></div>
                    <div className="gis_icon cctv_normal active loc_2"></div>
                    <div className="gis_icon event_icon loc_3"></div>
                  </div>
                  
                  <div calss="gis_in"></div> */}
                </div>

                
                <div className="content_area">
                  <header className="content_header">
                    <div className="header_txt">주택 / 창고 화재 발생</div>
                    <div className="type_name">화재</div>
                  </header>
                  <div className="content_row">
                    <div className="content_name">발생위치</div>
                    <div className="content_txt">경남 남해군 남해읍 아산리 57</div>
                  </div>
                  <div className="content_row">
                    <div className="content_name">발생좌표</div>
                    <div className="content_txt">X: 34.84681638039724  /  Y: 127.88897324234568</div>
                  </div>

                  <header className="cctv_header">
                    <div className="header_txt">공유 CCTV 선택</div>                  
                    <div className="hint_txt">*지도 위 CCTV 아이콘을 드래그(drag) 하여 원하는 CCTV 화면에 놓아주세요.</div>
                  </header>
                  
                  
                  <div className="monitor_area">
                    <div className="cctv_box">
                      <header className="cctv_header cctv_1">CCTV_A223CCTV_A223CCTV_A223CCTV_A223CCTV_A223</header>
                      <button type="button" className="btn_cctv_close"></button>
                      <div className="cctv_view"></div>
                    </div>
                    <div className="cctv_box">
                      <header className="cctv_header cctv_2">CCTV 002</header>
                      <button type="button" className="btn_cctv_close"></button>
                      <div className="cctv_view"></div>
                    </div>
                    <div className="cctv_box">
                      <header className="cctv_header cctv_3">CCTV 003</header>
                      <button type="button" className="btn_cctv_close"></button>
                      <div className="cctv_view"></div>
                    </div>
                    <div className="cctv_box">
                      <header className="cctv_header cctv_4">CCTV 004</header>
                      <button type="button" className="btn_cctv_close"></button>
                      <div className="cctv_view"></div>
                    </div>
                  </div>

                  
                  <button type="button" className="btn btn-default spread" data-dismiss="modal" data-toggle="modal">저장</button>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default DisasterEventListComponent;