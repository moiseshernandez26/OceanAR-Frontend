import { TextField, Grid, Button } from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/state'

import { createNewAccount } from '../../services/auth.service'

import './styles.css'

const SignUpForm = () => {
  const { dispatch } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const navigate = useNavigate()

  const redirectLogIn = () => {
    navigate('/sign-in')
  }

  const onChangeEmail = ({ target: { value } }) => {
    setEmail(value)
  }

  const onChangePassword = ({ target: { value } }) => {
    setPassword(value)
  }

  const onChangeRepeatPassword = ({ target: { value } }) => {
    setRepeatPassword(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== repeatPassword) {
      console.log('Las contraseñas no coinciden')
    } else {
      const data = {
        email,
        password,
        name: 'armando'
      }
      try {
        await createNewAccount(data)
        redirectLogIn()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <form onSubmit={handleSubmit}>
        <div className='wrapper__logo__sign-up'>
          <img src='./logo_ar_1.png' alt='logo' className='logo__sign-up' />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Correo'
              variant='standard'
              type='Email'
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Contraseña'
              variant='standard'
              type='Password'
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Repetir Contraseña'
              variant='standard'
              type='Password'
              onChange={onChangeRepeatPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' type='submit'>
              Registrate
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p>¿Ya tienes cuenta?</p>
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '1em' }}>
            <Button variant='outlined' type='button' onClick={redirectLogIn}>
              Crear una cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default SignUpForm
