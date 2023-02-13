// Importation des éléments 
import React from 'react'; 
import {Link} from 'react-router-dom'; 
import ErrorImg from '../../assets/error-404.png'; 

// Fonction de l'erreur 404
export default function Error(){ 
    // Integration HTML
    return(
        <main className='error'>
            <div>
                <img src={ErrorImg} alt='Erreur 404' className='error__img'/>
            </div>
            <p className='error__txt'>Oups! La page que vous demandez n'existe pas.</p>
            {/* Redirection page HOME */}
            <Link to={`/`} className="error__link">Retourner sur la page d'accueil</Link>
        </main>
    );
}