import React, {Component} from 'react';


class WeakPanelComponent extends Component {

  constructor(_props){
    super(_props);
    this.state = {
        currentFocus : this.props.focus
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="dash_info_wrap">                     
      <div className="menu_info socialweak_wrap">
        <header className="dash_header">
          <div className="dash_title">사회적약자</div>
          <div className="dash_sub_title">The Socially Weak</div>
        </header> 
        <div className="dash_body">          
          <div className="list_box">
            <div className="list_title">홍길동</div>
            <div className="zone_txt">0000관할구역</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sort_icon">관제분류</div>
              <div className="list_txt">청각장애인</div>
            </div>              
          </div>          
          <div className="list_box">
            <div className="list_title">홍길동</div>
            <div className="zone_txt">0000관할구역</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sort_icon">관제분류</div>
              <div className="list_txt">청각장애인</div>
            </div>              
          </div>          
          <div className="list_box">
            <div className="list_title">홍길동</div>
            <div className="zone_txt">0000관할구역</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sort_icon">관제분류</div>
              <div className="list_txt">청각장애인</div>
            </div>              
          </div>          
          <div className="list_box">
            <div className="list_title">홍길동</div>
            <div className="zone_txt">0000관할구역</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sort_icon">관제분류</div>
              <div className="list_txt">청각장애인</div>
            </div>              
          </div>          
          <div className="list_box">
            <div className="list_title">홍길동</div>
            <div className="zone_txt">0000관할구역</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sort_icon">관제분류</div>
              <div className="list_txt">청각장애인</div>
            </div>              
          </div>          
          <div className="list_box">
            <div className="list_title">홍길동</div>
            <div className="zone_txt">0000관할구역</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sort_icon">관제분류</div>
              <div className="list_txt">청각장애인</div>
            </div>              
          </div>          
          <div className="list_box">
            <div className="list_title">홍길동</div>
            <div className="zone_txt">0000관할구역</div>
            <div className="list_row">
              <div className="list_name loc_icon">위치</div>
              <div className="list_txt">경남 남해군 남해읍 화전로95번길 21</div>
            </div>
            <div className="list_row">
              <div className="list_name sort_icon">관제분류</div>
              <div className="list_txt">청각장애인</div>
            </div>              
          </div>
        </div>
      </div>  
    </section>
    );
  }
}

export default WeakPanelComponent;
