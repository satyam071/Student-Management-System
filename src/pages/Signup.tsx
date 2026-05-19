import React from "react";
import { Link } from "react-router";

interface Props {

}

const Signup: React.FC<Props> = (props) => {
    return (
        <div>
            This is a signup section
            Alredy have an account <Link to={"/auth/login"}><span className="text-blue-600">Click here</span></Link>


        </div>
    );
};

export default Signup;