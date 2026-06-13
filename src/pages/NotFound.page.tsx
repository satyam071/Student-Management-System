import React from "react";

interface Props {

}

const NotFound: React.FC<Props> = () =>{
  return (
    <div className="flex justify-center items-center text-red-500 bg-black font-extrabold h-screen">
        <h1>Error 404 Not Found</h1>
        
    </div>
  );
};

export default NotFound;