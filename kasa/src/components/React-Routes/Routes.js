// Importation des éléments 
import React from 'react'; 
import {Routes, Route} from 'react-router-dom'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import Logements from '../../pages/Logements/Logements'; 
import Home from '../../pages/Home/Home'; 
import About from '../../pages/About/About';
import Error from '../../pages/Error/Error'; 


// Création des routes 
function Roads(){
    return(
        <div>
            <Header />
            <Routes>
                {/* Page Home */}
                <Route path='/' element={<Home />} />
                {/* Logements */}
                <Route path='/Logements/:id' element={<Logements />} />
                {/* About */}
                <Route path='/about' element={<About />} />
                {/* Error */}
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Roads;