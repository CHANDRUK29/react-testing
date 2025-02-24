import React from 'react';
import './App.css';
import Application from './components/Application/Application';
import Skills from './components/Skills/Skills';

function App() {
  const skills = ['HTML', "CSS", "JAVASCRIPT", "REACT JS", 'NODE JS']
  return (
    <div className="App">
      {/* <Application/> */}
      <Skills skills={skills}/>
    </div>
  );
}

export default App;
