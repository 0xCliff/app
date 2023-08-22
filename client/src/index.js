import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './components/login/Login';
import NoMatch from './pages/NoMatch';
import './index.css';
import App from './App';
import { Provider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/index' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  </Provider>
);
