
// Insertion des éléments 
import React, {useState} from 'react'; 
import Top from '../../assets/arrow-top.png'; 
import Bottom from '../../assets/arrow-bottom.png'; 

// Fonction Collapse et useState
export default function Collapse (props){ 
    // Création d'une condition ouvert/fermé pour la collapse
    const [collapseOpen, collapseClose] = useState(false);
    const opened =() =>{
        collapseClose(!collapseOpen);
    };
    return(
        // Intégration HTML
        <div className='action'>
            {/* Evenement au clic sur la Collapse */}
            <div className='actionClick' onClick={opened}>
                <div>
                    <p>{props.label}</p>
                </div>
                {collapseOpen ? (
                    <img className='action_arrow' src={Top} alt='fleche vers le haut'/>
                ) : (
                    <img className='action_arrow' src={Bottom} alt='fleche vers le bas'/>
                )}
            </div>
            {collapseOpen && 
            <div className='content'>
                <div>{props.content}</div>
            </div>}
        </div>
    );
}