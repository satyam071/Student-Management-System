import React from "react";
import { Link } from "react-router-dom";

interface Props {

}

const Login: React.FC<Props> = (props) =>{
  return (
    <div>
        This is a Login Section
        Don't have an account <Link  to={"/auth/signup"}><span className="text-blue-600">Click here</span></Link>
    </div>
  );
};

export default Login;