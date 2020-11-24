import React, { Component } from 'react';
import { Navbar,Form,FormControl,Button } from 'react-bootstrap';
import logo from './../assets/images/mr-med-logo.png';
import Mappin from './../assets/images/map-pin.png';
import location from './../assets/images/location-track.png';
import search from './../assets/images/search.png';

class Header extends Component {
  
    render() {
        return (
            <section id='header'>
                <Navbar className='container' bg="white" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            className="d-inline-block align-top logo-img"
                            alt="Mr Med Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className='col-md-8 basic-details'>
                            <Form className='col-md-4'>
                                <img
                                    src={Mappin}
                                    className="d-inline-block align-top mappin-icon"
                                    alt="Map pin"
                                />
                                <select className='city-select'>
                                    <option value=''>select your city</option>
                                    <option value='choco'>Choco</option>
                                    <option value='choco1'>Choco1</option>
                                    <option value='choco2'>Choco2</option>
                                    <option value='choco3'>Choco3</option>
                                    <option value='choco4'>Choco4</option>
                                </select>
                                <img
                                    src={location}
                                    className="d-inline-block align-top location-icon"
                                    alt="location"
                                />
                            </Form>
                            
                            <Form inline className='col-md-8'>
                                <FormControl type="text" placeholder="Search for medicines and health products" className="mr-sm-2 medicine-search-box" />
                                <img
                                    src={search}
                                    className="d-inline-block align-top search-icon"
                                    alt="location"
                                />
                            </Form>
                        </div>
                        <div className='col-md-4'>
                            <Button className='upload-btn'>
                                Upload Prescription
                            </Button>
                        </div>
                       
                    </Navbar.Collapse>
                </Navbar>
            </section>
        );
    }
}

export default Header;