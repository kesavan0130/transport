import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
   
     <BrowserRouter>
     <Routes>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
      

  
     
  );
}

export default App;
