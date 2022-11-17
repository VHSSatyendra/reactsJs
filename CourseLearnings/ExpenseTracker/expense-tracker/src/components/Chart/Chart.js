// Flow 007


import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    // the datapoint values(amount) are stored in this dataPointsValues
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // this finds the maximum value 
    const totalMaximum = Math.max(...dataPointsValues); 

    return (
        <div className = "chart">
            {props.dataPoints.map((datapoint) => (
            <ChartBar 
            key = {datapoint.label}
            value = {datapoint.value}
            maxValue = {totalMaximum}
            label = {datapoint.label}/>
            ) ) }
        </div>
    )
}

export default Chart;