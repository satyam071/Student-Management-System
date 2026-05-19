import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import LoginPage from "./pages/Login"
// import SignupPage from "./pages/Signup"
// import DashboardPage from "./pages/Dashboard"
// import RecordingsPage from "./pages/Recordings"
// import AuthHero from "./Components/AuthHero";
import AppContainer from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import NotFound from "./pages/NotFound.page";
import Lecture from "./pages/Lecture";

interface Props {

}

const App: React.FC<Props> = (props) => {
  return (
    <div >
      <Routes>


        {/* <Route path="/"  element={<LoginPage />} /> */}
        <Route index element={<Navigate to="*" replace />} />
        <Route path="/auth/*" element={<AuthPage />} />

        <Route path="/app/*" element={<AppContainer />} />
        <Route path="*" element={<NotFound />} />
        





      </Routes>
    </div>
  );
};

export default App;