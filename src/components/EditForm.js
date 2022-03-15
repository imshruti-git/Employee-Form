import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const EditForm = () => {


  return (
    <div>
        <div>
       <Form>
            <Row>
                <Col>
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder="Name"
                    />
                </Col>
                <Col>
                <Form.Label>Contact Details</Form.Label>
                    <Form.Control 
                        type='number'
                        placeholder="012345"
                    />
                </Col>
            </Row>
                <br/>
            <Row>
                <Col>
                   
                     <Form.Label>Address</Form.Label>
                    <Form.Control 
                        placeholder="Address" 
                       
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
                    EDIT
                </Button>
                </Col>
                
            </Row>
        </Form>
    </div>
    </div>
  )
}

export default EditForm