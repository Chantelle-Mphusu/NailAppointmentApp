import React, {useState} from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Pedicure from '../Services/Pedicure'
import Manicure from '../Services/Manicure'


const Appointment = () => {

  const [currentService, setCurrentService] = useState(0)

  const serviceRender =(services) => {
    switch(services){
      case 0:
        return <Pedicure/>
      case 1:
        return <Manicure/>
        default:
        break;
    }
  }

  const onButtonClick = (index) => {
      setCurrentService(index)
  }
  return (
   <>
   <div className='bodycontainer1'>
    <Navigation/>
    </div>
    <div className='services'>
        <button type='button' style={{backgroundColor:'pink'}} onClick={() => onButtonClick(0)} checked={currentService === 0}>Pedicure</button>
        <button type='button' style={{backgroundColor:'pink'}} onClick={() => onButtonClick(1)} checked={currentService === 2}>Manicure</button>
    </div>
    <div className='bookservice'>
        {serviceRender(currentService)}
    </div>

    <Footer/>

   </>
  )
}

export default Appointment