import React, {Component, Fragment} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



class EarthquakeChartComponent extends Component {
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
                type: 'area',
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
                categories: ['15시','16시','17시','18시','19시','20시']
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
                data: [800,500,1000,500,900],
                lineColor : '#8d87ff',
                fillColor: 'transparent',
                color: '#8d87ff'
            }],
            plotOptions: {
                series: {
                    name: '지진계측 센서',
                    fillColor: '#8d87ff',
                    lineWidth: 1 * percent,                
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
            
        }
        return (
            <Fragment>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
        );
    }
}
export default EarthquakeChartComponent;
