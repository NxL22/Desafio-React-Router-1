import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Contacto  from '..Contacto';

export default () => {
    return (
        <Routes>
            <Route path='/' element= {<Home/>} />    
            <Route path='/contacto' element= {<Contacto/>} />
        </Routes>
    )
}