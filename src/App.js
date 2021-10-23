import React from 'react';
import MediCard from './components/MediaCard ';
import Gate from './components/Gate';
import './App.css';

const App = () => {
  let isOpens = true;
  return(
    <div>
      <Gate  a={isOpens} />
    </div>
  )
}
export default App;
