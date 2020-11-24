import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo from './../assets/images/mr-med-logo.png'

class Header extends Component {
    render() {
        return (
            <section id='header'>
                <Navbar className='container' bg="white" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            className="d-inline-block align-top logo-img"
                            alt="Mr Med Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Button className='upload-btn'>
                            Upload Prescription
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        );
    }
}

export default Header;