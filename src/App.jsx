import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Balance from './components/balance'
import IncomeExpences from './components/IncomeExpences'
import TransectionsList from './components/TransectionsList'
import AddTransaction from './components/AddTransaction'
function App() {
  const [transections,setTransections] = useState([])
  const AddTransections = (transection)=>{
    setTransections([...transections, transection])
  }

  const calculateBalance = () => {
    return transections.reduce((acc,transaction) => acc + transaction.amount,0)
  }
  const calculateIncome = () => {
    return transections
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc,transaction) => acc + transaction.amount, 0)
  }

  const calculateExpences = () => {
    return transections
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc,transaction) => acc + transaction.amount, 0)
  }
  return (
    <>
      <Header />
      <Balance Balance={calculateBalance()} />
      <IncomeExpences Income={calculateIncome()} Expences={calculateExpences()} />
      <TransectionsList transections={transections} />
      <AddTransaction addTransection={AddTransections} />
    </>
  )
}

export default App
