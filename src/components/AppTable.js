import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from 'react-bootstrap/Modal'


const AppTable = ({records, setRecords, deleteEntry, editEntry}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    let viewItem = records.find((element) =>{
      return element.id === id
  });
  console.log(viewItem)
  }
 
  console.log(records);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>View Details</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            
          </Modal.Body>
      
      </Modal>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact Details</th>
      <th>Pic</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {records.map((rec) => (
      <tr 
        key={rec.id}
       
      >
        <td></td>
        <td  onClick={() => handleShow(rec.id)}>{rec.name}</td>
        <td  onClick={() => handleShow(rec.id)}>{rec.address}</td>
        <td  onClick={() => handleShow(rec.id)}>{rec.contact}</td>
        <td  onClick={() => handleShow(rec.id)}></td>
        <td >
          <DeleteIcon onClick={()=> deleteEntry(rec.id)}/>
          <EditIcon onClick={()=> editEntry(rec.id)}/>
        </td>
      </tr>
    ))}
      
  </tbody>
</Table>
    </div>
  )
}

export default AppTable