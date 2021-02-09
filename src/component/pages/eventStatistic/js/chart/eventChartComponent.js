import React, {Component, Fragment} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



class EventChartComponent extends Component {
    constructor (_props) {
        super(_props);
        this.state = {
            seriesData : _props.seriesData
        };
    }

    componentDidUpdate(prevProps, prevState){

        if (this.props.seriesData != prevProps.seriesData) {
            this.setState({
                seriesData : this.props.seriesData
            })
        }
    }

    render() {
        let width = window.innerWidth
        let percent = width / 1920
        const options =  {
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                spacingTop: 70 * percent,
                spacingBottom: 30 * percent,
                spacingLeft: 33 * percent,
                spacingRight: 33 * percent,
                height : 300
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
                    fontSize: 12 * percent         
                },
                backgroundColor: '#efedf7',
                borderColor: '#efedf7',
                borderRadius: 10 * percent,
            },
              xAxis:{
                tickColor: 'transparent',
                lineColor: 'transparent',               
                labels: {
                    style: {
                        fontFamily: 'NotoSansCJKR',
                        color: '#9192a8',
                        fontSize: 13 * percent
                     }
                },
                categories: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
              },
            yAxis: {
                title: {
                    text: ''
                },            
                gridLineColor: 'transparent',		
                gridLineWidth: 1 * percent,	
                labels: {
                    style: {
                        fontFamily: 'NotoSansCJKR',
                        color: '#9192a8',
                        fontSize: 13 * percent                    
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
                    borderRadius: 5 * percent,
                    dataLabels: {
                        enabled: false
                    }
                },
                series: {
                    pointWidth: 10 * percent,
                },
            },    
            colors: ['#7b48ff'],
        }
        return (
            <Fragment>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
        );
    }
}
export default EventChartComponent;