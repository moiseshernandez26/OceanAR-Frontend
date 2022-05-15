import { useNavigate, useParams } from 'react-router-dom'
import { Container, Grid, Box, Button } from '@mui/material'
import DirectionsIcon from '@mui/icons-material/Directions'

import AppBarAR from '../../components/AppBarAR'
import CardAR from '../../components/CardAR'
import { animals } from '../../mocks/animals'
const Animal = () => {
  const params = useParams()
  const navigate = useNavigate()

  const navigateToPlace = (place) => {
    navigate(`/description/${place.id}`)
  }

  const animalsFiltered = animals.filter(animal => animal.idCity === +params.id)

  const handleClick = () => {
    navigate('/map')
  }

  return (
    <>
      <AppBarAR component='home' />
      <Container maxWidth='sm' style={{ paddingTop: '2em' }}>
        <Grid container style={{ paddingBottom: '2em' }}>
          <Grid item xs={6}>
            <Box
              className='box-item'
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Button
                startIcon={<DirectionsIcon />}
                onClick={handleClick}
              >
                Maps
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {animalsFiltered.map((city, index) => (
            <CardAR key={index} place={city} handleClick={navigateToPlace} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Animal
