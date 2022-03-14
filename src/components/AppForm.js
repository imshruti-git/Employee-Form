import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'


const AppForm = ({handleClose}) => {

    //main array of objects
    const [records, setRecords] = useState([]);

    //input field states //

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [profilepic, setProfilepic] = useState('');

    //form submit event//
    const handleSubmit=(e)=>{
        e.preventDefault();

        let record={
            id:new Date().getTime().toString(),
            name,
            contact,
            address,
            profilepic
        }
        console.log(record);

        setRecords([...records, record]);
        setName('');
        setContact('');
        setAddress('');
        setProfilepic('');
    }

    
    //saving data to local storage//
   // useEffect(()=>{
      //  localStorage.setItem('records', JSON.stringify(records));
    //},[records])
   
  return (
    <div>
       <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control 
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Col>
                <Col>
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        placeholder="Address" 
                        onChange={(e) => setAddress(e.target.value)}
                        value={address} 
                    />
                </Col>
            </Row>
                <br/>
            <Row>
                <Col>
                    <Form.Label>Contact Details</Form.Label>
                    <Form.Control 
                        placeholder="012345"
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}  
                    />
                </Col>
                <Col>
                    <Form.Label>Upload Pic</Form.Label>
                    <Form.Control 
                        onChange={(e) => setProfilepic(e.target.value)}
                        value={profilepic} 
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col></Col>
                <Col>
                <Button 
                    type="submit" 
                    variant="primary"
                    onClick={handleClose}
                >
                    ADD
                </Button>
                </Col>
                
            </Row>
        </Form>
    </div>
  )
}

export default AppForm