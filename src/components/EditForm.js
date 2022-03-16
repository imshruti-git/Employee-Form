import React, { useState }from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const EditForm = ({display}) => {


    console.log(display.contact)
/*input field states //

//const data={name, contact, address, profilepic};
//console.log(data)

const [name, setName] = useState(display.name);
const [contact, setContact] = useState(display.contact);
const [address, setAddress] = useState(display.address);
const [profilepic, setProfilepic] = useState(display.profilepic);


const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee)
}*/

  return (
    <div>
        
       <Form>
            <Row>
                <Col>
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder="Name"
                        //onChange={(e) => setName(e.target.value)}
                        value={display.name}              
                    />
                </Col>
                <Col>
                <Form.Label>Contact Details</Form.Label>
                    <Form.Control 
                        type='number'
                        placeholder="012345"
                        //onChange={(e) =>setContact(e.target.value)}
                        value={display.contact}
                    />
                </Col>
            </Row>
                <br/>
            <Row>
                <Col>
                   
                     <Form.Label>Address</Form.Label>
                    <Form.Control 
                        placeholder="Address" 
                       // onChange={(e) => setAddress(e.target.value)}
                        value={display.address}
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
                   variant="success" type="submit"
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