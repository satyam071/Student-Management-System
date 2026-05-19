import React from "react";
import { Link } from "react-router";

interface Props {

}

const Login: React.FC<Props> = (props) =>{
  return (
    <div>
        This is a Login Section
        Don't have an account <Link  to={"/signup"}><span className="text-blue-600">Click here</span></Link>
    </div>
  );
};

export default Login;