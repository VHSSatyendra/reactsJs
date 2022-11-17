// flow 010


import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // UseStates for three userinputs to store and update data
    // Method 1

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // Method 2

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate: ''

    // });

    // This function is used to hold the value of entered title
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); //Method 1

        // setUserInput({                          //Method 2
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // setUserInput((prevState) => {           //Method 3
        //     return{...prevState,enteredTitle:event.target.value};

        // })
    }

    // This function is used to hold the value of entered amount
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    // This function is used to hold the value of selected date
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // After submitting data it holds all the values and stores in the expenseData object, that expensedata is sent to parent via props 
    const submitHandler = (event) => {
        event.preventDefault(); //It prevents from happening event i.e submitting 

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;