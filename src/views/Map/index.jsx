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
            src={state.urlMap}
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
