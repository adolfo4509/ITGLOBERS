
import React from 'react'
import InputType from '../Elements/Inputs'

const Formulario = ({ handleChange, handleSubmit, namef, emailf, telefonf, edadf }) => {

    return (
        <div className='formulario-form'>
            <h2>Diligencia el formulario</h2>
            <form action="" className='formulario-input' method="post" onSubmit={handleSubmit}>
                <InputType handleChange={handleChange} type="text" name="name" required={true} placeholder='Nombre completo:' value={namef} />
                <InputType handleChange={handleChange} type="email" name="email" required={true} placeholder='Email:' value={emailf} />
                <InputType handleChange={handleChange} type="tel" name="telefono" pattern='[0-9]+' required={true} placeholder=' Celular:' value={telefonf} />
                <InputType handleChange={handleChange} type="number" name="edad" min={18} max={100} required={true} placeholder='  Rango de edad:' value={edadf} />
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}


export default Formulario