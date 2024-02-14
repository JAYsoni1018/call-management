import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './Components/SideBar'
import HomeScreen from './Pages/HomeScreen'



function App() {

  return (
    <div className="App">

    <Router>
      <SideBar />
      <Routes>
          <Route exact path="/" element={<HomeScreen />} />


        </Routes>
    </Router>


  </div>
  )
}

export default App
