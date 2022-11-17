// flow 009


import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    // This useState is to show or hide the newexpense form UI
    const [isEditing, setIsEditing] = useState(false);

    // This Function brings the data from the ExpenseForm [Child to Parent] and save in expenseData Object
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // This prop sends the data to parent component
        props.onAddExpense(expenseData);

        setIsEditing(false);
    };

    // To Open the ExpenseForm
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    // To Close the ExpenseForm
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (

        <div className="new-expense">
            {/* According to the true or false of isEditing Varible the Expense form shows or hides */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}

            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;