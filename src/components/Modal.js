import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import useAppForm from './AppForm';

const AppModal = () => {
    const {render, records} = useAppForm();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      handleClose()
    },[records])
    
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
            ADD EMPLOYEE
        </Button>

      <Modal 
        show={show} 
        onHide={handleClose}  
        backdrop="static"
        keyboard={false} 
      >
            <Modal.Header closeButton>
                <Modal.Title>Add Contacts</Modal.Title>
            </Modal.Header>

            <Modal.Body>{render}

            </Modal.Body>
      </Modal>
    </div>
  )
}

export default AppModal