import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

import EventItemCard from './item/eventItemCard';

class EventListPanelComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
        pagination : 0,
        eventList : this.props.list,
        currentFocus : 0 
    };

    this.itemClickEvent = this.itemClickEvent.bind(this);
    this.checkCurrentFocus = this.checkCurrentFocus.bind(this)
  }

  componentDidMount() {

  }

  checkCurrentFocus (_index) {
    return (this.state.currentFocus == _index) ? "active" : "";
  }

  itemClickEvent (_index) {
    this.setState({
        currentFocus : _index
    });
  }
  
  render() {
    return (
        <div className="menu_info evtlist_wrap" id="menu1">
            <div className="dash_body">
                <div className="list_head_row">
                <div className="list_head">종류</div>
                <div className="list_head">상태</div>
                <div className="list_head">주소</div>
                <div className="list_head">발생일시</div>
                </div>
                <div className="list_body">
                    {
                        this.state.eventList.map((_item, _index) => {
                            return <EventItemCard 
                                        itemData={_item} 
                                        itemIndex={_index} 
                                        itemEvent={this.itemClickEvent}
                                        isClicked={this.checkCurrentFocus(_index)}  
                                    />
                        })
                    }
                </div>
                
                <div className="paging_wrap">
                <ul>
                    {/* <li><a className="btn_foremost"></a></li>
                    <li><a className="btn_prev"></a></li>
                    <li><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>
                    <li><a>5</a></li>
                    <li><a className="btn_next"></a></li>
                    <li><a className="btn_last"></a></li> */}
                </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default EventListPanelComponent;