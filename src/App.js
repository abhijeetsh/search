import './App.css';
import {data} from './data.js'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  const [search,setSearch] = useState('')
  return (
<div>
      <Container>
        <h1 className='text-center mt-4'>search for a name</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
           
          {data.filter((item)=>{
            return(
              item.first_name.toLowerCase() === ""?item:item.first_name.toLowerCase().includes(search)
            )
          }).map((item)=>{
            return(
              <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
            )
          })}

              
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
