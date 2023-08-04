import "./App.css";
import NonAuthorized from "./modules/Location/Non-authorized";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authorized from "./modules/Location/Authorized/Dashboard";
import { AuthProvider } from "./utils/auth";
import RequireAuth from "./utils/requireAuth";
import Manage from "./modules/Location/Authorized/Dashboard/Manage/components/Manage";
import WrongRoute from "./modules/Location/NotFound/WrongRoute";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<NonAuthorized />} />
                <Route exact path="/login" element={<NonAuthorized />} />
                <Route exact path="/teamname" element={<NonAuthorized />} />
                <Route exact path="/register" element={<NonAuthorized />} />
                <Route exact path="/dashboard" element={<Authorized />} />
                <Route exact path="/manage" element={<Authorized />} />
                <Route exact path="*" element={<WrongRoute />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
