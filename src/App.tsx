import React from 'react';
import './App.css';
import Application from './components/Application/Application';
import Skills from './components/Skills/Skills';
import Counter from './components/Counter/Counter';
import AppProviders from './providers/app-providers';
import { MuiMode } from './components/Mui/Mui-Mode';

function App() {
  const skills = ['HTML', "CSS", "JAVASCRIPT", "REACT JS", 'NODE JS']
  return (
    <AppProviders>
      <div className="App">
        <MuiMode/>
        {/* <Application/> */}
        {/* <Skills skills={skills}/> */}
        {/* <Counter/> */}
      </div>
    </AppProviders>
  );
}

export default App;
