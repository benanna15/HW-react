import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, SetError] = useState(false);
  const handleChangeEmail = (e) => {
      setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://crud-webschool-32dd1a.appdrag.site/api/test2?email=${email}&password=${password}`)
      .then(function(response){
        console.log(response.data.Table.length);
        if (response.data.Table.length === 0) {
          console.log("auth ko")
          SetError(true)
        }else{
          console.log("auth ok",response.data.Table[0].token)
          localStorage.setItem("tokenPorteFolio",response.data.Table[0].token)
          navigate("/")
        }
      })
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email"  id="email" name="email" value={email} onChange={handleChangeEmail} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} required />
        </div>
        <button type="submit">Se connecter</button>
        {error &&
          <h1 className='text-danger'>
            Erreur , mauvais password ou mot de passe 
          </h1>
        }
      </form>
    </div>
  );
};

export default Login;