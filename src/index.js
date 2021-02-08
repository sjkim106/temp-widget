import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
// import GisMain from "./component/pages/gisMain/gisMain";
import GisFacility from "./component/pages/gisFacility/gisFacility";
// import Weather from "./component/pages/weather/weather";
// import AirCondition from "./component/pages/airCondition/airCondition";
// import BroadcastComponent from "./component/pages/broadcast/broadcast";
// import EventStatisticComponent from "./component/pages/eventStatistic/eventStatisticComponent";
// import FacilityStatisticComponent from "./component/pages/facilityStatistic/facilityStatisticComponent";
// import DisasterEventListComponent from "./component/pages/disasterEventList/disasterEventListComponent";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    {/*<App />*/}
    {/* <GisMain /> */}
    <GisFacility /> 
    {/* <AirCondition /> */}
    {/* <Weather /> */}
    {/* <BroadcastComponent /> */}
    {/* <EventStatisticComponent /> */}
    {/* <FacilityStatisticComponent /> */}
    {/* <DisasterEventListComponent /> */}
    {/* 
    <Route exactpath="/gisMain" component={GisMain}/>
    <Route path="/gisFacility" component={GisFacility}/>
    <Route path="/about" component={AirCondition}/>
    <Route path="/weather" component={Weather}/>
    <Route path="/broadcast" component={BroadcastComponent}/>
    <Route path="/eventStatistic" component={EventStatisticComponent}/>
    <Route path="/facilityStatistic" component={FacilityStatisticComponent}/>
    <Route path="/disasterEventList" component={DisasterEventListComponent}/>
     */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
