import './App.css'
import NonAuthorized from './modules/Location/Non-authorized'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Login from './modules/Location/Non-authorized/Login/components/login';
import TeamName from './modules/Location/Non-authorized/TeamName/components/TeamName';
import Register from './modules/Location/Non-authorized/Register/components/Register';
import AdminDashboard from './modules/Location/Authorized/Dashboard/Admin/components/AdminDashboard';
import Authorized from './modules/Location/Authorized/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
            <Route path="/login" element={<NonAuthorized />} />
            <Route path="/teamname" element={<NonAuthorized />} />
            <Route path="/register" element={<NonAuthorized />} />
            <Route path="/dashboard" element={<Authorized />} />
            <Route exact path="/" element={<NonAuthorized />} />
          </Routes>
    </Router>
  )
}

export default App
