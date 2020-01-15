import {useState, useEffect} from 'react';
import notifications from './notification';
import {initialStateRegister} from './initialState';

export const useFormValidation = (inicialState, validate) => {
    const [values, setValues] = useState(inicialState);
    const [error, setError] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    
    useEffect(() => {
      if(isSubmitting){
        const noErrors = Object.keys(error).length === 0;
        if(noErrors){
        setSubmitting(false);
        } else {
            setSubmitting(false);
         }
      } 
    }, [error, isSubmitting])
    
    const handleChange = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
  
      })
    }

    const handleSubmit = e => {
      e.preventDefault();
      const validationErros = validate(values);
      setSubmitting(true);
      setError(validationErros);

      if(Object.keys(validationErros).length === 0){
        localStorage.setItem("name", values.username);
        localStorage.setItem("password", values.password);
        localStorage.setItem("firstname", values.firstname);
        localStorage.setItem("lastname", values.lastname);
        localStorage.setItem("email", values.email);
        notifications('Cadastro', 'Cadastrado com sucesso','success');
        setValues(initialStateRegister);
      } else {
        notifications('Cadastro', 'Erro ao cadastrar', 'danger')
      }
    } 

    return {handleSubmit, handleChange, values, error, isSubmitting}
}

export const useLogin = inicialState => {
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
