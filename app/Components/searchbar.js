import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import data from '../data'
function Searchbar() {
    const [search , setsearch]=useState('')
  return (
    <>
      <div className="herobar">
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            id="searchbar"
            aria-label="Search"
            onChange={(e) => {
                
                setsearch(e.target.value)
              console.log(e.target.value);
            }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>


      {/* cards goes here */}
      <div className="container">
          <div className="row">
            {data.filter((item)=>{
                return search.toLowerCase()===''?item:
                item.toolName.toLowerCase().includes(search);
            }).map((item,index) => (
              <div className="col-md-3" key={index}>
                <div className="card" style={{ width: '18rem', height: '16rem' /* Adjust height as needed */ }}>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.toolName}</h5> {/* Assuming card object has a 'title' property */}
                    <p className="card-text">{item.description}</p> {/* Assuming card object has a 'details' property */}
                    <a href={item.url} target="_blank" className="btn btn-primary mt-auto">Use this tool</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default Searchbar;
