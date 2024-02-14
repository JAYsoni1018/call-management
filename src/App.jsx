import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './Components/SideBar'
import HomeScreen from './Pages/HomeScreen'
import AllCustomets from './Pages/AllCustomets'
import AllTickets from './Pages/AllTickets'
import CustomerDetail from './Pages/CustomerDetail'
import Footer from './Components/Footer'



function App() {

  return (
    <div className="App">

    <Router>
      <SideBar />
      <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/customers" element={<AllCustomets />} />
          <Route exact path="/tickets" element={<AllTickets />} />
          <Route exact path="/detail" element={<CustomerDetail />} />


        </Routes>
        <Footer />
    </Router>


  </div>
  )
}

export default App
