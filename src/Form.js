import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        name:'',
        age:'',
        place:'',
        roll:''
    });
  
    const handleChange = (e) => {
       setData((prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = () => {
       if(data.name===''){
       toast.error('Enter Your Name')
       return;
       }
       if(data.age===''){
        toast.error('Enter Your age')
        return;
       }
       if(data.place===''){
        toast.error('Enter Your place')
        return;
       }
       if(data.roll===''){
        toast.error('Enter Your roll')
        return;
       }
        axios.post("https://63f829145b0e4a127de0f33c.mockapi.io/student", data)
       navigate('/table')
      
    }

  return (
    <div className='container mt-4'>
        <h1>Form Validation</h1>
      <div className='row'>
        <div className='col-4'>
            <label>Name</label><br/>
            <input type='text' name='name' placeholder='Enter your name' onChange={handleChange}/>
        </div>
        <div className='col-4'>
            <label>Age</label><br/>
            <input type='text' name='age' placeholder='Enter your name' onChange={handleChange}/>
        </div>
        <div className='col-4'>
            <label>place</label><br/>
            <input type='text' name='place' placeholder='Enter your name' onChange={handleChange}/>
        </div>
        <div className='col-4'>
            <label>Roll</label><br/>
            <input type='text' name='roll' placeholder='Enter your name' onChange={handleChange}/>
        </div>
      </div>
      <button className='btn btn-sm btn-primary mt-4' onClick={handleSubmit}>Submit</button>
      <Toaster/>
    </div>
    
  )
}

export default Form
