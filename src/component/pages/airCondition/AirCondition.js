import React, {Component} from 'react';
import '../../common/css/fontStyle.css';
import '../../common/css/reset.css';
import Title from './js/title';
import RightPanel from './js/rightPanel';

class AirCondition extends Component {
  render() {
    return (
        <div>
              <Title/>
              <RightPanel/>
        </div>
    );
  }
}

export default AirCondition;