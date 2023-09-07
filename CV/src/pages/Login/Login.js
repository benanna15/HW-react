
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { setAuth } from '../../redux/slices/auth.slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import "./Login.css";
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva';
import intro from '../../assets/intro.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Cv/Footer/Footer';

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
    e.preventDefault();
   
    
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
console.log("onsubmit work")
  if (response.data.Table.length === 0){
  console.log("auth error");
  setErrorAuth(true)
  toast.error("Incorrect email or password");
}else{
  setErrorAuth(false)
  console.log("auth reussi");
  localStorage.setItem("tokenBlog",response.data.Table[0].token)
  dispatch(setAuth(response.data.Table[0]))
  
  navigate("/")
  toast.success("Message envoyé avec succès !");
  
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
    <>
    <div className='background-image bckgd'>
        <img src={intro} alt='Accueil' className='img-fluid' />
      </div>
      <NavbarOffCanva />

    <div id="loginform" className={`${darkMode ? 'dark-login' : ''} container border-login`}>
  <h2 id="headerTitle" className={`${darkMode ? 'dark-font-login' : ''}`}>LOGIN</h2>
  <form onSubmit={handleSubmit}>
    <div>
      <div className="row">
        <label htmlFor="email" className='font-color' value={email}>Email</label>
        <input
          type="email"
          id="email"
          className="text-black"
          placeholder="Enter your username"
          value={email}
          onChange={handleEmail}
          required
        />
      </div>
      <div className="row">
        <label htmlFor="password" className='font-color' value={password}>Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="text-black"
          value={password}
          onChange={handlePassword}
          required
        />
      </div>
      <div id="button" className={`row-b  ${darkMode ? '' : ''}`}>
        <button type="submit" className='row-button' onClick={handleSubmit}>Log in</button>
        <ToastContainer position="top-right" classname="" autoClose={3000} />
      </div>
    </div>
  </form>
  
 {/*  {errorAuth && (
    <h1 className="text-danger">Mauvais User ou mot de passe</h1>
  )} */}
</div>
<Footer/>
</>
 )
  }
export default Login
