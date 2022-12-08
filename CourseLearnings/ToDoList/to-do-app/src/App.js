import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {

  // This useState updates the goals which are received from the components
  const [courseGoals,setCourseGoals] = useState([
    {text: 'Do All Exercises!', id:'g1'},
    {text: 'Finish The Course!', id:'g2'}
  ])

  // This function collects the previous enteredGoals and upcomingGoals and returns as a array of Goals
  const onAddGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text:enteredText,id:Math.random().toString()});
      return updatedGoals;
    })
  }

  // This functions delete the goals and returns the updatedGoalList
  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    })
  }

  // This is the main goal content thats displayed on the screen if there are no goals
  let content = (
    <p style={{textAlign:'center'}}>No goals found. Maybe add one?</p>
  );

  // The GoalData displays when the coursegoals length is more(when goals are present in list)
  if (courseGoals.length > 0){
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem = {deleteItemHandler}/>
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={onAddGoalHandler}/>
      </section>

      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
