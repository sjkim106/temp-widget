import React from 'react';
import '../title.css';

const Standard = () => {
   const StandardData ={
       "standardData":[
        {
            "name": "통합대기",
            "normal": "51 -",
            "bad": "101 -",
            "worst": "251 -"
        },{
           "name": "미세먼지",
           "normal": "31 -",
           "bad": "81 -",
           "worst": "151 -"
    },{
           "name": "초미세먼지",
           "normal": "16 -",
           "bad": "51 -",
           "worst": "101 -"
    },
       {
           "name": "아황산가스",
           "normal": "0.02 -",
           "bad": "0.05 -",
           "worst": "0.15 -"
       },
       {
           "name": "일산화탄소",
           "normal": "2 -",
           "bad": "9 -",
           "worst": "15 -"
       },
       {
           "name": "오존",
           "normal": "0.03 -",
           "bad": "0.09 -",
           "worst": "0.15 -"
       },
       {
           "name": "이산화질소",
           "normal": "0.03 -",
           "bad": "0.06 -",
           "worst": "0.2 -"
       }
    ]
};
    return StandardData.standardData.map((getData=> {
        return (
            <div>
                <ul className="std_sheet">
                    <li>{getData.name}</li>
                    <li>
                        <div className="std_bar bgCloud"> </div>
                        <div className="std_bar bgGreen"> </div>
                        <div className="std_bar bgOrange"> </div>
                        <div className="std_bar bgRed"> </div>
                    </li>
                    <li>
                        <div className="std_bar">0 -</div>
                        <div className="std_bar">{getData.normal}</div>
                        <div className="std_bar">{getData.bad}</div>
                        <div className="std_bar">{getData.worst}</div>
                    </li>
                </ul>
            </div>
        );
    }));
};

export default Standard;