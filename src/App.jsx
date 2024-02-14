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
        {/* <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} /> */}


      </Routes>
      {/* <Footer /> */}
    </Router>


  </div>
  )
}

export default App
