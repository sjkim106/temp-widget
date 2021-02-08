import React, {Component, Fragment} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



class WaterLevelChartComponent extends Component {
    constructor (_props) {
        super(_props);
        this.state = {
            seriesData : _props.seriesData,
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
        const options = {
            chart: {
                type: 'line',
                backgroundColor: 'transparent',
                spacingTop: 130 * percent,
                spacingBottom: 25 * percent,
                spacingLeft: 34 * percent,
                spacingRight: 40 * percent,
                height : "250px"
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
                    fontSize: 10 * percent         
                },
                backgroundColor: '#efedf7',
                borderColor: '#efedf7',
                borderRadius: 10 * percent,
            },
              xAxis:{
                tickColor: 'transparent',
                lineColor: 'rgba(255,255,255,0.2)',               
                labels: {
                    style: {
                        fontFamily: 'NotoSansCJKR',
                        color: '#9192a8',
                        fontSize: 10 * percent
                     }
                },
                categories: ['16:00','17:00','18:00','19:00','20:00','21:00']
              },
            yAxis: {
                title: {
                    text: ''
                },            
                gridLineColor: 'rgba(255,255,255,0.1)',		
                gridLineWidth: 1 * percent,	
                labels: {
                    style: {
                        fontFamily: 'NotoSansCJKR',
                        color: '#9192a8',
                        fontSize: 10 * percent                    
                     }
                },
                tickPositions: [0,500,1000,1500,2000],
            },	    	  		    
            legend: {
                enabled: false
            },
            series: [{
                data: [
                    {color: "transparent", y: 600},
                    {color: "transparent", y: 1000},
                    {color: "#ff564d", y: 1200},
                    {color: "#39ccdd", y: 200},
                    {color: "transparent", y: 700},
                ],
                lineColor : '#8d87ff',
                fillColor: 'rgba(121, 84, 255,0.2)',
                marker: {
                    radius:2.5 * percent					
                },
            },
            {
                data: [800,500,1000,500,900],
                lineColor : '#8d87ff',
                fillColor: 'transparent',
                dashStyle: 'Dash',
                color:'#8d87ff'
            },
            {
                data: [1800,1800,1800,1800,1800],
                lineColor : '#e22b00',
                color:'#e22b00'
            },
            {
                data: [1600,1600,1600,1600,1600],
                lineColor : '#f0c413',
                color:'#f0c413'
            },
            {
                data: [1300,1300,1300,1300,1300],
                lineColor : '#52cf21',
                color:'#52cf21'
            }],
            plotOptions: {
                series: {
                    name: '수위계측 센서',
                    fillColor: 'transparent',
                    lineWidth: 1 * percent,                
                    marker: {
                        lineColor: '#ffffff',
                        radius:0 * percent					
                    },
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 1
                }
            },    
        }
        return (
            <Fragment>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
        );
    }
}
export default WaterLevelChartComponent;