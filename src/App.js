import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [{
      img: "./images/bag-1.jpg",
      title: "Hand Bag",
      price: "Rs-2500"
    },
    {
      img: "./images/shoes-1.jpg",
      title: "Footwear",
      price: "Rs-1000"
    },
    {
      img: "./images/glasses-1.jpg",
      title: "Glasses",
      price: "Rs-700"
    },
    {
      img: "./images/scarve-1.jpg",
      title: "Scarf",
      price: "Rs-500"
    },
    {
      img: "./images/bag-1.jpg",
      title: "bag",
      price: "Rs-2500"
    },
    {
      img: "./images/jewell-1.jpg",
      title: "Jewellry",
      price: "Rs-2500"
    }
    ]
  }
 render() {
    return (
      <>
      <div className="main">
      {
          this.state.map((a) => {
            return (
              <>
                  <div className="card my-2" style={{ width: '10rem', height: '15rem' }}>
                    <img src={a.img} className="card-img-top" alt="..." style={{ width: '10rem', height: '10rem' }} />
                    <div className="card-body">
                      <h5 className="card-title">{a.title}</h5>
                      <p className="card-text">{a.price}</p>
                    </div>
                  </div>
              </>
            )
          })
        }
        </div> 
      </>
    )
  }
}
export default App;
