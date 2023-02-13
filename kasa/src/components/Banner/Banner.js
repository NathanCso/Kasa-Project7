// Importation des element
import React from 'react'; 
import HomeBanner from '../../assets/cover-banner-home.png'; 
import AboutBanner from '../../assets/about-cover.png'; 


// Fonction Banner
export default function Banner({props}){ 
    // Redirection sur la page d'accueil grace au "/"
    const accueil = document.location.pathname === '/';
    // Condtition page choisie
    const coverBanner = accueil ? HomeBanner : AboutBanner; 
    // Description malvoyant
    const alt = accueil ? "Photo de paysage rocher et ocean" : "Photo de paysage montagne et ocean";
    
    // Insertion HTML
    return(
        <section className={'banner '+props}>
            <img className='coverBanner' src={coverBanner} alt={alt} />
            {accueil && <p className='banner__title'>Chez vous, partout et ailleurs</p>}
        </section>
    );
}