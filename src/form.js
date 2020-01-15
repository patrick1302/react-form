import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './style.css';
import ReactNotification from 'react-notifications-component';
import useFormValidation from './formValidation';
import validationRegister from './validationRegister';
import initialStateRegister from './initialStateRegister';

function Form() {

  const { handleSubmit, handleChange, error, values, isSubmitting} = useFormValidation(initialStateRegister, validationRegister);
  const [redirect, setRedirect] = useState(false);  

  if(!redirect){
    return (
        <div className='container'>
          <ReactNotification> </ReactNotification>
          <form className='box' onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <label htmlFor='firstname'>First Name:</label>
              <input type='text' name='firstname' onChange={handleChange} value={values.firstname} />
              {error.firstname && <p className='error-message'>{error.firstname}</p>}
              <label htmlFor='lastname'>Last Name:</label>
              <input type='text' name='lastname' onChange={handleChange} value={values.lastname} />
              {error.lastname && <p className='error-message'>{error.lastname}</p>}
              <label htmlFor='email'>Email:</label>
              <input type='email' name='email' onChange={handleChange} value={values.email} />
              {error.email && <p className='error-message'>{error.email}</p>}
              <label htmlFor='username'>Username:</label>
              <input name='username' onChange={handleChange} value={values.username} type='text'/>
              {error.username && <p className='error-message'>{error.username}</p>}
              <label>Password:</label>
              <input name='password' onChange={handleChange} value={values.password} type='password'/>
              {error.password && <p className='error-message'>{error.password}</p>}

              <button disabled={isSubmitting} type='submit'>Register</button>
              <button onClick ={() => setRedirect(true) } type='link'>Login</button>

          </form>

        </div>
    );
  } else{
     return <Redirect to='/login' />
  }
}
export default Form;
