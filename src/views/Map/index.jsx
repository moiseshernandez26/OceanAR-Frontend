import { Container } from '@mui/material'
import { useContext } from 'react'
import AppBarAR from '../../components/AppBarAR'
import { AppContext } from '../../context/state'

import './styles.css'
const Map = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <AppBarAR component='map' />
      <Container maxWidth='sm' style={{ paddingTop: '2em' }}>
        <div className='map'>
          <iframe
            className='map-iframe'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1652574989759!5m2!1ses-419!2smx'
            style={{ border: '0' }}
            allowfullscreen=''
            loding='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          />
        </div>
      </Container>
    </>
  )
}

export default Map
