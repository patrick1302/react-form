import React from 'react';
import { Link} from 'react-router-dom';
import './style.css';
import ReactNotification from 'react-notifications-component';
import {useFormValidation} from './formValidation';
import validationRegister from './validationRegister';
import {initialStateRegister} from './initialState';

function Form() {
  const { handleSubmit, handleChange, error, values, isSubmitting} = useFormValidation(initialStateRegister, validationRegister);

      return (
          <div className='container'>
            <ReactNotification />
            <form onSubmit={handleSubmit}>

                <h1>Create Account</h1>
                
                <input type='text' name='firstname' onChange={handleChange} value={values.firstname} placeholder='Firstname' />
                {error.firstname && <p className='error-message'>{error.firstname}</p>}
                
                <input type='text' name='lastname' onChange={handleChange} value={values.lastname} placeholder='Lastname' />
                {error.lastname && <p className='error-message'>{error.lastname}</p>}
                
                <input type='email' name='email' onChange={handleChange} value={values.email} placeholder='E-mail'/>
                {error.email && <p className='error-message'>{error.email}</p>}
                
                <input name='username' onChange={handleChange} value={values.username} type='text' placeholder='User'/>
                {error.username && <p className='error-message'>{error.username}</p>}
                
                <input name='password' onChange={handleChange} value={values.password} type='password' placeholder='Password'/>
                {error.password && <p className='error-message'>{error.password}</p>}

                <button disabled={isSubmitting} type='submit'>Sign up</button>
                <Link to='/Login'><button type='button'>Sign in</button></Link>
                
            
            </form>
          </div>
      );
  } 


export default Form;
