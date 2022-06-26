import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainApp from './MainApp';
import Page404 from './errorPages/Page404';
import TopPage from './pages/TopPage';
import CheckReservation from './components/bodies/CheckReservation';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<MainApp />} />
        <Route path='/top' element={<TopPage />} />
        <Route path='reservation_check' element={<CheckReservation />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
