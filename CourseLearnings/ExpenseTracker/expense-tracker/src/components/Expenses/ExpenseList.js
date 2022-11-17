// Flow 002


import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css';

const ExpenseList = (props) => {

    // This Condition checks whether the received items[filteredexpenses] are empty or not. If its empty it shows there are no expenses in that year
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>;
    }

    return (
        <ul className="expenses-list">
            {/* The Filtered Expenses are rendered out via this ExpenseItem Component using map function */}
            {props.items.map(expense => (

            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
            ))}

        </ul>
    )
}

export default ExpenseList;