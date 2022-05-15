import { useNavigate, useParams } from 'react-router-dom'
import { Container, Grid, Box, Button } from '@mui/material'
import DirectionsIcon from '@mui/icons-material/Directions'

import AppBarAR from '../../components/AppBarAR'
import { useEffect, useState } from 'react'

import CardAR from '../../components/CardAR'
import { getAnimalsByIdCityService } from '../../services/animals.service'
import Loading from '../../components/Loading'

const Animal = () => {
  const [animals, setAnimals] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    requestAnimals()
  }, [])

  const requestAnimals = async () => {
    setIsLoading(true)
    try {
      const response = await getAnimalsByIdCityService(params.id)
      setIsLoading(false)
      setAnimals(response.data)
    } catch (e) {
      setIsLoading(false)
      console.error(e)
    }
  }

  const navigateToPlace = (place) => {
    navigate(`/description/${place.Id}`)
  }

  const handleClick = () => {
    navigate('/map')
  }

  return (
    <>
      {isLoading && <Loading />}
      <AppBarAR component='animals' />
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
          {animals.map((city, index) => (
            <CardAR key={index} place={city} handleClick={navigateToPlace} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Animal
