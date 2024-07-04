import React from 'react'
import  Container  from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <>
    <div className='homecontainer'>
         <ul>
         <li className="leftlogo"> Glaze Nail Bar</li>

            <li> <a href="/Appointment">Appoint</a></li>

            <li><a href="/About"> Us</a> </li>

            <li><a className="active" href="./Home">Home</a> </li>
        </ul>

    </div>
    </>
  )
}

export default Navigation