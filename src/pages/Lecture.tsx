import React from "react";
import { useParams } from "react-router"
interface Props {

}

const Lecture: React.FC<Props> = (props) =>{
    const {batchNumber,lectureNumber}=useParams<any>();
    console.log({batchNumber,lectureNumber})
  return (
    <div>
        Showing the data of Batch : #{batchNumber} of Lecture : #{lectureNumber}
    </div>
  );
};

export default Lecture;