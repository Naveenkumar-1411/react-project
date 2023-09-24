
import './App.scss';
// eslint-disable-next-line no-unused-vars
import {Routes,Route} from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './Containers/home';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skills from './Containers/skills';
// import Portfolio from './Containers/portfolio';
import Contact from './Containers/contact';
import Navbar from './Components/navBar';

import particles from './utils.js/particles';

function App() {
  const handleInit = async(main)=>{
        await loadFull(main)
  }
  return (
    <div className="App">

     <Particles id='particles'init={handleInit} />

      <Navbar />
      <div className='App__main-pag-content'> 
        <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        {/* <Route path='/portfolio' element={<Portfolio/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
     
      
    </div>
  );
}

export default App;
