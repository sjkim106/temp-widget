//sim tree script
$(document).ready(function () {  
    var list = [{
        "id": '1',
        "pid": '',
        "name": "전체",
    },
    {
        "id": '2',
        "pid": '1', // parent ID
        "name": "심장충격기"
    },
    {
        "id": '3',
        "pid": '1',
        "name": "소화기"
    },
    {
        "id": '4',
        "pid": '1',
        "name": "낚시 허용지역"
    },
    {
        "id": '5',
        "pid": '1',
        "name": "낚시 금지구역",
        "disabled": true
    },
    {
        "id": '6',
        "pid": '1',
        "name": "공용 화장실"
    },
    {
        "id": '7',
        "pid": '1',
        "name": "공용 주차장",
        "disabled": true
    },
    {
        "id": '8',
        "pid": '1',
        "name": "차번호인식"
    }];

    var tree = simTree({
        el: '#tree',
        data: list,
        check: true,
        linkParent: true,
        //check: true,
        onClick: function (item) {
            console.log(item)
        },
        onChange: function (item) {
            console.log(item)
        }
    });
});