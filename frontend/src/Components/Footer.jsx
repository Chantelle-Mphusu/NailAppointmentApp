import React from 'react'
import glazelogo from '../images/glazelogo.png'

const Footer = () => {
  return (
    <>
    <div className='homecontainer1'>
         <ul>
         <li className="leftlogo"><img id="leftlogo"src={glazelogo} width="40" height="40" alt="LOGO" style={{borderRadius:'18px'}}/></li>

            <li><a href="/About"> Facebook</a> </li>

            <li><a className="active" href="./Home">Instagram</a> </li>
        </ul>

    </div>
    </>
  )
}

export default Footer