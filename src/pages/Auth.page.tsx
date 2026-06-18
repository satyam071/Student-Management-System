import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import AuthHero from "../Components/AuthHero";
import LoginPage from "./Login"
import SignupPage from "./Signup"
// import NotFound from "./NotFound.page";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound.page";

interface Props {

}

const AuthPage: React.FC<Props> = (props) => {
    return (
        <div >
            <Routes>
                <Route index element={<Navigate to="login" replace />} />

                <Route path="/login" element={
                    <div className="flex flex-row justify-between ">
                        <LoginPage />
                        <AuthHero/>
                    </div>
                } />
               <Route path="/signup" element={
                    <div className="flex flex-row justify-between ">
                        <SignupPage />
                        <AuthHero/>
                    </div>
                } />
                {/* <Route path="/dashboard" element={<Dashboard/>}></Route> */}
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
            
        </div>
    );
};

export default AuthPage;