import React, { useEffect } from "react";
import { fetchGroups } from "../api";

interface Props {

}

const Dashboard: React.FC<Props> = (props) =>{
  useEffect(()=>{
    fetchGroups();
  },[]);
  return (
    <div>
        This is a dashboard Section
    </div>
  );
};

export default Dashboard;