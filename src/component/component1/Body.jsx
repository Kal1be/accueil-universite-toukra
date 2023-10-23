import img4 from "../../img/img2/book1.jpeg"
import img5 from "../../img/img2/userlaptop.jpeg"
import img6 from "../../img/img2/cap.png"
import img7 from "../../img/img2/course1school.png"
import React,{useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import "./body.css"

function Body() {
  const [formState,setFormState] = useState({})
  const handlechange =(event)=>{
    setFormState({...formState,[event.target.name]:event.target.value})
  }
  
  const submithandler=(even)=>{
    even.preventDefault()
    const config ={
      SecureToken:"22c031b6-3021-42da-8ec8-739d5f9c047f",
       To:"universitetoukra@yopmail.com",
       From:formState.email,
       Subject:"Universite de Toukra",
       Body:`le nom d'utilisateur est :${formState.name} et son message est ${formState.textarea}`
     }
    if(window.Email){
      window.Email.send(config).then(()=>{
        alert("email send succesfully")
      })
    }
  }
  return (
    <div className='container-fluid' id='container'>
      <div className="row row-cols-lg-2 row-cols-1">
        <div className="col-lg-8 col-md-12 col-12">
            <div className="row" id='row'>
                <div className="col-sm-6 col-12">
                  <img hre src={img4} alt="l'icon ne peut"/>
                  <h4>Centre d'enseignement à
distance</h4>
                  <p className="tagline">Si vous n'êtes pas disponible a l'université physiquement.
                     Notre université vous donne la chance de gagner un diplôme
                      via une apprentissage à distance.

                   </p>
                </div>
                <div className="col-sm-5 col-12">
                <img src={img5} alt="l'icon ne peut"/>
                 <h4>Programme de premier
cycle</h4>
                 <p className="tagline">L'université de Toukra produit plus de 20000 place chaque annèe pour les nouveaux étudiants.</p>
                </div>
                <div className="col-sm-6 col-12">
                <img src={img6} alt="l'icon ne peut"/>
                 <h4>LVT/DIplome</h4>
                 <p className="tagline">Maintenant pour ceux qui peuvent être disponible à l'espace de 2 ou 3 mois par ans pour étudier pour un Diploma.</p>
                </div>
                <div className="col-sm-5 col-12">
                <img src={img7} alt="l'icon ne peut"/>
                 <h4>
La vie universitaire</h4>
                 <p className="tagline">L'universite offre plus de 10000 logements pour ses etudiants et offre une meilleur centre de sante pour le bien de ces etudiants.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-12">

<form className='border shadow p-4' onSubmit={submithandler}>
  <h3>Nous ecrire et avoir des informations a propos de nos differents programmes</h3>
  <div class="mb-lg-2  mb-1">
    <label for="exampleInputEmail1" class="form-label">Nom et Prenom</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" id='input' name="name" value={formState.name || ""}  onChange={handlechange}/>
  </div>
  <div class="mb-lg-2  mb-1">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control"  id='input' name="email" value={formState.email || ""} onChange={handlechange}/>
  </div>
  
 <div class="mb-lg-2  mb-1" id="textererea">
    <label for="exampleInputPassword1" class="form-label">Votre message ici</label>
  <textarea name="textarea" id="texterea" className="form-control" cols="30" rows="7" placeholder="entrer votre message ici ..." value={formState.textarea} onChange={handlechange}></textarea>
  </div>
  <button type="submit" class="btn  mt-2">Envoyer <FontAwesomeIcon icon={faPaperPlane} className="mx-2"/></button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Body

