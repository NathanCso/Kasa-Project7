// Importation des éléments 
import React from 'react'; 
import Banner from '../../components/Banner/Banner'; 
import Card from '../../components/Card/Card'; 

// Exportation de la fonction 
export default function Home(){ 
    return(
        <main>
            <Banner origin="accueil"/>
            <Card />
        </main>
    );
}