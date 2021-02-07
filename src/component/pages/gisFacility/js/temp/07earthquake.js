//07 earthquake script
/*지진계측 차트*/
function drawEarthquakeLine (_percent, _id) { 
	Highcharts.chart(_id, {
		chart: {
            type: 'area',
	        backgroundColor: 'transparent',
	        spacingTop: 130 * _percent,
	        spacingBottom: 25 * _percent,
	        spacingLeft: 34 * _percent,
	        spacingRight: 40 * _percent,
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
            lineColor: 'rgba(255,255,255,0.2)',               
			labels: {
	            style: {
                    fontFamily: 'NotoSansCJKR',
	                color: '#9192a8',
	                fontSize: 10 * _percent
 	            }
	        },
            categories: ['15시','16시','17시','18시','19시','20시']
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
            tickPositions: [0,500,1000,1500,2000],
	    },	    	  		    
	    legend: {
	    	enabled: false
	    },
	    series: [{
	        data: [800,500,1000,500,900],
            lineColor : '#8d87ff',
            fillColor: 'transparent',
            color: '#8d87ff'
        }],
	    plotOptions: {
            series: {
                name: '지진계측 센서',
                fillColor: '#8d87ff',
                lineWidth: 1 * _percent,                
	        	marker: {
	                lineColor: '#8d87ff',
					radius: 0					
	            },
	            label: {
	                connectorAllowed: false
	            },
	            pointStart: 1
	        }
        },    
        
	});
}

var drawChart = function () {
    var width = this.window.innerWidth;
    var percent = width / 1920;

    /*지진계측 차트*/
	drawEarthquakeLine(percent, "earthquakeLinecht");
}

$(document).ready(function () {	
    drawChart();

    window.onresize = function () {
        drawChart();
    };
})
