// Importation des éléments
import React, {useState} from 'react'; 
import {useParams} from 'react-router-dom';
import arrowLeft from '../../assets/arrow-left.png'; 
import arrowRight from '../../assets/arrow-right.png';  
import info from '../../JSON/info.json'; 

// Fonction pour le Carrousel
export default function Carrousel(){ 
    // UseState
    const [stateIn, stateOff] = useState(0);
    // UseParams
    const {id} = useParams();
    // Récupération de l'image et de l'état
    const {pictures} = info.find((rec) => rec.id === id);
    // Slide/changement de l'état 
    const slideToRight = () =>{
        stateOff(stateIn === pictures.length -1 ? 0 : stateIn +1);
    }
    // Si le total est à -1 on passe a la 1ère image sinon à la suivante
    const slideToLeft = () =>{
        stateOff(stateIn === 0 ? pictures.length -1 : stateIn -1);
    }
    return(
        // Intégration HTML
        <section className='carrousel'>
            {/* Affichage des images en fonction du nombres d'images  */}
            {pictures.length > 1 &&(
                <img className='arrowLeft' src={arrowLeft} alt='flèche gauche' onClick={slideToLeft}/>
            )}
            {pictures.length > 1 &&(
                <img className='arrowRight' src={arrowRight} alt='flèche droite' onClick={slideToRight}/>
            )}
            {pictures.map((picture, search) =>{
                return(
                    <div key={search}>
                        {search === stateIn &&(
                            <img className='slide_pic' src={picture} alt={pictures.description}/>
                        )}
                        {search === stateIn &&(
                            <span className='slide_side'>
                                {stateIn +1}/{pictures.length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}