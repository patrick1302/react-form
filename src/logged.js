import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Logged = () => (
      <div className='container'>
        <h1>Logado com sucesso!</h1>
        <Link to='/'><button type='buttom'>Voltar</button></Link>
      </div>
)  


export default Logged;