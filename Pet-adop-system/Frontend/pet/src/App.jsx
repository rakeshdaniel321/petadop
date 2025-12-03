import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AddPet from './pages/AddPet';
import About from './pages/About';
import PetDetails from './pages/PetDetails';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-pet" element={<AddPet />} />
            <Route path="/about" element={<About />} />
            <Route path="/pet/:id" element={<PetDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;