import './App.css';
import ExpenseItem from './component/ExpenseItem';

function App() {
  let expenses=[
    {
      expansedate:new Date(2021,2,24),
      expenseTitle:"food fee",
      expenseAmount:200
    },
    {
      expansedate:new Date(2021,2,24),
      expenseTitle:"School fee",
      expenseAmount:10
    }
  ];
  return (
    <div>
    <h1>hello tashir</h1>
    <ExpenseItem 
    date={expenses[0].expansedate} 
    title={expenses[0].expenseTitle} 
    amount={expenses[0].expenseAmount} 
    />
     <ExpenseItem 
      date={expenses[1].expansedate} 
      title={expenses[1].expenseTitle} 
      amount={expenses[1].expenseAmount} 
    /> 
    </div>
  );
}
export default App;
