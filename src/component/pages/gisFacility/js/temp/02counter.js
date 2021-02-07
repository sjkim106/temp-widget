//02 counter script
/*무인계수기 차트*/
function drawCounterColumn (_percent, _id) { 
	Highcharts.chart(_id, {
		chart: {
            type: 'column',
	        backgroundColor: 'transparent',
	        spacingTop: 13 * _percent,
	        spacingBottom: 18 * _percent,
	        spacingLeft: 0,
	        spacingRight: 0,
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
                fontSize: 10 * _percent         
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
	                fontSize: 10 * _percent
 	            }
	        },
            categories: ['15시','16시','17시','18시','19시','20시','21시','22시','23시','24시']
	  	},
	    yAxis: {
	        title: {
	            text: ''
            },            
			gridLineColor: 'rgba(255,255,255,0.1)',		
			gridLineWidth: 1 * _percent,	
	        labels: {
                style: {
                    fontFamily: 'NotoSansCJKR',
	                color: '#9192a8',
                    fontSize: 10 * _percent                    
 	            }
	        },
            tickPositions: [0,50,100,150,200],
	    },	    	  		    
	    legend: {
	    	enabled: false
	    },
	    series: [{
            name: '실시간 방문자 수',
            data: [20, 20, 30, 40, 40, 40, 50, 70, 80, 120]
        }],
	    plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 0,
                borderRadius: 3 * _percent,
                dataLabels: {
                    enabled: false
                }
            },
            series: {
	            pointWidth: 6 * _percent,
            },
        },    
        colors: ['#7b48ff'],
	});
}

var drawChart = function () {
    var width = this.window.innerWidth;
    var percent = width / 1920;

    /*무인계수기 차트*/
    drawCounterColumn(percent, "counterColumncht01");
    drawCounterColumn(percent, "counterColumncht02");
    drawCounterColumn(percent, "counterColumncht03");
    drawCounterColumn(percent, "counterColumncht04");
}

$(document).ready(function () {	
    drawChart();

    window.onresize = function () {
        drawChart();
    };
})
