import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './users/signup'


function Header() {
    return(
        <div>
            <div class="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item"><Link to ="/signup" className="nav-link px-2 link-dark">Connexion</Link></li>
                    {/* <li className="nav-item"><Link to ="/addUSer" className="nav-link px-2 link-dark">ajouter un utilisateur</Link></li> */}
                    </ul>
                </header>
                </div>
        </div>
    )
    

}

export default Header;