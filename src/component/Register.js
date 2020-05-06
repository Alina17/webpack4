import React, { Component } from "react";
import {register} from "./Script";




const Register = () => {
  return (
 <div className="container">

        <script src = "./scripts/Script.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <label htmlFor="email"><b>Email</b></label>
        <input id="re" type="text" placeholder="Enter Email address" name="email" required />

        <label htmlFor="email"><b>Confirm Email</b></label>
        <input type="text" placeholder="Confirm Email address" id="confirm_email" required/>

        <label htmlFor="fname"><b>First Name</b></label>
        <input type="text" placeholder="Enter First name" name="fname" required />

        <label htmlFor="lname"><b>Last Name</b></label>
        <input type="text" placeholder="Enter Last name" name="lname" required /> 

        <label htmlFor="uname"><b>User Name</b></label>
        <input type="text" placeholder="Enter User name" name="uname" required />

        <label htmlFor="psw"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"><b>Password</b></label>
        <input id="rp" type="password" placeholder="Enter Password" name="psw" required /> 

        <label htmlFor="psw"><b>Confirm Password</b></label>
        <input id="rrp" type="password" placeholder="Confirm Password" id="confirm_password" required/>

        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"/>

        <button type="submit" onSubmit={register()}>Register <i className='fa fa-gamepad'></i></button>
        
        <label></label>
        <input type="checkbox" name="remember"/> Remember me

        <div id="message">
            <h3>Password must contain the following:</h3>
            <p id="letter" className="invalid">*A <b>lowercase</b> letter</p>
            <p id="capital" className="invalid">*A <b>capital (uppercase)</b> letter</p>
            <p id="number" className="invalid">*A <b>number</b></p>
            <p id="length" className="invalid">*Minimum <b>8 characters</b></p>
       </div>


 </div>    
  );

        
};
export default Register;

