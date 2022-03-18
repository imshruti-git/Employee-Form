
import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'



//getting the values from localstorage//
const getDatafromLS=()=>{
    const data = localStorage.getItem('records');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    } 
}

const useAppForm = () => {

    //main array of objects
    const [records, setRecords] = useState(getDatafromLS());

    //console.log(records)

    //state for displaying selecting editing entry
    const [display, setDisplay] = useState([]);

    //input field states //
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [profilepic, setProfilepic] = useState(null);

    //form submit event//
    const handleSubmit=(e)=>{
        e.preventDefault();

        let record={
            id:new Date().getTime().toString(),
            name,
            contact,
            address,
            profilepic,
        }
        console.log(record);

        setRecords([...records, record]);
        setName('');
        setContact('');
        setAddress('');
        setProfilepic('');
    }

   //deleting record//
  
        const deleteEntry =(id)=>{
            const filteredvalue=records.filter((element)=>{
              return element.id !== id
            })
            setRecords(filteredvalue);
          }
    
  //shows the previous values for the selected entry to edit
          const updateShowEntry = (id) => {
            let newEditItem = records.find((element) =>{
                return element.id === id
            });
            console.log(newEditItem)
            setDisplay(newEditItem)
          }


    //editing records

    const updateEntry = (id, updatedEmployee) => {
        console.log(updatedEmployee)
        
        setRecords(records.map((employee) => {
            return employee.id === id ? updatedEmployee : employee;})
        );
    }


    //saving data to local storage//
    useEffect(()=>{
       localStorage.setItem('records', JSON.stringify(records));
    },[records])

    
  return {
      records,
      setRecords,
      deleteEntry,
      updateEntry,
      updateShowEntry,
      display,
      render: (
    <div>
       <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control 
                        type='text'
                        required
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
                        required
                        name='contact'
                        placeholder="012345"
                        onChange={(e) => setContact(e.target.value)}
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
                        onChange={(e) => {
                            console.log(e.target.files[0]);
                            setProfilepic(e.target.files[0])
                        }} 
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
                >
                    ADD
                </Button>
                </Col>
                
            </Row>
        </Form>
    </div>
  )}
}

export default useAppForm