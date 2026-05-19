import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login"
import SignupPage from "./pages/Signup"
import DashboardPage from "./pages/Dashboard"
import RecordingsPage from "./pages/Recordings"

interface Props {

}

const App: React.FC<Props> = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/recordings" element={<RecordingsPage />} />
        <Route path="/"  element={<LoginPage/>}/>
        




      </Routes>
    </div>
  );
};

export default App;