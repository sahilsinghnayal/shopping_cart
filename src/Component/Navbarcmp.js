import React from 'react'
import { Navbar,Container,FormControl, Dropdown,Badge,Button} from 'react-bootstrap';
import { FaShoppingCart} from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';

function Navbarcmp() {
 const {state:{cart},dispatch} =CartState();
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
      <Dropdown alignLeft>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge> {cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:270}}>
            {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
            
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
             
            </Dropdown.Menu>
            </Dropdown>
   
  </Container>
</Navbar>
</div>
    
  )
}

export default Navbarcmp