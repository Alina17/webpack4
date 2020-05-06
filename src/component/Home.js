import React, { Component } from "react";
import { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink} from "react-router-dom";
import {userActions} from './user.actions'


// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

const Home = () => {

    // const users = useSelector(state => state.users);
    // const user = useSelector(state => state.authentication.user);
    

    // const [inputs, setInputs] = useState({
    //     username: '',
    //     password: ''
    // });

    // const [submitted, setSubmitted] = useState(false);
    // const { username, password } = inputs;
    // const loggingIn = useSelector(state => state.authentication.loggingIn);
    // const dispatch = useDispatch();

    // useEffect(() => { 
    //     dispatch(userActions.logout());
    // }, []);

    // function handleChange(e) {
    //     const { name, value } = e.target;
    //     setInputs(inputs => ({ ...inputs, [name]: value }));
    // }

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    // function handleSubmit(e) {
    //     e.preventDefault();

    //     setSubmitted(true);
    //     if (username && password) {
    //         dispatch(userActions.login(username, password));
    //     }
    // }

    return (
    
        
    <div className="container">
        
       

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />   
            <div className = "logbt">
                <button type="submit" onClick={handleClick}><Link to=""><i className='fa fa-gamepad'></i> Login</Link></button>
                <button><Link to="/register"><i className='fa fa-grav'></i >New user? Register here</Link></button>
            </div>
        <label></label>
        <input type="checkbox" name="remember"/> Remember me

        <div className="container">
        <span className="psw">Forgot <Link to="/reset">password?</Link></span>
        </div>

        

        <div className="col">
            <a href="#" className="fb btn">
            <i className="fa fa-facebook fa-fw"></i> Login with Facebook
            </a>
            <a href="#" className="twitter btn">
            <i className="fa fa-twitter fa-fw"></i> Login with Twitter
            </a>
            <a href="#" className="google btn">
            <i className="fa fa-google fa-fw"></i> Login with Google+
            </a>
         </div>



    </div>
  )
}


export default Home
