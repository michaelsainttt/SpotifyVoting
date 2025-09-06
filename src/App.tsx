import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import PlayListCard from './PlayListCard'
import { SignIn } from './pages/SignIn'
import Submit from "./pages/Submit";
import Leaderboard from "./pages/Leaderboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/signin" element ={<SignIn/>} />
        <Route path = "/submit" element = {<Submit />} />
        <Route path = "/leaderboard" element = {<Leaderboard />} />
      </Routes>
    </Router>
    
  )
}

export default App
