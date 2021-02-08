import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';
import selectric from 'jquery-selectric';

import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css"


class AudioBroadcastSettingComponent extends Component {
    constructor (_props) {
        super(_props);
        this.state = {
          // volume state
          currentVolumeValue : 0,
          volumeStep : 1,
          volumeMax : 100,
          volumeMin : 0,

          title : "",
          

        };

        this.startSoundSelectric = React.createRef();
        this.endSoundSelectric = React.createRef();
        this.repeatStartSoundSelectric = React.createRef();
        this.repeatEndSoundSelectric = React.createRef();
        this.repeatBoradcastSelectric = React.createRef();

        this.changeVolumeValue = this.changeVolumeValue.bind(this); 
    }

    componentDidMount () {
        let startSoundSelectric = $("#" + this.startSoundSelectric.current.id).selectric();
        let endSoundSelectric = $("#" + this.endSoundSelectric.current.id).selectric();
        let repeatStartSoundSelectric = $("#" + this.repeatStartSoundSelectric.current.id).selectric();
        let repeatEndSoundSelectric = $("#" + this.repeatEndSoundSelectric.current.id).selectric();
        let repeatBoradcastSelectric = $("#" + this.repeatBoradcastSelectric.current.id).selectric();
    }

    changeVolumeValue (_event) {
      this.setState({
        currentVolumeValue : _event.target.value
      })
    }
    
    render() {
        return (
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
                    <select className="select_sound" id="selectStartSound" ref={this.startSoundSelectric}>
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                    </select>
                    <select className="select_sound ftR" id="selectStartRepeat" ref={this.repeatStartSoundSelectric}>
                      <option value="1">1회 반복</option>
                      <option value="1">2회 반복</option>
                      <option value="1">3회 반복</option>
                    </select>
                  </div>
                  <div className="effect_row">
                    <div className="effect_title">종료 효과음</div>
                    <select className="select_sound" id="selectEndSound" ref={this.endSoundSelectric}>
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                      <option value="1">start_music_0000</option>
                    </select>
                    <select className="select_sound ftR" id="selectEndRepeat" ref={this.repeatEndSoundSelectric}>
                      <option value="1">1회 반복</option>
                      <option value="1">2회 반복</option>
                      <option value="1">3회 반복</option>
                    </select>
                  </div>
                  <div className="effect_row">
                    <div className="effect_title">방송내용 반복</div>
                    <select className="select_repeat" id="selectRepeat" ref={this.repeatBoradcastSelectric}>
                      <option value="1">1회 반복</option>
                      <option value="1">2회 반복</option>
                      <option value="1">3회 반복</option>
                    </select>
                  </div>
                  <div className="effect_row">
                    <div className="effect_title">볼륨 조절</div>
                    
                    <div className="speaker_icon"></div>
                    {/* <input id="ex6" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="3"/> */}
                    <ReactBootstrapSlider
                    value={this.state.currentVolumeValue}
                    change={this.changeVolumeValue}
                    slideStop={this.changeVolumeValue}
                    step={this.state.volumeStep}
                    max={this.state.volumeMax}
                    min={this.state.volumeMin}
                    orientation="horizontal"
                    reversed={true} />
                    <span id="ex6CurrentSliderValLabel"><span id="ex6SliderVal">{this.state.currentVolumeValue}</span></span>
                  </div>
                </div>
                
                <button type="button" className="btn_broadcast" data-toggle="modal" data-target="#broadcastModal">방송하기</button>
              </div>
              
        )
    }
}   
export default AudioBroadcastSettingComponent;