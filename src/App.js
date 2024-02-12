
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import CountryDetail from './Components/CountryDetail';

function App() {
  return (

    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:code" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>

      {/* navbar
      searchbar
      filter
      countryTiles



      backbutton */}

    </div>
  );
}

export default App;
