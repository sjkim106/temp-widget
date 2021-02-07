//대기질 수치의 종류와 값을 받아서 해당 스테이트 정보를 RETURN
export const  getStateOfAirCondition = function (_type, _value){
    var legendLength = 0;
    var targetData = [];
    console.log(_type,_value)
    if (TYPE_OF_AIR_CONDITION_TOTAL === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL;
    } else if (TYPE_OF_AIR_CONDITION_FINE_DUST === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_FINE_DUST;
    } else if (TYPE_OF_AIR_CONDITION_ULTRA_DUST === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_ULTRA_DUST;
    }  else if (TYPE_OF_AIR_CONDITION_SO2 === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_SO2;
    }  else if (TYPE_OF_AIR_CONDITION_CO === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_CO;
    }   else if (TYPE_OF_AIR_CONDITION_OZONE === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_OZONE;
    }   else if (TYPE_OF_AIR_CONDITION_NO2 === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_NO2;
    } else if (TYPE_OF_AIR_CONDITION_TOTAL_MORNING === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL_MORNING
    } else if (TYPE_OF_AIR_CONDITION_TOTAL_AFTERNOON === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL_AFTERNOON;
    } else if (TYPE_OF_AIR_CONDITION_TOTAL_EVENING === _type) {
        targetData = RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL_EVENING;
    }

    legendLength = targetData.length;
    console.log(targetData);
    for (let i = 0; i < legendLength; i++) {
        if (targetData[i].min <= _value &&
            targetData[i].max >= _value) {
            return targetData[i];
        }
    }
}
export const TYPE_OF_AIR_CONDITION_TOTAL = "TYPE_OF_AIR_CONDITION_TOTAL";
export const TYPE_OF_AIR_CONDITION_FINE_DUST = "TYPE_OF_AIR_CONDITION_FINE_DUST";
export const TYPE_OF_AIR_CONDITION_ULTRA_DUST = "TYPE_OF_AIR_CONDITION_ULTRA_DUST";
export const TYPE_OF_AIR_CONDITION_SO2 = "TYPE_OF_AIR_CONDITION_SO2";
export const TYPE_OF_AIR_CONDITION_CO = "TYPE_OF_AIR_CONDITION_CO";
export const TYPE_OF_AIR_CONDITION_OZONE = "TYPE_OF_AIR_CONDITION_OZONE";
export const TYPE_OF_AIR_CONDITION_NO2 = "TYPE_OF_AIR_CONDITION_NO2";
export const TYPE_OF_AIR_CONDITION_TOTAL_MORNING = "TYPE_OF_AIR_CONDITION_TOTAL_MORNING";
export const TYPE_OF_AIR_CONDITION_TOTAL_AFTERNOON = "TYPE_OF_AIR_CONDITION_TOTAL_AFTERNOON";
export const TYPE_OF_AIR_CONDITION_TOTAL_EVENING = "TYPE_OF_AIR_CONDITION_TOTAL_EVENING";

//통합대기질 정책 구간 데이터
export const RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL = [
    {
        min : 0,
        max : 50,
        textOfState : "좋음",
        circleClass : "total_value bdCloud tCloud",
        faceClass : "state_txt good_face tCloud"
    },
    {
        min : 51,
        max : 100,
        textOfState : "보통",
        circleClass : "total_value bdGreen tGreen",
        faceClass : "state_txt soso_face tGreen"
    },
    {
        min : 101,
        max : 250,
        textOfState : "나쁨",
        circleClass : "total_value bdOrange tOrange",
        faceClass : "state_txt bad_face tOrange"
    },
    {
        min : 251,
        max : 1000,
        textOfState : "매우나쁨",
        circleClass : "total_value bdRed tRed",
        faceClass : "state_txt terrible_face tRed"
    }
]

//미세먼지 정책 구간 데이터
export const RANGE_AND_STATE_OF_AIR_CONDITION_FINE_DUST = [
    {
        min : 0,
        max : 30,
        textOfState : "좋음",
        circleClass : "r_value bdCloud tCloud",
        faceClass : "state_txt good_face tCloud",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdCloud tCloud",
        unit : "㎍/㎥"
    },
    {
        min : 31,
        max : 80,
        textOfState : "보통",
        circleClass : "r_value bdGreen tGreen",
        faceClass : "state_txt soso_face tGreen",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdGreen tGreen",
        unit : "㎍/㎥"
    },
    {
        min : 81,
        max : 150,
        textOfState : "나쁨",
        circleClass : "r_value bdOrange tOrange",
        faceClass : "state_txt bad_face tOrange",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdOrange tOrange",
        unit : "㎍/㎥"

    },
    {
        min : 151,
        max : 1000,
        textOfState : "매우나쁨",
        circleClass : "r_value bdRed tRed",
        faceClass : "state_txt terrible_face tRed",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdRed tRed",
        unit : "㎍/㎥"
    }
]

//초미세먼지 정책 구간 데이터
export const RANGE_AND_STATE_OF_AIR_CONDITION_ULTRA_DUST = [
    {
        min : 0,
        max : 15,
        textOfState : "좋음",
        circleClass : "r_value bdCloud tCloud",
        faceClass : "state_txt good_face tCloud",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdCloud tCloud",
        unit : "㎍/㎥"
    },
    {
        min : 16,
        max : 50,
        textOfState : "보통",
        circleClass : "r_value bdGreen tGreen",
        faceClass : "state_txt soso_face tGreen",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdGreen tGreen",
        unit : "㎍/㎥"
    },
    {
        min : 51,
        max : 100,
        textOfState : "나쁨",
        circleClass : "r_value bdOrange tOrange",
        faceClass : "state_txt bad_face tOrange",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdOrange tOrange",
        unit : "㎍/㎥"
    },
    {
        min : 101,
        max : 1000,
        textOfState : "매우나쁨",
        circleClass : "r_value bdRed tRed",
        faceClass : "state_txt terrible_face tRed",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdRed tRed",
        unit : "㎍/㎥"
    }
]
//아황산가스 정책 구간 데이터
export const RANGE_AND_STATE_OF_AIR_CONDITION_SO2 = [
    {
        min : 0,
        max : 0.019,
        textOfState : "좋음",
        circleClass : "r_value bdCloud tCloud",
        faceClass : "state_txt good_face tCloud",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdCloud tCloud",
        unit : "ppm"
    },
    {
        min : 0.02,
        max : 0.049,
        textOfState : "보통",
        circleClass : "r_value bdGreen tGreen",
        faceClass : "state_txt soso_face tGreen",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdGreen tGreen",
        unit : "ppm"
    },
    {
        min : 0.05,
        max : 0.149,
        textOfState : "나쁨",
        circleClass : "r_value bdOrange tOrange",
        faceClass : "state_txt bad_face tOrange",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdOrange tOrange",
        unit : "ppm"
    },
    {
        min : 0.15,
        max : 100,
        textOfState : "매우나쁨",
        circleClass : "r_value bdRed tRed",
        faceClass : "state_txt terrible_face tRed",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdRed tRed",
        unit : "ppm"
    }
]

//일산화탄소 정책 구간 데이터
export const RANGE_AND_STATE_OF_AIR_CONDITION_CO = [
    {
        min : 0,
        max : 1,
        textOfState : "좋음",
        circleClass : "r_value bdCloud tCloud",
        faceClass : "state_txt good_face tCloud",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdCloud tCloud",
        unit : "ppm"
    },
    {
        min : 2,
        max : 8,
        textOfState : "보통",
        circleClass : "r_value bdGreen tGreen",
        faceClass : "state_txt soso_face tGreen",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdGreen tGreen",
        unit : "ppm"
    },
    {
        min : 9,
        max : 14,
        textOfState : "나쁨",
        circleClass : "r_value bdOrange tOrange",
        faceClass : "state_txt bad_face tOrange",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdOrange tOrange",
        unit : "ppm"
    },
    {
        min : 15,
        max : 1000,
        textOfState : "매우나쁨",
        circleClass : "r_value bdRed tRed",
        faceClass : "state_txt terrible_face tRed",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdRed tRed",
        unit : "ppm"
    }
]

//오존 정책 구간 데이터
export const RANGE_AND_STATE_OF_AIR_CONDITION_OZONE = [
    {
        min : 0,
        max : 0.029,
        textOfState : "좋음",
        circleClass : "r_value bdCloud tCloud",
        faceClass : "state_txt good_face tCloud",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdCloud tCloud",
        unit : "ppm"
    },
    {
        min : 0.03,
        max : 0.089,
        textOfState : "보통",
        circleClass : "r_value bdGreen tGreen",
        faceClass : "state_txt soso_face tGreen",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdGreen tGreen",
        unit : "ppm"
    },
    {
        min : 0.09,
        max : 0.149,
        textOfState : "나쁨",
        circleClass : "r_value bdOrange tOrange",
        faceClass : "state_txt bad_face tOrange",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdOrange tOrange",
        unit : "ppm"
    },
    {
        min : 0.15,
        max : 10,
        textOfState : "매우나쁨",
        circleClass : "r_value bdRed tRed",
        faceClass : "state_txt terrible_face tRed",
        unitClass : "air_area air_unit",
        chartClass : "c_value bdRed tRed",
        unit : "ppm"
    }
]

//이산화질소 정책 구간 데이터
export const RANGE_AND_STATE_OF_AIR_CONDITION_NO2 = [
    {
        min : 0,
        max : 0.029,
        textOfState : "좋음",
        circleClass : "r_value bdCloud tCloud",
        faceClass : "state_txt good_face tCloud",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdCloud tCloud",
        unit : "㎍/㎥"
    },
    {
        min : 0.03,
        max : 0.059,
        textOfState : "보통",
        circleClass : "r_value bdGreen tGreen",
        faceClass : "state_txt soso_face tGreen",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdGreen tGreen",
        unit : "㎍/㎥"
    },
    {
        min : 0.06,
        max : 0.19,
        textOfState : "나쁨",
        circleClass : "r_value bdOrange tOrange",
        faceClass : "state_txt bad_face tOrange",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdOrange tOrange",
        unit : "㎍/㎥"
    },
    {
        min : 0.2,
        max : 10,
        textOfState : "매우나쁨",
        circleClass : "r_value bdRed tRed",
        faceClass : "state_txt terrible_face tRed",
        unitClass : "air_area dust_unit",
        chartClass : "c_value bdRed tRed",
        unit : "㎍/㎥"

    }
]

export const RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL_MORNING = [
    {
        min : 0,
        max : 50,
        textOfState : "좋음",
        circleClass : "state_box good_state",
        weatherClass : "day_box morning_icon",
        name : "아침"

    },
    {
        min : 51,
        max : 100,
        textOfState : "보통",
        circleClass : "state_box normal_state",
        weatherClass : "day_box morning_icon",
        name : "아침"
    },
    {
        min : 101,
        max : 250,
        textOfState : "나쁨",
        circleClass : "state_box bad_state",
        weatherClass : "day_box morning_icon",
        name : "아침"
    },
    {
        min : 251,
        max : 1000,
        textOfState : "매우나쁨",
        circleClass : "state_box terrible_state",
        weatherClass : "day_box morning_icon",
        name : "아침"
    }
]

export const RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL_AFTERNOON = [
    {
        min : 0,
        max : 50,
        textOfState : "좋음",
        circleClass : "state_box good_state",
        weatherClass : "day_box afternoon_icon",
        name : "점심"
    },
    {
        min : 51,
        max : 100,
        textOfState : "보통",
        circleClass : "state_box normal_state",
        weatherClass : "day_box afternoon_icon",
        name : "점심"
    },
    {
        min : 101,
        max : 250,
        textOfState : "나쁨",
        circleClass : "state_box bad_state",
        weatherClass : "day_box afternoon_icon",
        name : "점심"
    },
    {
        min : 251,
        max : 1000,
        textOfState : "매우나쁨",
        circleClass : "state_box terrible_state",
        weatherClass : "day_box afternoon_icon",
        name : "점심"
    }
]

export const RANGE_AND_STATE_OF_AIR_CONDITION_TOTAL_EVENING = [
    {
        min : 0,
        max : 50,
        textOfState : "좋음",
        circleClass : "state_box good_state",
        weatherClass : "day_box evening_icon",
        name : "저녁"
    },
    {
        min : 51,
        max : 100,
        textOfState : "보통",
        circleClass : "state_box normal_state",
        weatherClass : "day_box evening_icon",
        name : "저녁"
    },
    {
        min : 101,
        max : 250,
        textOfState : "나쁨",
        circleClass : "state_box bad_state",
        weatherClass : "day_box evening_icon",
        name : "저녁"
    },
    {
        min : 251,
        max : 1000,
        textOfState : "매우나쁨",
        circleClass : "state_box terrible_state",
        weatherClass : "day_box evening_icon",
        name : "저녁"
    }
]
