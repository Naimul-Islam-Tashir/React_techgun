import './App.css';
import Expenses from './component/Expenses/Expenses';

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
    },
    {
      expansedate:new Date(2021,2,24),
      expenseTitle:"Suniversity fee",
      expenseAmount:10
    }
  ];
  return (
    <div>
    <h1>hello tashir</h1>
    <Expenses expensesArray={expenses} />
    </div>
  );
}
export default App;
