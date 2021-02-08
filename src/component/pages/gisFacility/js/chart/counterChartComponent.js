import React, {Component, Fragment} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



class TidalChartComponent extends Component {
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
                type: 'column',
                backgroundColor: 'transparent',
                spacingTop: 13 * percent,
                spacingBottom: 18 * percent,
                spacingLeft: 0,
                spacingRight: 0,
                height: "130px"
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
                lineColor: 'transparent',               
                labels: {
                    style: {
                        fontFamily: 'NotoSansCJKR',
                        color: '#9192a8',
                        fontSize: 10 * percent
                     }
                },
                categories: ['15시','16시','17시','18시','19시','20시','21시','22시','23시','24시']
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
                    borderRadius: 3 * percent,
                    dataLabels: {
                        enabled: false
                    }
                },
                series: {
                    pointWidth: 6 * percent,
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
export default TidalChartComponent;
