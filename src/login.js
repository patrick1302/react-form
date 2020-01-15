import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const initialStateLogin = {
  login: '',
  passwordLogin: ''
}

const useLogin = (inicialState) => {
  const [values, setValues] = useState(inicialState);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value

    })
  }
  const handleSubmit = e => {
    e.preventDefault();
  }

  return {handleSubmit, handleChange, values}
}

function Login() {
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
        <form onSubmit={handleSubmit}>
                  <label htmlFor='login'>Login:</label>
                  <input type='text' name='login' onChange={handleChange} value={values.login} />
                  <label htmlFor='passwordLogin'>Password:</label>
                  <input type='password'  name='passwordLogin' onChange={handleChange} value={values.passwordLogin} />
                  <button onClick={authLogin}>Login</button>       
        </form>
      )
    }else {
      return <Redirect to='/logged'/>
    }
  }

export default Login;