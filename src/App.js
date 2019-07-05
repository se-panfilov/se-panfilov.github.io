import React from 'react';
import './App.css';
import {Landing} from './landing/Landing'
import {Projects} from './projects/Projects'

function App() {
  return (
    <div className="content">
      <Landing/>
      <Projects/>
    </div>
  )
}

export default App;
