/*기간별 이벤트 차트*/
function drawEventColumn (_percent, _id) { 
	Highcharts.chart(_id, {
		chart: {
            type: 'column',
	        backgroundColor: 'transparent',
	        spacingTop: 70 * _percent,
	        spacingBottom: 30 * _percent,
	        spacingLeft: 33 * _percent,
	        spacingRight: 33 * _percent,
	    },
        title: {
			text: ''
	    },		    
	    subtitle: {
	        text: ''
	    },
	    credits: {
	      enabled: false
        },
        tooltip: {
            style: {
                fontFamily: 'NotoSansCJKM',
                color: '#626673;',   
                fontSize: 12 * _percent         
            },
            backgroundColor: '#efedf7',
            borderColor: '#efedf7',
            borderRadius: 10 * _percent,
        },
	  	xAxis:{
			tickColor: 'transparent',
            lineColor: 'transparent',               
			labels: {
	            style: {
                    fontFamily: 'NotoSansCJKR',
	                color: '#9192a8',
	                fontSize: 13 * _percent
 	            }
	        },
            categories: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
	  	},
	    yAxis: {
	        title: {
	            text: ''
            },            
			gridLineColor: 'transparent',		
			gridLineWidth: 1 * _percent,	
	        labels: {
                style: {
                    fontFamily: 'NotoSansCJKR',
	                color: '#9192a8',
                    fontSize: 13 * _percent                    
 	            }
	        },
            tickPositions: [0,50,100,150,200],
	    },	    	  		    
	    legend: {
	    	enabled: false
	    },
	    series: [{
            name: '집계',
            data: [20, 20, 30, 40, 40, 40, 50, 70, 80, 120, 50, 40]
        }],
	    plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 0,
                borderRadius: 5 * _percent,
                dataLabels: {
                    enabled: false
                }
            },
            series: {
	            pointWidth: 10 * _percent,
            },
        },    
        colors: ['#7b48ff'],
	});
}

var drawChart = function () {
    var width = this.window.innerWidth;
    var percent = width / 1920;

    /*기간별 이벤트 차트*/
	drawEventColumn(percent, "evtColumncht");
}

$(document).ready(function () {	
    drawChart();

    window.onresize = function () {
        drawChart();
    };
})
