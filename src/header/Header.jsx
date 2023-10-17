import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faInstagram,faWhatsapp,faTwitter, faConnectdevelop } from "@fortawesome/free-brands-svg-icons"
import {faSearch,faDollar, faPenToSquare, faHomeUser} from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <div>
        {/* ******************the header on top to the navbar and their contain********************** */}
        <div className="container-fluid" id='contain'>
          <div className="row">
          
           <div className="col-lg-5 col-7 col-md-8 mt-1" id="top">
            <FontAwesomeIcon icon={faFacebook} className="blue"/>
            <FontAwesomeIcon icon={faInstagram} className="blue"/>
            <FontAwesomeIcon icon={faTwitter} className="blue"/>
            <FontAwesomeIcon icon={faWhatsapp} className="blue"/>
            </div>
            <div className="col-lg-2 col-md-3 col-9 mt-1"  id="top">
               <span className="border py-1 px-lg-3 px-2 bg-white " id="text">Contactez-nous</span>
            </div>
          
           <div className="col-lg-2 col-md-6">
           <div class="input-group mb-3">
        <input type="search" class="form-control" placeholder="search..."  aria-describedby="basic-addon1"/>
        <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} className="text-primary"/></span>
      </div>
                </div>
            <div className="col-lg-3 col-md-5 col-12" id="tope">
            <span> <FontAwesomeIcon icon={faHomeUser}className="blue"/><span>Se connecter</span></span>
             <span> <FontAwesomeIcon icon={ faPenToSquare} className="blue"/><span>Postuler</span></span>
                </div>
           </div>
          </div>
        </div>
  
  )
}

export default Header
