import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from 'react-bootstrap/Modal'
import EditForm from './EditForm';


const AppTable = ({records, deleteEntry, editEntry}) => {

  const [view, setView] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true)
    const viewItem = records.find((element) =>{
      return element.id === id
  });
  console.log(viewItem);
  setView(viewItem);
  }


  const [edit, setEdit] = useState(false);
  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = () => setEdit(true);

  //console.log(records);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>View Details</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            {view.name} {view.contact} {view.address}
          </Modal.Body>
          
      </Modal>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>SN</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact Details</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {records.map((rec, index) => (
      <tr 
        key={rec.id}
       
      >
        <td>{index + 1 }</td>
        <td  onClick={() => handleShow(rec.id)}>{rec.name}</td>
        <td  onClick={() => handleShow(rec.id)}>{rec.address}</td>
        <td  onClick={() => handleShow(rec.id)}>{rec.contact}</td>
        <td >
          <DeleteIcon className='deleteIcon' onClick={()=> deleteEntry(rec.id)}/>
          <EditIcon className='editIcon' onClick={handleShowEdit}/>
        </td>

        <Modal show={edit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
              <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <EditForm/>
          </Modal.Body>
          
      </Modal>
      </tr>
    ))}
      
  </tbody>
</Table>
    </div>
  )
}

export default AppTable