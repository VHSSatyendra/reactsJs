// Flow 005

import Chart from "../Chart/Chart";


const ExpenseChart = (props) => {

    // These are the datapoints to represent in the chart 
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    // this loop picks the each month from the chartDataPoints array and adds the expense amount to the value 
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //Starting at 0 > Januaury => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints} />
    )
}

export default ExpenseChart;