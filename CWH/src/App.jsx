import './App.css'
import Header from './Components/header'
import Todos from './Components/Todos'
import Footer from './Components/Footer'
function App() {



  let todos =[{
    sno:1,
    title:"Go to the Market",
    desc:"You need to go to the market"
  },
  {
    sno:2,
    title:"Go to the Mall",
    desc:"You need to go to the market"
  },
  {
    sno:3,
    title:"Go to the Ghar",
    desc:"You need to go to the market"
  }]
  return (
    <>
    <Header title = "My Todos List"/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  )
}

export default App
