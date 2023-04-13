import React, {useState} from 'react'
import design from "../../assets/design.png"
import integration from "../../assets/integration.png"
import dev from "../../assets/dev.png"
import seo from "../../assets/seo.png"
import profil from "../../assets/profil.png"
import "./Main.css"

const CardPointFort = (props) => {
    return(
        <>
            <figure>
                    <h4>{props.title}</h4>
                    <img src={props.img} title="Catégorie : graphisme" alt={props.alt}/>
                    <figcaption>{props.figcaption}</figcaption>
                </figure>
        </>
    )
}

const List = () => {

    const [list, setList] = useState([{
        id:1,
        experience : "Experience 1"
    },{
        id:2,
        experience : "Experience 2"
    },{
        id:3,
        experience : "Experience 3"
    }])



  return (
    <ul>
    
        {
            list.map((exp) => (
              <li key={exp.id}>
                {exp.experience}
              </li>
            ))
        }
       

    </ul>
  )
}

const Main = ({HandleName}) => {
  return (
    <main>
    <div className="conteneur flex-main">
        <section id="presentation">
            <h2>Présentation</h2>

            <div className="profil-flex">
                <img src={profil} title="Photo de Prénom Nom" alt="Prénom Nom"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit?  Quam totam corporis doloremque doloribus fugit, voluptatibus nobis repellat libero incidunt temporibus provident earum dolorem. Numquam, libero et ratione deleniti ipsa veritatis.</p>
            </div>
            
            <div className="mise-en-avant">

                <CardPointFort title="Design" img={design} alt="Design" figcaption={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}/>

                <CardPointFort title="Front-end development" img={integration} alt="integration" figcaption={'Lorem ipsum dolor, sit amet consectetur adipisicing elm dolor, sit amet consectetur adipisicing elit.'}/>

                <CardPointFort title="Back-end development" img={dev} alt="dev" figcaption={'Lorem ipsum dolor, sit amet consectetur adipisicing elm dolor, sit amet consectetur adipisicing elit'}/>

                <CardPointFort title="SEO" img={seo} alt="seo" figcaption={'Lorem ipsum dolor, sit amet consectetur adipisicing elm dolor, sit amet consectetur adipisicing elit'}/>

            </div>
        </section>
        <aside>
            <div className="encart">
                <h3>Qui suis-je ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit, ipsa esse illo sunt iure voluptatum, labore laboriosam quas officiis non totam repellat natus odit corporis dicta tenetur consectetur sapiente.</p>
            </div>
            
            <div className="encart">
                <h3>Experience</h3>
                <List/>
            </div>

            <div className="encart">
                <h3>Contact</h3>
                <form action="traitement.js" method="post"> 
                    
                 <label htmlFor="prenom">Prenom</label> 
                    <input placeholder="Prénom" type="text" id="prenom" name="prenom"/>

                 <label htmlForr="nom">Nom</label> 
                    <input  placeholder="Nom" type="text" id="nom" name="nom"/>

                 <label htmlFor="email">E-mail</label> 
                    <input  placeholder="E-mail" type="email" id="email" name="email"/>

                 <label htmlFor="message">Message</label> 
                    <textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>
                    
                    <input type="submit" onClick={()=>HandleName("test")}/>
                </form> 
            </div>
        </aside>
    </div>
</main>
  )
}

export default Main
