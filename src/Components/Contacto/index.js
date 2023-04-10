import React from 'react';
import './contacto.css';

export default () => {
  return (
    <div className='contacto-class'>
      <h1>Contacta con nosotros</h1>
      <p>Si estás interesado en adoptar uno de nuestros gatitos o simplemente quieres saber más acerca de nuestra organización, por favor contáctanos a través del siguiente formulario:</p>

      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea className="form-control" id="mensaje" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}
