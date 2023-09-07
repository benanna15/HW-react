import React from 'react'
import profil from "../../assets/profil.png"
import "./Main.css"

const Main = () => {
  return (
    <main>
    <div className=" flex-main">
      <div className="haut-gauche" >
           <img className="img-haut" src={profil} title=" de Prénom Nom" alt="Prénom Nom" />
           </div> 
        <div className="haut-droit">
        <button class="Btnt">
   <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
   <span class="icon2"></span>
   <span class="tooltip">Download</span>
</button>
        </div>
        <section id="presentation">
            <h2>Présentation</h2>

            <div className="profil-flex">
                <img src={profil} title=" de Prénom Nom" alt="Prénom Nom" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit?  Quam totam corporis doloremque doloribus fugit, voluptatibus nobis repellat libero incidunt temporibus provident earum dolorem. Numquam, libero et ratione deleniti ipsa veritatis.</p>
            </div>
            
            <div className="mise-en-avant">

                <figure>
                    <h4>Design</h4>
                    <img src={profil} title="Catégorie : graphisme" alt="Design"/>
                    <figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

                <figure>
                    <h4>Front-end development</h4>
                    <img src={profil} title="Catégorie : graphisme" alt="Design"/>
                    <figcaption> dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

                <figure>
                    <h4>Back-end development</h4>
                    <img src={profil}  title="Catégorie : graphisme" alt="Design"/>
                    <figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elm dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

                <figure>
                    <h4>SEO</h4>
                    <img src={profil}  title="Catégorie : graphisme" alt="Design"/>
                    <figcaption>Lorem ipsum dolor, sit sum dolor, sit sum dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

            </div>
        </section>
        <aside>
            <div className="encart">
                <h3>Qui suis-je ?</h3>
                <p></p>
            </div>
            <div className="encart">
                <h3>Experience</h3>
                <ul>
                    <li>Experience 1</li>
                    <li>Experience 2</li>
                    <li>Experience 3</li>
                </ul>
            </div>
            <div className="encart">
                <h3>Contact</h3>
                <form action="traitement.js" method="post">
                    
                    <label for="prenom">Prenom</label> 
                    <input placeholder="Prénom" type="text" id="prenom" name="prenom" />

                     <label for="nom">Nom</label> 
                    <input  placeholder="Nom" type="text" id="nom" name="nom" />

                 <label for="email">E-mail</label> 
                    <input  placeholder="E-mail" type="email" id="email" name="email" />

                 <label for="message">Message</label> 
                    <textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>
                    
                    <input type="submit" />
                </form>
            </div>
        </aside>
    </div>
</main>
  )
}

export default Main