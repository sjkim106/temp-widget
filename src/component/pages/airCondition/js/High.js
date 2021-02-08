import React, {Component, Fragment} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const width = window.innerWidth
const percent = width / 1920


class High extends Component {

    render() {
        const series2 = this.props.data;
        const options = {
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                spacingTop: 30 * percent,
                spacingBottom: 30 * percent,
                spacingLeft: 10 * percent,
                spacingRight: 10 * percent,
                width : 300 * percent ,
                height: 190 * percent
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            credits: {
                enabled: false
            },
            tooltip: {
                style: {
                    fontFamily: 'NotoSansCJKM',
                    color: '#626673;',
                    fontSize: 10
                },
                backgroundColor: '#efedf7',
                borderColor: '#efedf7',
                borderRadius: 10 ,
            },
            legend: {
                reversed: true
            },
            xAxis: {
                tickColor: 'transparent',
                lineColor: 'transparent',
                categories: [
                    '2019-03-27 22:00',
                    '2019-03-28 04:00',
                    '2019-03-28 10:00',
                ],
                labels: {
                    style: {
                        fontFamily: 'NotoSansCJKL',
                        color: '#a8abbd',
                        fontSize: 7,
                    }
                },
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                gridLineColor: 'transparent',
                labels: {
                    align: 'center',
                    style: {
                        fontFamily: 'NotoSansCJKL',
                        color: '#a8abbd',
                        fontSize: 10 ,
                    }
                },
                tickPositions: [0,50,100,150,200],
            },
            series: [{
                name: null,
                data: series2}
            ],
            plotOptions: {
                column: {
                    borderWidth: 0,
                    pointPadding: 0,
                    borderRadius: 3 ,
                    dataLabels: {
                        enabled: false
                    }
                },
                series: {
                    showInLegend:false,
                    pointWidth: 4 ,
                },
            },
            colors: ['#45abff', '#69e359', '#e86c1a', '#e8314f'],

        }
        return (
            <Fragment>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
        );
    }
}
export default High;