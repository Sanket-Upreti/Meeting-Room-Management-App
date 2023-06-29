import './App.css'
import NonAuthorized from './modules/Location/Non-authorized'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Authorized from './modules/Location/Authorized/Dashboard';
import { AuthProvider } from './utils/auth';
import RequireAuth from './utils/requireAuth';

function App() {

  return (
    <AuthProvider >
    <Router>
      <Routes>
            <Route path="/login" element={<NonAuthorized />} />
            <Route path="/teamname" element={<NonAuthorized />} />
            <Route path="/register" element={<NonAuthorized />} />
            <Route path="/dashboard" element={<RequireAuth><Authorized /></RequireAuth>} />
            <Route exact path="/*" element={<NonAuthorized />} />
          </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
