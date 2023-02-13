
// Importation des éléments
import React from 'react'; 
import {useParams} from 'react-router-dom'; 
import info from '../../JSON/info.json'; 
import Rating from '../../components/Rating/Rating'; 
import Error from '../Error/Error'; 
import Collapse from '../../components/Collapse/Collapse'; 
import Carrousel from '../../components/Carrousel/Carrousel'; 

// Fonction de la page Logements
export default function Logements(){ 
    // Déclaration constantes de récupération
    const {id} = useParams();
    const findInfo = info.find((find) => find.id === id);
    const {title, location, tags, host, rating, description, equipments} = findInfo || {}; 
// Intégration HTML
    return ( findInfo ? 
        <main>
            <Carrousel />
            <div className='header_menu'>
                <div className='header_loc'>
                    <h1 className='loc_title'>{title}</h1>
                    <h2 className='location'>{location}</h2>
                    <div className='loc_tags'>
                        {/* Récupération des tags */}
                        {tags.map((tag) =>{
                            return(
                                <p key={`${tag}`} className='tag'>
                                    {tag}
                                </p>
                            );
                        })}
                    </div>
                </div>

                {/* Partie Hotes */}
                <div className='host_infos'>
                    <div className='host_profile'>
                        <p className='host_name'>{host.name}</p>
                        <img className='host_images' src={host.picture} alt='Hote {host.name}'/>
                    </div>
                    
                    <div className='host_rate'>
                        <Rating rate={rating} />
                    </div>
                </div>
            </div>
            
            <div className='body_page_info'>
                {/* Collapse descriptions et equipements */}
                <Collapse className='page_body' label='Description'content={<span className='page_bodycontent'>{`${description}`}</span>}/>
                <Collapse className='page_body' label='Équipements'content={
                    <ul className='page_bodycontent'>
                        {equipments.map((equipment) =>{
                            return <li key={`${equipment}`}>{equipment}</li>
                        })}
                    </ul>
                }/>
            </div>
        </main> : <Error />
    );
}