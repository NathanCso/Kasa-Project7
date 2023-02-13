// Importation des éléments
import React from 'react'; 
import Logo from '../../assets/foot-logo.png'; 

// Fonction Footer bas de page
export default function Footer(){ 
    // Intégration du HTML
    return(
        <footer>
            <div className='footer__logo'>
                <img src={Logo} alt="Logo du footer"></img>
            </div>
            <p className='footer_content'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}