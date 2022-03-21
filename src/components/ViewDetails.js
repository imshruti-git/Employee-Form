import React from 'react'
import { Row, Col} from 'react-bootstrap'

const ViewDetails = ({ view }) => {
  return (
    <>
        <Row>
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