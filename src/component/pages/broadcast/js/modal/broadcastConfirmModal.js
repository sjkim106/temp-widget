import React, {Component} from 'react';


class BroadcastConfirmModal extends Component {
    constructor (_props) {
        super(_props);
        this.state = {

        };
    }
    
    render() {
        return (
            <div className="modal broadcast_modal" id="broadcastModal" role="dialog">
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
        )
    }
}   
export default BroadcastConfirmModal;