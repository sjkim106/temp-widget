//시설물현황 차트
function drawPieGraph (_percent,_id) { 
	Highcharts.chart(_id, {
        chart: {
            spacing: 0,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent',
        },
        title: {
            text: '',
        },
        subtitle: {
            text: '',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            style: {
                fontFamily: 'NotoSansCJKM',
                color: '#626673;',   
                fontSize: 11 * _percent         
            },
            backgroundColor: '#efedf7',
            borderColor: '#efedf7',
            borderRadius: 10 * _percent,
        },
        plotOptions: {
            pie: {
                borderColor: 'transparent',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                innerSize:0,
            }
        },
        legend: {
	    	enabled: false
	    },
        series: [{
            name: '집계',
            colorByPoint: true,
            data: [{
                name: 'CCTV',
                y: 308,
            }, {
                name: '공공와이파이',
                y: 45,
            }, {
                name: '스마트가로등',
                y: 120,
            }, {
                name: '소화기',
                y: 82,
            },{
                name: '공공화장실',
                y: 43,
            },{
                name: '공공주차장',
                y: 158,
            },{
                name: '심장충격기',
                y: 36,
            },{
                name: '주유시설',
                y: 29,
            },{
                name: '차번호 인식 시스템',
                y: 91,
            }]
        }],
        colors: [{
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
                },
            stops: [
                [0, '#974cff'],
                [1, '#8139e5']
            ]
       }, {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#cb2440'],
                [1, '#b21731']
            ]
       }, {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#dc4e35'],
                [1, '#b02f19']
            ]
       }, {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#f9810e'],
                [1, '#d4751c']
            ]
        },{
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#ffbd1a'],
                [1, '#cf980c']
            ]
        },{
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#75eb63'],
                [1, '#64e550']
            ]
        },{
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#02e8dd'],
                [1, '#00ccc2']
            ]
        },{
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#4db5f8'],
                [1, '#4096cf']
            ]
        },{
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, '#6868de'],
                [1, '#6868de']
            ]
        }],
        credits: {
            enabled: false
        },
	});
}

var drawChart = function () {
    var width = this.window.innerWidth;
    var percent = width / 1920;

    //시설물현황 차트
    drawPieGraph(percent,"pieChart");
}

$(document).ready(function () {	
    drawChart();

    window.onresize = function () {
        drawChart();
    };
})
