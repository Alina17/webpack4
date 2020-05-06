import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";


//import { foot } from "./component/x"
//import signin from './images/test.jpg'

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Register from "./component/Register";
import { Provider } from 'react-redux'
import { ReactReduxContext } from 'react-redux'
import "./css/Home.css";
import "./css/Navbar.css";

    


const axios = require('axios');
//  var homeImg = document.getElementById('background');
//  homeImg.src = signin;

const request = {
    url: 'http://localhost:8080/test',
    method: 'GET'
};

axios(request)
    .then(response => {
        console.log(response);
    });

class App extends Component {

    

  render() {
    return (
     //<Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
        </div>
      </BrowserRouter>
    //</Provider>
      
    );
  }
}

export default App;

// function tick() {
//     const element = ( <
//         div >
//         <
//         h2 > It is { new Date().toLocaleTimeString() }. < /h2>  <
//         /div > );

//         ReactDOM.render(element, document.getElementById('app'));
//     }

//     setInterval(tick, 1000);
