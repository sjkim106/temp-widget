import React, {Component} from 'react';


class AudioBroadcastListComponent extends Component {
    constructor (_props) {
        super(_props);
        this.state = {

        };
    }
    
    render() {
        return (
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
                </div>
            </div>
        )
    }
}   
export default AudioBroadcastListComponent;