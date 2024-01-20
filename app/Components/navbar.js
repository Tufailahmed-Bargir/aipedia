import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Signup from "@/app/Components/signUp";

function NavScrollExample() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">CreativePedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Navbar.Brand href="#action1" className="navbar">
              Browse AI tools
            </Navbar.Brand>
            <Navbar.Brand href="#action2" className="navbar">
              Deals
            </Navbar.Brand>
         <Navbar.Brand  className="navbar">   <Link href="/Pricing">
              Submit a tool   </Link>
            </Navbar.Brand>
         
            <Navbar.Brand href="#action2" className="navbar">
              Advertise{" "}
            </Navbar.Brand>
            <Navbar.Brand href="#action2" className="navbar">
              Resources
            </Navbar.Brand>
          </Nav>

          <Link href="/Login">
            <Button variant="primary" className="mx-2">
              Login
            </Button>
          </Link>

          <Link href="/Signup">
            <Button variant="success">sign up</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
