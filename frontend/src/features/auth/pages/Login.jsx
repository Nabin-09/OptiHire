import '../auth.form.scss'

const Login = () => {
  return (
    <main>
        <div className="form-container"></div>
       

        <form autoComplete='off'>
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
    </main>
  )
}

export default Login
