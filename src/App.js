import Navbar from './Components/Navbar';
import Cinema from './Pages/Cinema';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import './sass/dist/styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL} forceRefresh={true}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/cinema/:location/film/:title/:id' element={<Cinema />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
