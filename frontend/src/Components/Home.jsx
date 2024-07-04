import React,{useEffect} from 'react'
import glaze from '../images/glaze.png'
import glazenail from '../images/glazenail.png'
import nail1 from '../images/nail1.jpg'
import nail2 from '../images/nail2.jpg'
import nail8 from '../images/nail8.jpg'
import nail5 from '../images/nail5.jpg'
import nail3 from '../images/nail3.jpg'
import nail7 from '../images/nail7.jpg'
import Navigation from './Navigation'
import Footer from './Footer'

const Home = () => {

  useEffect(() => {
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
      const images = container.querySelectorAll('.nails');
      let currentIndex = 0;

      function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }

      const interval = setInterval(changeImage, 3000);
      return () => clearInterval(interval); // Cleanup interval on component unmount
    });
  }, []);

  return (
    <>
    <div className='bodycontainer1'>
        <Navigation/>
    </div>

    <div className='homeimg'>
      <br></br>
    <div className='bodycontainer2'>
      {/* <div className='circlegrid1 image-container'>
      <img className="nails active"src={nail1} width='240' length='240'  alt="logo"/>
      <img className="nails"src={nail8} width='270' length='270'  alt="logo"/>
      <img className="nails"src={nail5} width='240' length='240'  alt="logo"/>
      </div> */}
      <div className='circlegrid2'>
        <p>Welcome</p>
        <img className="glazelogo"src={glazenail}alt="logo"/>
      </div>
      {/* <div className='circlegrid3 image-container'>
      <img className="nails"src={nail2} width='240' length='240'  alt="logo"/>
      <img className="nails"src={nail3} width='240' length='240'  alt="logo"/>
      <img className="nails"src={nail7} width='240' length='240'  alt="logo"/>
      </div> */}
        
    </div>

   <div className='book'>
      <a href='/Appointment'><button>Book Appointment</button></a>
   </div>
        <br></br>
   </div>
   <br></br> <br></br>
    <Footer/>
    </>
  )
}

export default Home