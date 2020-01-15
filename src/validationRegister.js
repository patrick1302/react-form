const validationRegister = values =>  {
    let errors = {};
    if(!values.firstname){
      errors.firstname = 'First name is required'
    }
    if(!values.lastname){
      errors.lastname = 'Last name is required'
    }
    if(!values.email){
      errors.email = 'Email is required'
    }
    if(!values.username){
      errors.username = 'Username is required'
    } else if(values.password.length < 3){
      errors.username = 'Username must at be least 3 caracters'
    }
    if (!values.password){
      errors.password = 'Password is required'
    } else if (values.password.length < 4){
      errors.password = 'Password must at be least 5 caracters'
    }
    return errors;
  }

export default validationRegister;

