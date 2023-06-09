import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Contacto from '../contacto';
import Gatitos from '../Gatitos';


export default () => {
    return (
        // Cada ruta se define con el componente < Route >, que toma una propiedad "path" que define el 
        // URL de la ruta y una propiedad "element" que define el componente que se renderiza cuando la ruta
        // coincide con el URL actual.
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/Gatitos' element={<Gatitos />} />
        </Routes>
    )
}

//Profesor intente que los botones me enviaran como si estuviera cliqueando
//lo del menu pero no lo logre.
//y tambien intente meter imagenes y no pude y eso que lo hice en la carpeta public
//donde tenia entendido que se ponian.
