import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { setAuth } from '../../redux/slices/auth.slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const Login = () => {


  
  const darkMode = useSelector((state) => state.dark);



  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
 

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorAuth, setErrorAuth] = useState(false);

  const handleSubmit = (e) =>{
    console.log("onsubmit work")
    e.preventDefault()
    console.log(email, password);
    axios.get('https://promises-cb263f.appdrag.site/api/checkUsers', {
  params: {
    "email" : email,
    "password" : password,
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
 // console.log(response.data.Table[0].token);
  if (response.data.Table.length === 0){
  console.log("auth error");
  setErrorAuth(true)
}else{
  setErrorAuth(false)
  console.log("auth reussi");
  localStorage.setItem("tokenBlog",response.data.Table[0].token)
  dispatch(setAuth(response.data.Table[0]))
  navigate("/")
}
});
  };

  const handleEmail=(e) => {
   // console.log(e.target.value);
    setEmail(e.target.value)
  }

  const handlePassword=(e) => {
   // console.log(e.target.value);
    setPassword(e.target.value)
  }

  return (
    <div className={`${darkMode ? 'bg-dark ' : 'bg-secondary'}container `}>
      <div className='row justify-content-center align-items-center' style={{height: "80vh"}}>

      <div className={`${darkMode ? 'bg-dark border border-warning col-6 rounded shadow mx-auto' : ' bg-light '}col-6 rounded shadow mx-auto`}>

        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="">Email</label>
            <input type="email" className='text-black' value={email} onChange={handleEmail} required/>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" className='text-black' value={password} onChange={handlePassword} required/>
          </div>
            <button type="submit" className={`${darkMode ? 'bg-dark border border-warning ' : ''}`}  >Se connecter</button>
         
        </form>
        { errorAuth &&
        <h1 className="text-danger">Mauvais User ou mot de passe</h1>
        }
      </div>
     
      </div>
     
    </div>
  )
}

export default Login
