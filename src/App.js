import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Games from './components/Games';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Contacts from './components/Contacts'
import Home from './components/Home';
import GameDetails from './components/GameDetails';
import UserFavourites from './components/UserFavourites'
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
    </div>
    <Routes>
    <Route exact path="/games" element={<Games />}></Route>
    <Route exact path="/register" element={<Register/>}></Route>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path="/contacts" element={<Contacts/>}></Route>
    <Route exact path="/users" element={<UserFavourites />}></Route>
    <Route exact path="/games/:gameId" element={<GameDetails/>}></Route>

    <Route exact path="/" element={<Home />}></Route>



    </Routes>

    </Router>
  );
}

export default App;
