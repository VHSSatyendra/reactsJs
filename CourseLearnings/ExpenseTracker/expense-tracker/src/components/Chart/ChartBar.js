// Flow 008


import './ChartBar.css';

const ChartBar = (props) => {

    // setting initial value of bars
    let barFillHeight = '0%';

    // if the maxvalue is greater than zero than the barFillheight changes its height according to the formula below 
    if (props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
    <div className = 'chart-bar'>
        <div className= 'chart-bar__inner'>
            <div className= 'chart-bar__fill'
            style={{height: barFillHeight}}
            ></div>
        </div>
        <div className= 'chart-bar__label'>{props.label}</div>
    </div>
    )
}

export default ChartBar;