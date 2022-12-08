import React, { useState } from 'react';

import './CourseInput.css';
import Button from '../../UI/Button/Button';

const CourseInput = props => {

    // This useState stores and updates the entered value by the user through input
    const [enteredValue, setEnteredValue] = useState('');
    // This useState checks whether the input is empty or not to set Styles 
    const [isValid, setIsValid] = useState(true)

    // This function sets the entered value by the user
    const goalInputhandler = event => {
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    }

    // Once the user submitted it make sures to send the data to parent component
    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) { //If there's no value entered nothing should rendered
            setIsValid(false);
            return;
        }
        setEnteredValue('');
        props.onAddGoal(enteredValue);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input
                    type="text"
                    onChange={goalInputhandler}
                    value={enteredValue} />
            </div>

            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseInput