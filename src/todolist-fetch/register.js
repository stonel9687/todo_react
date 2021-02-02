import React from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {

    const { handlePass, handleName, handleChangeMail, handleChangePhone, handleChangePass, password, phone, mail, name, handleChangeRetryPass, repeatPass } = props
    return (
        <>
            <div className='w-50 container'>
                <div>
                    <div className='input-add'>
                        <div className=' container border border-secondary'>
                            <div className='text-align-center'>
                                <h4>Registro</h4>
                            </div>
                            <form className="form-horizontal" onSubmit={handlePass}>
                                <label for="inputPassword" className="col-lg-2 control-label">Nombre Usuario</label>
                                <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange={handleName} value={name} />
                                <label for="inputPassword" className="col-lg-2 control-label">Email</label>
                                <input required type="text" className="form-control " placeholder="Email" aria-label="Recipient's username" onChange={handleChangeMail} value={mail} />
                                <label for="inputPassword" className="col-lg-2 control-label">Telefono</label>
                                <input required type="text" className="form-control " placeholder="Password" aria-label="Recipient's username" onChange={handleChangePhone} value={phone} />
                                <label for="inputPassword" className="col-lg-2 control-label">Password</label>
                                <input required type="text" className="form-control " placeholder="New Password" aria-label="Recipient's username" onChange={handleChangePass} value={password} />
                                <label for="inputPassword" className="col-lg-2 control-label">Retry Password</label>
                                <input required type="text" className="form-control " placeholder="New Password" aria-label="Recipient's username" onChange={handleChangeRetryPass} value={repeatPass} />
                                <div className='m-top'>
                                    <button type='submit' className="btn btn-primary btn-lg btn-block">Completar Registro</button>
                                </div>
                                <Link to='/todolist-fetch/login'>
                                    <button type="submit" className="button-add-ut btn btn-success">Regresar a Login</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
