import {  Link} from "react-router";
import { useNavigate} from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

    const navigate = useNavigate();
    const [username , setUsername] = username("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("")

    const {loading , handleRegister} = useAuth();
  // const navigate = useNavigate();
  const handleSubmit = async (e)=>{
        e.preventDefault();   
        await handleRegister({username , email , password});
        navigate('/')
  }
  if(loading){
    return(<main><h1>Loading...</h1></main>)
  }

  return (
    <main>
        <div className="form-container"></div>
        <form autoComplete='off' onSubmit={handleSubmit}>
             <h1>Register</h1>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input 
                onChange={(e)=>{setUsername(e.target.value)}}
                type="username" name="username" id="username" placeholder='Enter your username' />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                onChange={(e)=>{setEmail(e.target.email)}}
                type="email" name="email" id="email" placeholder='Enter email address' />
            </div>
             <div className="input-group">
                <label htmlFor="password">Password</label>
                <input 
                onChange={(e)=>{setPassword(e.target.password)}}
                type="password" name="password" id="password" placeholder='Enter password' />
            </div>
            <button className='button primary-button'>Register</button>
        </form>

        <p>Already have an accout? <Link to={'/login'}>Login</Link> </p>
    </main>
  )
}

export default Register
