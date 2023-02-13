// Insertion des elements
import React, {useState} from 'react'; 
import {Link} from 'react-router-dom'; 
import info from '../../JSON/info.json'; 

// Fonction carte
export default function Card (){ 
    // Déclaration du hook state
    const [hookCarte] = useState(0);
    return(
        // Récupération dans le JSON et création HTML
        <section className='images'>
            {info.map((recup) => (
                <Link to={`/Logements/${recup.id}`} className='recupItem' key={recup.id}>
                    <img src={recup.pictures[hookCarte]} alt='images des locations' className='recupImg'/>
                    <h3 className='recupTitle'>{recup.title}</h3>
                </Link>
            ))}
        </section>
    );
}