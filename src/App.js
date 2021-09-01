import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import {action, originals} from './urls'
function App() { 
  return(
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title="netflix originals" url={originals} />
      <Rowpost title="action movies" tovino url={action} />
    </div>
  )  
}

export default App;