import React, {Component, Fragment} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



class FacilityRateChartComponent extends Component {
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
        const options = {
            chart: {
                spacing: 0,
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'transparent',
                height : (window.innerHeight / 100 * 22.28) + "px",
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
                    fontSize: 11 * percent         
                },
                backgroundColor: '#efedf7',
                borderColor: '#efedf7',
                borderRadius: 10 * percent,
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
                    y: this.state.seriesData.cctv,
                }, {
                    name: '공공와이파이',
                    y: this.state.seriesData.wifi,
                }, {
                    name: '스마트가로등',
                    y: this.state.seriesData.lamp,
                }, {
                    name: '소화기',
                    y: this.state.seriesData.extinguisher,
                },{
                    name: '공공화장실',
                    y: this.state.seriesData.toilet,
                },{
                    name: '공공주차장',
                    y: this.state.seriesData.parkingLot,
                },{
                    name: '심장충격기',
                    y: this.state.seriesData.radian,
                },{
                    name: '주유시설',
                    y: this.state.seriesData.oil,
                },{
                    name: '차번호 인식 시스템',
                    y: this.state.seriesData.farm,
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
        }
        return (
            <Fragment>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
        );
    }
}
export default FacilityRateChartComponent;