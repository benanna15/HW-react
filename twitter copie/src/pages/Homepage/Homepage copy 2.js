import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuth } from "../../redux/slices/auth.slice";
import { useDispatch } from "react-redux";
import bird from "../../assets/bird-image.png";
import { getToken } from "../../redux/slices/auth.slice";
import { v4 as uuidv4 } from "uuid";
import { clearAuth } from "../../redux/slices/auth.slice";
import profil from "../../assets/istockphoto-1300845620-612x612.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorAuth, setErrorAuth] = useState(false);
  const [messageSucces, setMessageSucces] = useState(false);
  const [messageError, setMessageError] = useState(false);
console.log(profil);
  const token = useSelector(getToken);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [stateForm, setStateForm] = useState({
    email: "",
    password: "",
    pseudo: "",
    image:""
  });
  useEffect(() => {
    // Vérifier si l'utilisateur a déjà un token
    if (token) {
      // Rediriger directement vers la page du tableau de bord
      navigate("/Dashboard");
    }
  }, [token, navigate]);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    axios
      .get("https://promises-cb263f.appdrag.site/api/checkUsers", {
        params: {
          email: email,
          password: password,
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      })
      .then(function (response) {
        if (response.data.Table.length === 0) {
          setErrorAuth(true);
          toast.error("Incorrect email or password");
        } else {
          setErrorAuth(false);
          localStorage.setItem("tokenBlog", response.data.Table[0].token);
          localStorage.setItem("id", response.data.Table[0].id);
          localStorage.setItem("image", response.data.Table[0].image);
          localStorage.setItem("pseudo", response.data.Table[0].pseudo);
          dispatch(setAuth(response.data.Table[0]));
          console.log(response.data.Table[0]);
          console.log(response.data.Table[0].id);
          navigate("/Dashboard", {
            state: {
              pseudo: response.data.Table[0].pseudo,
              id: response.data.Table[0].id,
              image: response.data.Table[0].image,
            },
          });
        }
      })
      .catch(function (error) {
        console.error("An error occurred during login:", error);
        // Ajoutez la déconnexion ici
        dispatch(clearAuth());
        // Affichez un message d'erreur approprié si nécessaire
      });
  };

  const handleRegister = () => {
    if (!stateForm.email || !stateForm.password || !stateForm.pseudo) {
      toast.error("Please fill in all fields");
      return;
    }
  
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(stateForm.email)) {
      toast.error("Invalid email format");
      return;
    }
  
    const token = uuidv4();
  
    // Use FileReader to read the contents of the selected image file
    const reader = new FileReader();
    const imageInput = document.getElementById("fileInput");
    const imageFile = imageInput.files[0];
  
    reader.onloadend = () => {
      const image = reader.result || profil;
      console.log(image);
  
      axios
        .post("https://promises-cb263f.appdrag.site/api/AddUsers", {
          params: {
            email: stateForm.email,
            password: stateForm.password,
            pseudo: stateForm.pseudo,
            token: token,
            image: image,
          },
        })
        .then(function (response) {
          if (response.data.affectedRows > 0) {
            setMessageSucces(true);
            setMessageError(false);
            setStateForm({ email: "", password: "", pseudo: "", image: "" });
            toast.success("Registration successful, you can now log in!");
          } else {
            setMessageError(true);
            setMessageSucces(false);
            toast.error("Error during registration.");
          }
        });
    };
  
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      reader.readAsDataURL(profil); // Use a default image if no file is selected
    }
  };
  
  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Bandeau en haut de la page */}
      <div className="h-1/6 flex bg-blue-400  items-center justify-between px-4  text-blue-400">
        <div
          className="text-6xl  ml-10 font-bold"
          style={{
            textShadow:
              "3px 3px 0 #ffffff, -3px 3px 0 #ffffff, -3px -3px 0 #ffffff, 3px -3px 0 #ffffff",
          }}
        >
          twitter
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="w-40 px-4 py-2 mr-5 rounded border border-gray-300 text-black mr-2 focus:outline-none focus:border-cyan-900"
            value={email || ""}
            onChange={handleEmail}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-40 px-4 py-2 mr-5 rounded border border-gray-300 text-black mr-2 focus:outline-none focus:border-cyan-900"
            value={password || ""}
            onChange={handlePassword}
            required
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 mr-16 rounded hover:bg-blue-700"
            type="submit"
            onClick={() => handleLogin()}
          >
            Log In
          </button>
          <ToastContainer position="top-right" classname="" autoClose={3000} />
        </div>
      </div>

      {/* Reste de la page divisée en deux */}
      <div className="flex-1 flex">
        {/* Colonne de gauche */}
        <div className="flex-1 flex flex-col items-center justify-center bg-blue-100">
          <img src={bird} alt="Bird" className="w-30 h-20 mb-4" />
          <p className="text-gray-700 text-center">
            What's happening right now.
          </p>
        </div>

        {/* Colonne de droite */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white">
          <input
            type="text"
            placeholder="Name*"
            className="w-64 px-4 py-2 rounded border border-gray-300 mb-2 focus:outline-none focus:border-cyan-900"
            value={stateForm.pseudo}
            onChange={(e) =>
              setStateForm((prevState) => ({
                ...prevState,
                pseudo: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Email*"
            className="w-64 px-4 py-2 rounded border border-gray-300 mb-2 focus:outline-none focus:border-cyan-900"
            value={stateForm.email}
            onChange={(e) =>
              setStateForm((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
          <input
            type="password"
            placeholder="Password*"
            className="w-64 px-4 py-2 rounded border border-gray-300 mb-2 focus:outline-none focus:border-cyan-900"
            value={stateForm.password || ""}
            onChange={(e) =>
              setStateForm((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
          
         <div className={`relative w-64 mb-4 mt-2 `}>
  <label htmlFor="fileInput" className="cursor-pointer text-gray-500  pr-4 pl-3  py-2 rounded border border-gray-300 focus:outline-none focus:border-cyan-900">
    <FontAwesomeIcon icon={faCloudUploadAlt} className={`  ${stateForm.image ? 'text-cyan-400 ' : 'text-gray-500 mr-3'} ` }  />
    {stateForm.image ? " Succesfull! Picture selected" : 'Upload a picture (optional)'} </label>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    onChange={(e) =>
      setStateForm((prevState) => ({
        ...prevState,
        image: e.target.value,
        
      }))
      
    }
    
    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
  />
  {console.log(stateForm.image)}
</div>

          <button
            className="w-64 bg-green-500 text-white py-2 rounded hover:bg-green-600"
            onClick={() => handleRegister()}
          >
            Sign Up
          </button>
          {messageSucces && (
            <ToastContainer
              position="top-right"
              className=""
              autoClose={3000}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
