import React from 'react'
import { Chart } from 'react-charts'

export default function ChartComponent(props) {

    const series = React.useMemo(
        () => ({
            type: 'area'
        }),
        []
    )

    const {data}=props;
    const lineChart = data.length>0 ? (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div>
            <div
                className="container"
                style={{
                    height: '600px',
                    display:'flex',
                    flex:1
                }}
            >

                <Chart data={data}  series={series} axes={props.axes} tooltip />
            </div>
        </div>
    ) : (
        <div>
            <p>No data available</p>
        </div>
    );

    return lineChart;
}
