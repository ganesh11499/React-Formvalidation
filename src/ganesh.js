import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Editdata = (fecthData, fecthID) => {
  const [edit, setEdit] = useState({})


  useEffect(() => {
    editdetails();
  })

  const editdetails = (id) => {
    const res = axios.get(`https://63f829145b0e4a127de0f33c.mockapi.io/student/${fecthID.editData}`)
    setEdit(res.data)
  }
  console.log(edit)
   
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
            //  value={edit.name}
            aria-describedby="emailHelp"
          
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
            // value={edit.age}
            aria-describedby="emailHelp"
          
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
            // value={edit.place}
            aria-describedby="emailHelp"
          
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
            // value={edit.roll}
            aria-describedby="emailHelp"
          
          />
        </div>
    </div>
    </div>
  )
}

export default Editdata
