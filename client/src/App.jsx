import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
