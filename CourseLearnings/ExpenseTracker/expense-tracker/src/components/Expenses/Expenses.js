// Flow 001

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import './Expenses.css'
import { useState } from "react";

const Expenses = (props) => {

    // This UseState sets the filteredYear that the user opts in the year options
    const [filteredYear, setFilteredYear] = useState('2020');

    // This function follows bottom-up approach , bringing the selected year from the child to parent which is been selected by the user. It is given as prop named with onSelectedYear to the Expense Filter Component.After getting the value the setFilteredYear is updated with the user input.
    const onFilterSelection = (selectedyear) => {
        setFilteredYear(selectedyear);
    };

    // This function uses the expenses data via props to filter the required expenses of a selected year using filter function.It returns the expenses of the filtered year and renders them. This filtered expenses is sent to ExpenseChart and ExpenseList components to render accordingly.
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onSelectedYear={onFilterSelection} />

                <ExpenseChart expenses={filteredExpenses} />

                <ExpenseList items={filteredExpenses} />

            </Card>
        </div>
    )
}


export default Expenses;



// Alternate ways of rendering data

// {/* {props.expenses.map(expense => (

//                     <ExpenseItem
//                         key={expense.id}
//                         title={expense.title}
//                         amount={expense.amount}
//                         date={expense.date} />
//                 ))} */}

// {/* <ExpenseItem
//                 title={props.expenses[0].title}
//                 amount={props.expenses[0].amount}
//                 date={props.expenses[0].date}
//             />
//             <ExpenseItem
//                 title={props.expenses[1].title}
//                 amount={props.expenses[1].amount}
//                 date={props.expenses[1].date}
//             />
//             <ExpenseItem
//                 title={props.expenses[2].title}
//                 amount={props.expenses[2].amount}
//                 date={props.expenses[2].date}
//             />
//             <ExpenseItem
//                 title={props.expenses[3].title}
//                 amount={props.expenses[3].amount}
//                 date={props.expenses[3].date}
//             /> */}
