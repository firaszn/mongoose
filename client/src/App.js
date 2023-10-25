import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import AddContact from './Pages/AddContact';
import EditContact from './Pages/EditContact';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
     
      <Route  path="/" element={<Home  />} />


      <Route  path="/*" element={<Error/>} />
      <Route  path="/contact" element={<Contacts/>} />
      <Route  path="/addcontact" element={<AddContact/>} />
      <Route path="/editcontact/:id" element={<EditContact />}/>

      </Routes>
    </div>
  );
}

export default App;
