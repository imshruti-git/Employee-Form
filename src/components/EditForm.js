import React, { useState }from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const EditForm = ({display, updateEntry, handleCancel}) => {


//const [editContactId, setEditContactId] = useState(display.id)

const id = display.id;

//input field states //

const [name, setName] = useState(display.name);
const [contact, setContact] = useState(display.contact);
const [address, setAddress] = useState(display.address);
//const [profilepic, setProfilepic] = useState(display.profilepic);

const updatedEmployee={id, name, contact, address};

const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry(id, updatedEmployee)
}

  return (
    <div>
        
       <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control 
                        type='text'
                        name='name'
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}              
                    />
                </Col>
                <Col>
                <Form.Label>Contact Details</Form.Label>
                    <Form.Control 
                        type='number'
                        name='contact'
                        placeholder="012345"
                        onChange={(e) =>setContact(e.target.value)}
                        value={contact}
                    />
                </Col>
            </Row>
                <br/>
            <Row>
                <Col>
                   
                     <Form.Label>Address</Form.Label>
                    <Form.Control 
                        placeholder="Address" 
                        name='address'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                </Col>
              
            </Row>
            <br/>
            <Row>
            <Col>
                    <Form.Label>Upload Pic</Form.Label>
                    <Form.Control
                        type='file' 
                        name="myImage"
                      //  onChange={(e) => setProfilepic(e.target.value)}
                      //  value={display.profilepic}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col></Col>
                <Col>
                <Button 
                   variant="success" 
                   type="submit"
                   onClick={handleCancel}
                >
                    EDIT
                </Button>
                </Col>
                
            </Row>
        </Form>
    
    </div>
  )
}

export default EditForm