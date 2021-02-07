//sim tree script
$(document).ready(function () {  
    var list = [{
        "id": '1',
        "pid": '',
        "name": "OO 본부",
    },
    {
        "id": '11',
        "pid": '1', // parent ID
        "name": "OOOOO 부서"
    },
    {
        "id": '12',
        "pid": '1',
        "name": "OO 본부"
    },{
        "id": '13',
        "pid": '1',
        "name": "OO 본부"
    },{
        "id": '14',
        "pid": '1',
        "name": "OO 본부"
    },
    {
        "id": '2',
        "pid": '',
        "name": "HTML5"
    },
    {
        "id": '3',
        "pid": '',
        "name": "CSS3",
        "disabled": true
    },
    {
        "id": '15',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '16',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '17',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '18',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '19',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '20',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '21',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '22',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '23',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '24',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '25',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '26',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '27',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '28',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
    },
    {
        "id": '29',
        "pid": '11',
        "name": "홍길동(010-1234-1234)",
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

    var tree2 = simTree({
        el: '#tree2',
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

    var tree3 = simTree({
        el: '#tree3',
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