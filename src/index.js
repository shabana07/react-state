import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediCard from './components/MediaCard ';
import reportWebVitals from './reportWebVitals';
let obj = {
  img: './images/bag-1.jpg',
  title:'Hand bag',
  body: 'Cutwork design flap with rose gold base Magnetic fastener Attached shoulder strap Single compartment Zipped inside pocket Color: N. Blue  Dimensions: 10.5" W x 6" H x 2.5" D'
}
ReactDOM.render(
 
  <React.StrictMode>
    <App />
    <MediCard 
    img={obj.img} 
    title={obj.title} 
    body={obj.body} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
