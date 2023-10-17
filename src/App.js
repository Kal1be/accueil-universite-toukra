
import { Routes,Route} from 'react-router-dom';
import Home from "./pages/Home"
import Admission from "./pages/Admission"
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div>
       <Navbar/> 
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/admission" element={<Admission/>}/>
    </Routes>
    </div>
  );
}

export default App;
