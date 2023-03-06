import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './table.css'
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import { ModalBody, ModalHeader } from 'reactstrap';
import Editdata from './Editdata';
import swal from 'sweetalert';


const Table = () => {
    const[data, setData] = useState([])
    const [modal, setModal] = useState(false);
    const[ID, setID] = useState()

 useEffect(() => {
    fecthdetails();
 },[])
   
 const fecthdetails = async() => {
    const res = await axios.get('https://63f829145b0e4a127de0f33c.mockapi.io/student')
    setData(res.data)
 }  
 const handleDelete = async(id) => {
swal({
    Title : 'Are you Sure?',
    text : 'Once deleted not able to recover',
    icon:'warning',
    buttons:true,
    dangerMode:true,
}).then((whiledelete) => {
    if(whiledelete) {
         axios.delete(`https://63f829145b0e4a127de0f33c.mockapi.io/student/${id}`).then (() => {
            fecthdetails();
         });
         swal('Successfully deleted',{
            icon:'success',
         })
        }else {
            swal('your file is safe')
        }
 
})
 }
//  const handleDelete = async(id) => {
//    await axios.delete(`https://63f829145b0e4a127de0f33c.mockapi.io/student/${id}`)
//     fecthdetails();
//  }

 const handletoogle = (id) => {
    setID({editData:id})
    setModal(!modal)
 }

     
  return (
    <>
    
    <Modal isOpen={modal} toggle={handletoogle} >
        <ModalHeader>
            <h1>Editdata</h1>
        </ModalHeader>
        <ModalBody>
            <Editdata
             fetchID={ID}
             fetchData={fecthdetails}
             toggle={handletoogle}
            />
        </ModalBody>
    </Modal>
    <div className='mt-4'> 
    <Link to={'/form'}>
    <button className='btn btn-lg btn-outline-success '>Create+</button>
    </Link> 
    
    </div>
    <div className='container mt-2 text-center'>   
      <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Roll</th>
            <th>Actions</th>
        </tr>
        {
            data.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.place}</td>
                        <td>{item.roll}</td>
                        <td>
                           <Link to={`/view/${item.id}`}>
                           <button className='btn btn-sm btn-primary m-2'>View</button>
                           </Link>
                            <button className='btn btn-sm btn-warning m-2' onClick={() =>handletoogle(item.id)}>Edit</button>
                            <button className='btn btn-sm btn-danger m-2' onClick={(id) => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
      </table>
    </div>

    </>
  )
}

export default Table
