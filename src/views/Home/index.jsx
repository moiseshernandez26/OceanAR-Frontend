import { Container, Grid } from '@mui/material'
import AppBarAR from '../../components/AppBarAR'
import CardAR from '../../components/CardAR'

import { cities } from '../../mocks/cities'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/state'
import { useContext } from 'react'

const Home = () => {
  const { dispatch } = useContext(AppContext)
  const navigateToPlace = (place) => {
    dispatch({
      type: 'set-url-map',
      urlMap: place.urlMap
    })
    navigate(`/animal/${place.id}`)
  }

  const navigate = useNavigate()

  return (
    <>
      <AppBarAR component='home' />
      <Container maxWidth='sm' style={{ paddingTop: '2em' }}>
        <Grid container spacing={2}>
          {cities.map((city, index) => (
            <CardAR key={index} place={city} handleClick={navigateToPlace} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
