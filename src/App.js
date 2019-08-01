import React from 'react';
import './App.scss';
import {Landing} from './Views/Landing/Landing'
import {Projects} from './Views/Projects/Projects'

function App() {
  return (
    <div className="content">
      <Landing/>
      <Projects/>
    </div>
  )
}

export default App;
