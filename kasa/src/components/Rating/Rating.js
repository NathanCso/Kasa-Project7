// Importation des éléments 
import React from 'react'; 
import emptyStar from '../../assets/empty-star.png'; 
import fullStar from '../../assets/full-star.png'; 


// Fonction de notation
export default function Rating(star){ 
    // Selection en fonction du nombre d'étoiles
    const select= [1, 2, 3, 4, 5];
    // Intégration HTML
    return select.map((selectId, key) =>
        selectId <= star.rate ? (
            <img className='fullStar' src={fullStar} alt='étoile' key={key}/>
        ) : (
            <img className='emptyStar' src={emptyStar} alt='sans étoile' key={key}/>
        )
    );
}