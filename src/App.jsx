import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import PhotoGallery from './Pages/Photopage/PhotoGallery';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Photo" element={<PhotoGallery/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;