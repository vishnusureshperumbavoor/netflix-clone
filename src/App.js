import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import {action, documentaries, originals, romance, comedy, horror} from './urls'
function App() { 
  return(
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title="netflix originals" url={originals} />
      <Rowpost title="action movies" url={action} isSmall />
      <Rowpost title="Documentaries" url={documentaries} isSmall />
      <Rowpost title="Comedy" url={comedy} isSmall />
      <Rowpost title="Horror" url={horror} isSmall />
      <Rowpost title="Romance" url={romance} isSmall />
    </div>
  )  
}

export default App;