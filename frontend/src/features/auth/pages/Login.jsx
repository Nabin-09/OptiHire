import '../auth.form.scss'
import {  Link } from 'react-router';

const Login = () => {
//   const navigate = useNavigate();
  const handleSubmit = (e)=>{
        e.preventDefault();   
  }
  return (
    <main>
        <div className="form-container"></div>
       

        <form autoComplete='off' onSubmit={handleSubmit}>
             <h1>Login</h1>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Enter email address' />
            </div>
             <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter password' />
            </div>
            <button className='button primary-button'>Login</button>
        </form>
        <p>Create new account  <Link to={'/register'}>Register</Link> </p>
    </main>
  )
}

export default Login
