import {  Link} from "react-router";


const Register = () => {

  // const navigate = useNavigate();
  const handleSubmit = (e)=>{
        e.preventDefault();   
  }
  return (
    <main>
        <div className="form-container"></div>
        <form autoComplete='off' onSubmit={handleSubmit}>
             <h1>Register</h1>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="username" name="username" id="username" placeholder='Enter your username' />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Enter email address' />
            </div>
             <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter password' />
            </div>
            <button className='button primary-button'>Register</button>
        </form>

        <p>Already have an accout? <Link to={'/login'}>Login</Link> </p>
    </main>
  )
}

export default Register
