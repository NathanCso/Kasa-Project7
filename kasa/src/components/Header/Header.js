// Importation des éléments
import React from "react"; 
import Logo from "../../assets/head-logo.png"; 
import {Link} from "react-router-dom"; 

// Fonction pour les headers
export default function Header(){
    // Intégration HTML 
    return(
        <header>
            <nav>
                <img className="entete_kasa" src={Logo} alt="Logo header"></img>
                <ul>
                    <li>
                        <Link to="/" className="header_div">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="header_div">
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}