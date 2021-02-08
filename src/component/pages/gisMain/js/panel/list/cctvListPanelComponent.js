import React, {Component} from 'react';

import $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';

import CctvItemCard from './item/cctvItemCard';

class CctvListPanelComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
        pagination : 0,
        cctvList : this.props.list,
        currentFocus : 0 
    };

    this.itemClickEvent = this.itemClickEvent.bind(this);
    this.checkCurrentFocus = this.checkCurrentFocus.bind(this);
  }

  componentDidMount() {

  }

  checkCurrentFocus (_index) {
    return (this.state.currentFocus == _index) ? "active" : "";
  }

  itemClickEvent (_index) {
    this.setState({
        currentFocus : _index,      
    });
  }
  
  render() {
    return (
      <div className="menu_info search_wrap" id="menu2">
        <div className="dash_body">
          
          <div className="search_frame">
            <div className="search_row">
              <div className="search_name">분류타입</div>
              <select className="select_search" id="selectType">
                <option value="1">CCTV(차량)</option>
                <option value="2">CCTV(방범)</option>
                <option value="3">CCTV(재난)</option>
                <option value="4">CCTV(방범)</option>
                <option value="5">CCTV(재난)</option>
              </select>
            </div>
            <div className="search_row">
              <div className="search_name">행정구역</div>
              <select className="select_search" id="selectArea">
                {
                  this.props.areaList.map((_item, _index) => {
                    return <option value={_index}>{_item.name}</option>
                  })
                }
              </select>
            </div>
            <div className="search_row">
              <div className="search_name">설치목적</div>
              <select className="select_search" id="selectPurpose">
                <option value="1">방범</option>
                <option value="2">다목적</option>                
              </select>
            </div>
            <div className="search_row">
              <div className="search_name">명칭</div>
              <input type="text" className="search_input" placeholder="명칭 입력 란" /> 
            </div>
            
            <button type="button" className="btn_search">검색</button>
          </div>

          <div className="list_head_row">
            <div className="list_head">순서</div>
            <div className="list_head">구분</div>
            <div className="list_head">명칭</div>
          </div>
          <div className="list_body">
            {
              this.state.cctvList.map((_item, _index) => {
                return <CctvItemCard itemData={_item} index={_index}/>
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

export default CctvListPanelComponent;