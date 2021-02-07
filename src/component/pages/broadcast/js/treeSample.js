//sim tree script
$(document).ready(function () {  
    var list = [{
        "id": '1',
        "pid": '',
        "name": "JavaScript",
    },
    {
        "id": '11',
        "pid": '1', // parent ID
        "name": "Angular"
    },
    {
        "id": '12',
        "pid": '1',
        "name": "React"
    },{
        "id": '13',
        "pid": '1',
        "name": "Vuejs"
    },{
        "id": '14',
        "pid": '1',
        "name": "jQueryScript.Net"
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
        "name": "test",
    },
    {
        "id": '16',
        "pid": '11',
        "name": "test",
    },
    {
        "id": '17',
        "pid": '11',
        "name": "test",
    },
    {
        "id": '18',
        "pid": '11',
        "name": "test",
    },
    {
        "id": '19',
        "pid": '11',
        "name": "test",
    },
    {
        "id": '20',
        "pid": '11',
        "name": "test",
    },
    {
        "id": '21',
        "pid": '11',
        "name": "test",
    },
    {
        "id": '22',
        "pid": '11',
        "name": "test",
    },
    {
        "id": '23',
        "pid": '11',
        "name": "test",
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