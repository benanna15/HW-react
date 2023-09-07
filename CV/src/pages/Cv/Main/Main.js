import React, { useEffect, useState } from "react";
import profil from "../../../assets/profil.png";
import feok from "../../../assets/feok.png";
import beok from "../../../assets/beok.png";
import designok from "../../../assets/designok.png";
import autre from "../../../assets/autre.png";
import "./Main.css";
import i18n from "../../../i18n/config";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardPointFort = (props) => {
  // console.log("props depuis CardPointFort",props)
  return (
    <>
      <figure>
        <h4>{props.title}</h4>
        <img src={props.img} title="Catégorie : graphisme" alt="Design" className="img-card" />
        <figcaption>{props.figcaption}</figcaption>
      </figure>
    </>
  );
};

const Main = ({ HandleName }) => {
  const [language, setLanguage] = useState(i18n.language);
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mail , setMail]= useState("")
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
 
 /*  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || message === "") {
      alert("Veuillez remplir tous les champs.");
    } else {
      alert("Message envoyé !");
      setName("");
      setMessage("");
    }
  }; */
 /*  const [formData, setFormData] = useState({
    name: name,
    mail: mail,
    message: message,
  });
 */

const handleSubmit = (e) => {
  e.preventDefault();
  if (name === "" || !isValidEmail(mail) || message === "") {
    toast.error("Veuillez remplir tous les champs correctement.");
  }  else {
    

    axios
      .get("https://promises-cb263f.appdrag.site/api/mails",
      {
        params: {
          "name" : name,
          "mail" : mail,
          "message" :message
        }
      })
      .then(function (response) {
        console.log(response.data);
       // console.log(formData);
        console.log(name);
        if (response.data.affectedRows > 0){
          //  alert("Message envoyé !");
          toast.success("Message envoyé avec succès !");
            setName("");  
            setMail("");  
            setMessage(""); 
          }else{
            alert("Une erreur s'est produite lors de l'envoi du message.");
          } 
  })

  
}};



  useEffect(() => {
    const handleChangeLanguage = () => {
      console.log("la langue a changé ! Nouvelle langue :", i18n.language);
      setLanguage(i18n.language);
    };
    i18n.on("languageChanged", handleChangeLanguage);
    return () => {
      i18n.off("languageChanged", handleChangeLanguage);
    };
  }, [i18n]);
  console.log("HandleName depuis", HandleName);
  return (
    <main className={` container ${
      language === "he"
        ? "margin-he "
        : ""
    }`}>
      <div   className={` right-div   ${
                    language === "he"
                      ? "right-div download-he"
                      : language === 'en' ? ""
                      : " "
                  }`}>
        <button className=" cssbuttons-io-button ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
            ></path>
          </svg>
          <span>Download</span>
        </button>
      </div>
      <div className={` flex-main  ${
                    language === "he"
                      ? "div-he"
                      : language === 'en' ? ""
                      : " "
                  }`}>
        <section id="presentation">
          <div className={` bg-white shadow-lg rounded section-presentation presentation-div  ${
                    language === "he"
                      ? "presentation-he"
                      : language === 'en' ? ""
                      : " "
                  }`}>
            <h2 className="align-item-center">{t("cv.presentation")}</h2>

            {/* <img src={profil} title=" de Prénom Nom" alt="Prénom Nom" /> */}
            <div className="">
              <br />
              <p className="mb-0 p-1">{t("cv.qui1")}</p>
              <br />
              <p className="mb-0 p-1">{t("cv.qui2")}</p>
              <br />
              <p className="mb-0  p-1">{t("cv.qui3")}</p>
            </div>
          </div>
          <div></div>

          <h3 className={` encart-droite no-auto-rtl  ${
                    language === "he"
                      ? "exp-he"
                      : language === 'en' ? ""
                      : " "
                  }`}>{t("cv.competences")}</h3>
          <div className="mise-en-avant f-size no-auto-rtl">
            <CardPointFort
              title="Design"
              img={designok}
              alt={"Design"}
              figcaption={t("cv.design")}
            />
            <CardPointFort
              title="Front-end development"
              img={feok}
              alt={"Front-end development"}
              figcaption={t("cv.fe")}
              className="fe img-fluid"
            />
            <CardPointFort
              title="Back-end development"
              img={beok}
              alt={"Back-end development"}
              figcaption={t("cv.be")}
            />
            <CardPointFort
              title="Other"
              img={autre}
              alt={"Autre"}
              figcaption={t("cv.autre")}
            />
          </div>
          <div className={` experiences  ${
                    language === "he"
                      ? "exp-titre-he"
                      : language === 'en' ? ""
                      : " "
                  }`}>
            <h3 className="exp-titre">{t("cv.experience")}</h3>
            <ul class="pe-2 pt-3">
              <li>
                <br />
                <h6 className={` ${
                    language === "he"
                      ? "bi bi-caret-left-fill mb-2"
                      : " bi bi-caret-right-fill"
                  }`}>{t("cv.dev")} </h6>
                <p>
                  {t("cv.dev1")} <br /> {t("cv.dev2")}{" "}
                </p>
              </li>
              <br />
              <li>
                <h6 className={` ${
                    language === "he"
                      ? "bi bi-caret-left-fill"
                      : " bi bi-caret-right-fill"
                  }`}>{t("cv.mont")}</h6>
                <br />
                <p className="m-0"> </p>
                <p>{t("cv.mont1")}</p>
              </li>
              <br />
              <li>
                <h6 className={`pt-2 ${
                    language === "he"
                      ? "bi bi-caret-left-fill"
                      : " bi bi-caret-right-fill"
                  }`}>{t("cv.stm")}</h6>
                <br />
                <p className={`pb-1 ${
                    language === "he"
                      ? "ajout ":
                      language === 'en' ? "other"
                      : "pb-4"
                  }`}>{t("cv.stm1")}</p>
              </li>
            </ul>
          </div>
        </section>
        <aside className={` marge-aside main-aside ${
                    language === "he"
                      ? ""
                      : language === 'en' ? ""
                      : ""
                  }`}>
          <div className={` encart ${
                    language === "he"
                      ? "qsj-he"
                      : language === 'en' ? ""
                      : ""
                  }`}>
            <h3>{t("cv.qsj")}</h3>
            <p className=" mb-2 text-center bg-white">
              {t("cv.presentation1")}
            </p>
            <p className="mb-3 pb-1 text-center bg-white">
              {t("cv.presentation2")}
            </p>
          </div>
          <div className="">
            <h3 className="encart-droite-formation ">{t("cv.formation")}</h3>
            <ul className="heb-form tel-form">
              <li>
                <h6 className={` pt-4 mt-1  ${
                    language === "he"
                      ? "bi bi-caret-left-fill"
                      : " bi bi-caret-right-fill"
                  }`}>
                  {t("cv.wa")} 
                </h6>
                <p className="m-0">{t("cv.dw")}</p>
                <p className="mb-0">{t("cv.ta")}</p>
              </li>

              <li>
                <h6 className={` pt-4 mt-1  ${
                    language === "he"
                      ? "bi bi-caret-left-fill"
                      : " bi bi-caret-right-fill"
                  }`}>{t("cv.fa")}</h6>
                <p className="m-0">{t("cv.mv")}</p>
                <p className="mb-0">{t("cv.paris")}</p>
              </li>
              <li>
                <h6 className={` pt-4 mt-1  ${
                    language === "he"
                      ? "bi bi-caret-left-fill"
                      : " bi bi-caret-right-fill"
                  }`}>
                  {t("cv.formamod")}
                </h6>
                <p className="m-0">{t("cv.stmo")}</p>
                <p className="mb-0">{t("cv.paris")}</p>
              </li>
            </ul>
          </div>

          <div className={` encart contact no-auto-rtl ${
                    language === "he"
                      ? "contact-he"
                      : language === 'en' ? "contact-en"
                      : " "
                  }`}>
            <h3>Contact</h3>

            {/*  <label htmlFor="prenom">Prenom</label>
                            <input placeholder="Prénom" type="text" id="prenom" name="prenom" />

                            <label htmlFor="nom">Nom</label>
                            <input placeholder="Nom" type="text" id="nom" name="nom" />

                            <label htmlFor="email">E-mail</label>
                            <input placeholder="E-mail" type="email" id="email" name="email" />

                            <label htmlFor="message">Message</label>
                            <textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>

                            <input type="submit" onClick={()=>HandleName("test")} /> */}

<input
  required
  type="text"
  className="input no-auto-rtl"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  required
  type="email"
  className="input no-auto-rtl"
  placeholder="Email"
  value={mail}
  onChange={(e) => setMail(e.target.value)}
/>

<textarea
  required
  className="input textarea no-auto-rtl"
  placeholder="Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>

<button className={` contactButton ${
                    language === "he"
                      ? "contactButton-he"
                      : language === 'en' ? "contactButton-en"
                      : " "
                  }`} onClick={handleSubmit}>
  Contact
  <div className="iconButton auto-rtl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
    </svg>
  </div>
</button>
<ToastContainer position="top-right" autoClose={3000} />
          </div>

          {/*         <div className="encart ">
            <h1>Contact</h1>
            <div class="wave-group">
            <input required="" type="text" class="input" placeholder="Full Name "></input>
            <span class="bar"></span>
            </div>
            <div class="wave-group ">
            <textarea required="" type="text" class="input" placeholder="Message" style={{ paddingBottom: '30px' }}/>
            <span class="bar"></span>
            </div>
            <button class="contactButton"> Contact
  <div class="iconButton">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </div>
</button>
    </div> */}
        </aside>
      </div>
    </main>
  );
};

export default Main;

//  onClick={()=> {UpdateName("ou pas")}}
// style={{height: 150, padding: "50px 10px"}}
