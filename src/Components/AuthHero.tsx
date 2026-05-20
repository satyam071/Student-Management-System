import React from "react";

interface Props {

}

const AuthHero: React.FC<Props> = (props) =>{
  return (
    <div className="bg-purple-700 h-screen w-1/2"> 
        <img src="https://i.pinimg.com/736x/1b/24/67/1b24675a1e16a5928604b84bdb986972.jpg" alt="Student Management System Logo" />
    </div>
  );
};

export default AuthHero;