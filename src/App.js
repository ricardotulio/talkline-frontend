import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg'
import style from './App.module.css'
import { Login } from './pages/Login';
import { Authentication } from './pages/Authentication';
import { Messages } from './pages/Messages';

function App() {
  return (
    <div className={style.app}>
      <Router>
        <div className={style.container}>
          <nav>
            <ul>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/k" element={<Authentication />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
