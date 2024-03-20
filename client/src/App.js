import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import WaitList from './pages/WaitList';

import WhoWeAre from './pages/WhoWeAre';
import OurMap from './pages/OurMap';
import ForPropertyManager from './pages/ForPropertyManager';
import UseCase from './pages/UseCase';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="waitlist" element={<WaitList/>} />
            <Route path="who-we-are" element={<WhoWeAre />} />
            <Route path="usecase" element={<UseCase />} />
            <Route path="ourmap" element={<OurMap />} />
            <Route path="for-property-manager" element={<ForPropertyManager />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
