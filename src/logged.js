import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

function Logged () {
  const [redirect, setRedirect] = useState(false);

  if(!redirect) {
    return (
      <div>
        <h1>Logado com sucesso!!</h1>
        <button onClick={() => setRedirect(true) }>Voltar</button>
      </div>
    )
  } else {
      return <Redirect to='/'/>
  }
}

export default Logged;