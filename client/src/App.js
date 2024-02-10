import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import WaitList from './pages/WaitList';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="waitlist" element={<WaitList/>} />
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
