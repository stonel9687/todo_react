import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {

    const { mail, password, handleChangeMail, handleChangePass, handleSingin } = props
    return (
        <div className='div-login container'>
            <h4>Iniciar Sesion</h4>
            <form onSubmit={handleSingin}>
                <input required type="text" className="form-control" placeholder="Usuario" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChangeMail} value={mail} />
                <input required type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChangePass} value={password} />
                <button type="submit" className="button-add-ut btn btn-success">Login</button>
            </form>

            <Link to='/todolist-fetch/Register'>
                <button className="button-add-ut btn btn-success">Registrar</button>
            </Link>
        </div >
    )
}

export default Login