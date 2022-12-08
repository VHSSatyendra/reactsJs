import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {

    // This Handler Executes the onDelete function thats received from Parent through id.  
    const deleteHandler = () => {
        props.onDelete(props.id);
    }

    return(
        <li className='goal-item' onClick={deleteHandler}> 
            {props.children}
        </li>
    )
}

export default CourseGoalItem;