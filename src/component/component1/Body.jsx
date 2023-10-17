import React from 'react'
import img4 from "../../img/img2/book1.jpeg"
import img5 from "../../img/img2/userlaptop.jpeg"
import img6 from "../../img/img2/cap.png"
import img7 from "../../img/img2/course1school.png"

import "./body.css"

function Body() {
  return (
    <div className='container-fluid' id='container'>
      <div className="row row-cols-lg-2 row-cols-1">
        <div className="col-lg-9 col-12">
            <div className="row" id='row'>
                <div className="col-sm-6 col-12">
                  <img hre src={img4} alt="l'icon ne peut"/>
                  <h4>Centre d'enseignement à
distance</h4>
                  <p>Si vous n'êtes pas disponible a l'université physiquement.
                     Notre université vous donne la chance de gagner un diplôme
                      via une apprentissage à distance.

                   </p>
                </div>
                <div className="col-sm-5 col-12">
                <img src={img5} alt="l'icon ne peut"/>
                 <h4>Programme de premier
cycle</h4>
                 <p>L'université de Toukra produit plus de 20000 place chaque annèe pour les nouveaux étudiants.</p>
                </div>
                <div className="col-sm-6 col-12">
                <img src={img6} alt="l'icon ne peut"/>
                 <h4>LVT/DIplome</h4>
                 <p>Maintenant pour ceux qui peuvent être disponible à l'espace de 2 ou 3 mois par ans pour étudier pour un Diploma.</p>
                </div>
                <div className="col-sm-5 col-12">
                <img src={img7} alt="l'icon ne peut"/>
                 <h4>
La vie universitaire</h4>
                 <p>L'universite offre plus de 10000 logements pour ses etudiants et offre une meilleur centre de sante pour le bien de ces etudiants.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-12">

<form className='border shadow p-4'>
  <h3>Pour s'inscrire Suivez ses instructions</h3>
  <div class="mb-lg-2  mb-1">
    <label for="exampleInputEmail1" class="form-label">Nom et Prenom</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" id='input'/>
  </div>
  <div class="mb-lg-2  mb-1">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control"  id='input'/>
  </div>
  <div class="mb-lg-2  mb-1">
    <label for="exampleInputPassword1" class="form-label">Telephone</label>
    <input type="text" class="form-control"  id='input'/>
  </div>
  <div className="mb-lg-2  mb-1">
    <label htmlFor="" class="form-label">Selectionner un cours</label>
  <select class="form-select" aria-label="Default select example"  id='input'>
        <option selected>Cours</option>
         <option value="1">Histoire</option>
          <option value="2">Geographie</option>
          <option value="3">Arabe</option>
          <option value="4">Communication</option>
          <option value="5">Anthropologie</option>
          <option value="6">Philosophie</option>
          <option value="7">Sociologie</option>
          <option value="8">Sciences Juridique</option>
          <option value="9">Sciences Humaines</option>
          </select>
  </div>
  <div class="mb-lg-2 mb-1 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Accepter et continuer</label>
  </div>
  <button type="submit" class="btn btn-primary">Postuler</button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Body

