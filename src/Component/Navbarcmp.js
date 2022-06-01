import React from 'react'
import { Navbar,Container,FormControl, Dropdown,Badge} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbarcmp() {
  return (
    <div>  
        <Navbar variant='dark' expand="lg" style={{backgroundColor:"black"}}>
  <Container >
    <Navbar.Brand> <Link to="/" style={{textDecoration:"none",color:"inherit"}}>Shopping Cart </Link></Navbar.Brand>
    
     <Navbar.Text className="search">
        <FormControl
          type="search"
          placeholder="Search"
          className="m-auto"
          aria-label="Search"
          style={{width:350}}
        />
      </Navbar.Text>
      <Dropdown alignRight >
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge></Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:300}}>
              <span style={{padding:10}}>Cart is empty</span>
            </Dropdown.Menu>
            </Dropdown>
   
  </Container>
</Navbar>
</div>
    
  )
}

export default Navbarcmp