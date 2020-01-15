import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {useLogin} from './formValidation';
import {initialStateLogin} from './initialState';
import './style.css';

const Login = () => {
    const {handleSubmit, handleChange, values} = useLogin(initialStateLogin);
    const [redirect, setRedirect] = useState(false);

    const authLogin = () => {
      const registeredUsername = localStorage.getItem("name");
      const registeredPassword = localStorage.getItem("password");
    
      values.login === registeredUsername && values.passwordLogin === registeredPassword 
      ? setRedirect(true)
      : console.log('Erro ao logar');
    
    }
  
  if(!redirect) {
      return (
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type='text' name='login' onChange={handleChange} value={values.login} placeholder='Login' />
            <input type='password'  name='passwordLogin' onChange={handleChange} value={values.passwordLogin} placeholder='Password' />
            <button onClick={authLogin}>Sign in</button>   
            <Link to='/'><button type='button'>Sign up</button></Link>    
          </form>
        </div>
      )
    }else {
      return <Redirect to='/logged'/>
    }
  }

export default Login;