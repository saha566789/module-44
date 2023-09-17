
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LIneCharts from './components/LineCharts/LIneCharts'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1>Vite + React</h1>
     <PriceOptions></PriceOptions>
    <LIneCharts></LIneCharts>
    </>
  )
}

export default App
