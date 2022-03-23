import React from 'react'
import { Row, Col} from 'react-bootstrap'

const ViewDetails = ({ view }) => {
  return (
    <>
        <Row>
            <Col>
            <label>Profile Pic:</label>
            </Col>
            <Col>
            <label>Employee Name:</label>
            </Col>
            <Col>
            <label>Contact:</label>
            </Col>
            <Col>
            <label>Address:</label>
            </Col>
        </Row>
        <Row>
           <Col>
           <img alt="not found" width={"50px"} height={'50px'} src={view.profilepic} />
           </Col>
            <Col>
            <span>{view.name}</span>
            </Col>
            <Col>
            <span>{view.contact}</span>
            </Col>
            <Col>
            <span>{view.address}</span> 
            </Col>
        </Row>
    </>
  )
}

export default ViewDetails