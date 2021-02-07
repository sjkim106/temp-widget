import React from 'react';
// import '../title.css';
// import Standard from "./standard";
import TomorrowInfo from "./tomorrowInfo";


const Title = () => {
    return (
            <div className="left_area">
                <div className="std_table">
                    <div className="std_title sheet_icon">대기환경 기준표</div>
                {/* <Standard /> */}
                </div>
                <TomorrowInfo />
            </div>
    );
};

export default Title;
