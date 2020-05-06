import React from 'react'
import ReactDOM from 'react-dom';
import App from "./App";
//import  {combineReducers} from 'redux';
//import {render} from 'react-dom'
//import {Provider}  from 'react-redux'
//import  {store}  from './component/Store.js';
//import {users} from './reducer/UserReducer'
//import {authentication} from './reducer/AuthReducer';

//import {configureBackend} from './component/Script.js';


// const rootReducer = combineReducers({
//   authentication,
//   //registration,
//   users
//   //alert
// });
 //store={store}


// configureBackend();
// render(
//     <Provider>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );



//export default {rootReducer};

ReactDOM.render( <App/> , document.getElementById('root'));