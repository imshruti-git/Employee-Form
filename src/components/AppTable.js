import React from 'react'
import { Table } from 'react-bootstrap'


const AppTable = ({records, profilepic, setProfilepic}) => {

  console.log(records);

  return (
    <div>
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
      <tr key={rec.id}>
        <td></td>
        <td>{rec.name}</td>
        <td>{rec.address}</td>
        <td>{rec.contact}</td>
        <td>
          
        </td>
      </tr>
    ))}
      
  </tbody>
</Table>
    </div>
  )
}

export default AppTable