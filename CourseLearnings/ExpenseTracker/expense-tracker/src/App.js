import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// This (EXEPENSES) is the default dataset given to render in the start in the Array with Objects in it

const EXPENSES = [
  {
    id : 'e1',
    title : 'Drawing Paper',
    amount : 14.2,
    date : new Date(2022,11,10)
  },
  {
    id : 'e2',
    title : 'Color Pencils',
    amount : 20.5,
    date : new Date(2022,11,5)
  },
  {
    id : 'e3',
    title : 'Oil Pastels',
    amount : 32,
    date : new Date(2022,10,24)
  },
  
  {
    id : 'e4',
    title : 'Blending Stumps',
    amount : 10.3,
    date : new Date(2022,8,15)
  },
  
]


function App() {
  
  // This UserState is used assigne/set the EXPENSES data to myExpenses Variable
  const [myExpenses,setMyExpenses] = useState(EXPENSES);
  
  // This addExpenseHandler used to get the data from child to parent , whatever the new expenses added in the UI it is been carried to this from function via NewExpense Component while giving to it as a Prop. And also it sets and updates the new exepenses along with the previous expenses in myExpenses. Further its sent to Expenses Component to Render

  const addExpenseHandler = (expense) => {
    setMyExpenses(prevExpenses => {
      return[expense,...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses = {myExpenses}/>
    </div>
  );
}

export default App;
