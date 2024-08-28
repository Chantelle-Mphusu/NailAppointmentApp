import './App.css';
import { Home, Appointment,Bookings, About} from './Components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
<BrowserRouter>
<Routes>   
<Route path="/" element={<Home/>} />
<Route path="/Home" element={<Home/>} />
<Route path="/Appointment" element={<Appointment/>} />
<Route path ="/Bookings" element={<Bookings/>}/>
<Route path ="/About" element={<About/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
