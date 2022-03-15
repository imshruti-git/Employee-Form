import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from 'react-bootstrap/Modal'


const AppTable = ({records, setRecords, deleteEntry}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  console.log(records);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        
        
          <Modal.Body ></Modal.Body>
      
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
        onClick={() => handleShow()}
      >
        <td></td>
        <td>{rec.name}</td>
        <td>{rec.address}</td>
        <td>{rec.contact}</td>
        <td></td>
        <td onClick={()=> deleteEntry(rec.id)}>
          <DeleteIcon />
        </td><td>
          <EditIcon />
        </td>
      </tr>
    ))}
      
  </tbody>
</Table>
    </div>
  )
}

export default AppTable