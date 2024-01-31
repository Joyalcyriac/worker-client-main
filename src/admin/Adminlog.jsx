import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'


const Adminlog = () => {
var [inputs,setInputs]=useState({"username":'',"password":''})
const inputHandler = (event)=>{
const {name,value}=event.target
setInputs((inputs)=>({...inputs,[name]:value}))
console.log(inputs)
}
const navigate=useNavigate()
const checkData = async (event) => {
event.preventDefault();
try {
const response = await axios.post("http://localhost:3005/Loginsearch",{
username: inputs.username,
password: inputs.password,
})
if (response.data.success) {
alert('Login successful');
navigate('/user');
} 
else {
alert('Invalid email and Password. Please try again.');
console.log(response.data);
}
} catch (err) {
alert('Error occurred during login. Please try again.');
}
};
return (
    <div className="background">
        <div className='login-container'>
            <div className='blur-box'>
<br>
</br>
<br></br>
<TextField 
label="username"
name="username" value={inputs.username}
onChange={inputHandler} />
            <br></br>
            <br></br>
<TextField
name="password" id="outlined-password-input"
label="Password"
type="password"
autoComplete="current-password"
value={inputs.password}
                onChange={inputHandler} />
            <br></br>
<Button className='button' onClick={checkData} >Login</Button>
        </div>
        </div>
        </div>
)
}
export default Adminlog