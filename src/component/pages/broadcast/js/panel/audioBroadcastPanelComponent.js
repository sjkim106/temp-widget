import React, {Component} from 'react';

import AudioBroadcastListComponent from './contents/audioBroadcastListComponent';
import AudioBroadcastSettingComponent from  './contents/audioBroadcastSettingComponent';

const AUDIO_CONTENTS_SETTING = "AUDIO_CONTENTS_SETTING";
const AUDIO_CONTENTS_LIST = "AUDIO_CONTENTS_LIST";

class AudioBroadcastPanelComponent extends Component {
    constructor (_props) {
        super(_props);
        this.state = {
            currentContnets : AUDIO_CONTENTS_SETTING
        };

        this.changeCurrentContents = this.changeCurrentContents.bind(this);

        this.renderContents = this.renderContents.bind(this);
    }

    changeCurrentContents (_type) {
        this.setState({
            currentContnets : _type
        })
    }

    renderContents () {
        if (this.state.currentContnets == AUDIO_CONTENTS_LIST) 
            return <AudioBroadcastListComponent />
        else 
            return <AudioBroadcastSettingComponent />
    }

    render() {
        return (
            <div className="menu_info broadcast_wrap" id="menu1">
              
              <div className="tab_area">
                <button 
                className={"btn_tab " + ((this.state.currentContnets == AUDIO_CONTENTS_SETTING)? "active": "") }
                type="button"
                data-tab="tab1"
                onClick={()=>{
                    this.changeCurrentContents(AUDIO_CONTENTS_SETTING)
                }}
                >신규 방송 전파</button>
                <button 
                className={"btn_tab " + ((this.state.currentContnets == AUDIO_CONTENTS_LIST)? "active": "") }
                type="button"
                data-tab="tab2"
                onClick={()=>{
                    this.changeCurrentContents(AUDIO_CONTENTS_LIST)
                }}
                >방송 전파 내역</button>
              </div>

              {this.renderContents()}
              
            </div>
        )
    }
}   
export default AudioBroadcastPanelComponent;