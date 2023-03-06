import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Editdata = ({fetchID, fetchData, toggle}) => {
  const [edit, setEdit] = useState({})
  console.log(fetchID)


  useEffect(() => {
    editdetails();
  },[])

  const editdetails = async() => {
    const res = await axios.get(`https://63f829145b0e4a127de0f33c.mockapi.io/student/${fetchID.editData}`)
    setEdit(res.data)
  }
 

  const handleChange = (e) => {
    // console.log(e.target)
    setEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdata = async() => {
    const update = await axios.put(`https://63f829145b0e4a127de0f33c.mockapi.io/student/${fetchID.editData}`,edit)
    fetchData();
    if(update.status===200){
      alert('Updated Successfully')
      toggle();
    }
  }


   
  return (
    <div className='container'>
       <div className="row">
        <div className="col-4">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="name"
             value={edit.name}
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          
          />
        </div>
        <div className="col-4">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="age"
            value={edit.age}
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          
          />
        </div>
        <div className="col-4">
          <label for="exampleInputEmail1" class="form-label">
            place
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="place"
            value={edit.place}
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          
          />
        </div>
        <div className="col-4">
          <label for="exampleInputEmail1" class="form-label">
            roll
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            name="roll"
            value={edit.roll}
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          
          />
        </div>
        <div>
        <button className='m-3 btn btn-sm btn-primary' onClick={() => toggle()}>cancel</button>
        <button className='m-3 btn btn-sm btn-secondary' onClick={handleUpdata}>Update</button>
        </div>
    </div> 
    </div>
  )
}

export default Editdata
