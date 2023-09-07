import React, {useState ,useEffect} from 'react'
import "./Footer.css"
import { useSelector } from 'react-redux';


const Footer = ({name}) => {
 /*  const [changeColor, setChangeColor] = useState("red");

  const StyleRed = {color: changeColor, fontSize: "40px"} */
  const darkMode = useSelector((state) => state.dark);
  



  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <footer className={`${darkMode ? 'bg-dark text-white' : ''}`}>
     {/*  <button onClick={()=> setChangeColor("blue")} >Change Couleur</button> */}
        
        <p className="footer no-auto-rtl " >© 2023 Design and development by {name}. </p>
        <p className="footer2 no-auto-rtl ">All rights reserved.</p>
    </footer>
  )
}

export default Footer