
import './App.css';
import Eachcountryinfo from './components/Eachcountryinfo/Eachcountryinfo';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/details/:name" element={<Eachcountryinfo />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
