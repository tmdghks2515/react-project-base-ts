import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import MainPage from './pages/MainPage';
import LoginLayout from './components/layouts/LoginLayout';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<MainPage />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
