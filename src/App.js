import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Header from "./components/Header/Navbar"
import MasterList from './components/MasterList/MasterList';

function App() {
  return (
    <div className="App">
       <Router >
        <Header />

        <MasterList />

          <Routes>
            {/* <Route path="/my-portfolio" exact element={<Home />} /> */}
          </Routes>
        </Router>
    
    </div>
  );
}

export default App;
