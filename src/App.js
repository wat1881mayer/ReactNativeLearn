import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1',title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e2',title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e3',title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4',title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  ];
  return (
    <div>
      <h2>React Learn</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;
