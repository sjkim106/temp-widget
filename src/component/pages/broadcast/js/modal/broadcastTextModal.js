import React, {Component} from 'react';


class BroadcastTextModal extends Component {
    constructor (_props) {
        super(_props);
        this.state = {

        };
    }
    
    render() {
        return (
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
        )
    }
}   
export default BroadcastTextModal;