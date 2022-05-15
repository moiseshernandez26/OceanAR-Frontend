import { TextField, Grid, Button } from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/state'
import { logIn } from '../../services/auth.service'
import Loading from '../../components/Loading'

import './styles.css'

const LogInForm = () => {
  const { dispatch } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const redirectRegister = () => {
    navigate('/sign-up')
  }

  const onChangeEmail = ({ target: { value } }) => {
    setEmail(value)
  }

  const onChangePassword = ({ target: { value } }) => {
    setPassword(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      email,
      password
    }
    try {
      const response = await logIn(data)
      if (response.data) {
        dispatch({
          type: 'set-user',
          user: response.data
        })
        dispatch({
          type: 'set-is-loggedin',
          isLoggedin: true
        })
      } else {
        alert('Usuario o contraseña incorrectos')
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className='log-in-container'>
        <form onSubmit={handleSubmit}>
          <div className='wrapper__logo'>
            <img src='./logo_ar_1.png' alt='logo' className='logo' />
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label='Correo' variant='standard' type='Email' onChange={onChangeEmail} />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Contraseña' variant='standard' type='Password' onChange={onChangePassword} />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit'>
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid item xs={12}>
              <p>¿No tienes una cuenta?</p>
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: '1em' }}>
              <Button variant='outlined' onClick={redirectRegister}>Crear una cuenta</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  )
}

export default LogInForm
