import './App.css';
import {Routes,Route} from "react-router-dom";
import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Pages from './components/pages/Pages';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/pages" element={<Pages/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App
