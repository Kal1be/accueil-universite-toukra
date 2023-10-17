import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "react-router-dom"
import img1 from "../img/img1/drapeau1.png"
import img2 from "../img/img1/im6.png";
import Header from '../header/Header';
function Navbar() {
  return (
    <div>
       <Header/>
     <nav className="navbar navbar-expand-lg px-lg-2 px-0 shadow border bg-white" id='navbar'>
  <div className="container-fluid">
  <Link className='navbar-brand' to="#"><img src={img2} alt="" className='image1'/>Universite de <strong >Toukra</strong><span className="divider"><img src={img1} alt="the problem is there" /></span></Link>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
      </li>
      <li class="nav-item">
          <Link class="nav-link" to="#">
            Recherches
          </Link>
        </li>
      <li className="nav-item ">
        <Link className="nav-link" to="#" >
          Facultes
        </Link>
      
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="#">Instituts&amp;Centres  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
      

        </li> 
     
        <li className="nav-item">
          <Link className="nav-link " to="#">Nouvelles  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Biblioteques  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le strong screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue a <strong className='text-primary'>Toukra</strong> !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="#">A Propos </Link><span>+</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="#">
            Facultes </Link><span>+</span>
         
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="#">Instituts&amp;Centres  </Link><span>+</span>
        </li> 
        <li className="nav-item">
          <Link className="nav-link " to="#">Nouvelles  </Link><span>+</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="#">Biblioteques </Link><span>+</span>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le strong screen */}

</nav>



{/* ****************fixes la position si le scroll est a 150px******************* */}



<nav className="navbar navbar-custom navbar-expand-lg px-lg-2 px-sm-0 shadow border " id="nav">
  <div className="container-fluid">
  <Link className='navbar-brand' to="#"><img src={img2} alt="" className='image1'/>Universite de <strong >Toukra</strong><span className="divider"><img src={img1} alt="the problem is there" /></span></Link>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Recherche</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="#" >
          Facultes
        </Link>
       
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="#">Instituts&amp;Centres </Link>
         
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="#">Nouvelles  </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le strong screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="#">A Propos  </Link><span>+</span>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " >
            Facultes 
      <span>+</span>     </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Instituts&amp;Centres  </Link><span>+</span>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="#">Nouvelles  </Link><span>+</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Biblioteques  </Link><span>+</span>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le strong screen */}

</nav>

    </div>
  )
}

export default Navbar
