import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "reactstrap";
import { ModalBody, ModalHeader } from "reactstrap";

const View = () => {
  const [view, setView] = useState({});
  let params = useParams();
 
  useEffect(() => {
    fecthStedentDetails();
  }, []);

  const fecthStedentDetails = async (id) => {
    const res = await axios.get(
      `https://63f829145b0e4a127de0f33c.mockapi.io/student/${params.id}`
    );
    setView(res.data);
  };
  console.log(view);

 

  return (
    <>
     
          <div>Id:{view.id}</div>
          <div>Name:{view.name}</div>
          <div>Place:{view.place}</div>
          <div>Roll:{view.roll}</div>
        
    </>
  );
};

export default View;
