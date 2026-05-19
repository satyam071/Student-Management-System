import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import AuthHero from "../Components/AuthHero";
// import LoginPage from "./Login"
// import SignupPage from "./Signup"
import SideBar from "../Components/LeftSideBar";
import DashboardPage from "./Dashboard"
import RecordingsPage from "./Recordings"
import NotFound from "./NotFound.page";
import Lecture from "./Lecture";

interface Props {

}

const AppContainer: React.FC<Props> = (props) => {
    return (
        <div>
            <Routes>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={
                    <div className="flex flex-row ">
                        <SideBar />
                        <DashboardPage />
                    </div>
                } />
                <Route path="recordings" element={
                    <div className="flex flex-row ">
                        <SideBar />
                        <RecordingsPage />
                    </div>
                } />
                <Route path="batch/:batchNumber/lecture/:lectureNumber" element={
                    <div className="flex flex-row ">
                        <SideBar />
                        <Lecture/>
                    </div>
                } />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    );
};

export default AppContainer;