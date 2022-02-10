import React, { useState } from 'react';
import Logo from '../assets/favicon.ico'
import Formulario from './Formulario';

const Header = () => {

  const [name, setName] = useState(null)
  const [input, setInput] = useState("")
  const [namef, setnamef] = useState()
  const [emailf, setemailf] = useState()
  const [telefonf, settelefonf] = useState()
  const [show, setShow] = useState(false)
  const [edadf, setedadf] = useState()

  //Creo el listado para el menu
  const list = [
    { id: "1", name: "Vivair" },
    { id: "2", name: "Avianca" },
    { id: "3", name: "American Airline" },
    { id: "4", name: "Viva Colombia" },
    { id: "5", name: "Latam" }
  ]

  const showModal = () => {
    if (show) {
      return <div className='formulario_modal'>
        <span className='aviso'>"Tu información fue enviada con éxito, estaremos en contacto
          contigo”,</span>
      </div>
    }
  }
  const handleClick = (e) => {
    setName(e.target.id)
  }

  //se crea un metodo para mostrar el listado de las empresas de forma dinámica
  const showlist = () => {
    let data =
      list &&
      list.map((e) => {
        return <li id={e.name} onClick={handleClick} key={e.id}  >{e.name}</li>;
      });

    return data;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Nombre:', input.name, 'Email:', input.email, 'Teléfono:', input.telefono, 'Edad:', input.edad)

    setInput(null)
    setnamef("")
    setemailf("")
    settelefonf("")
    setedadf("")
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 5000);

  };

  const handleChange = (e) => {
   
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })

  }

  return <div>
    <header className="header">
      <img className='logo-empresa' src={Logo} alt="Logo empresa" />
      <div key={list.id} className="contenedor">

        <div className='navegacion-principal'>
          {showlist()}
          <div className="sub"></div>
        </div>
        <div className='encabezado'>
          <p>Tecnologia de punta al alcance de tu mano</p>
          <h3>Integracion con Mercalibre, <br /> soporte Back end
            y Front end <br /> en Ambiente VTEX</h3>
          <button>Más información</button>
        </div>

      </div>

    </header>

    <div className='formulario'>
      <h3>Hola, bienvenido, sabemos que quieres viajar en un <span className='aerolinea'>{name}</span> , por favor
        diligencia el siguiente formulario:</h3>
      <Formulario
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        namef={namef}
        emailf={emailf}
        telefonf={telefonf}
        edadf={edadf}
      />

    </div>
    {showModal()}
  </div>;
};

export default Header;
