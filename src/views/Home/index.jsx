import { Container, Grid } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AppBarAR from '../../components/AppBarAR'
import CardAR from '../../components/CardAR'
import Loading from '../../components/Loading'

import { AppContext } from '../../context/state'
import { getCities } from '../../services/city.service'

const Home = () => {
  const { dispatch } = useContext(AppContext)
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    requestCities()
  }, [])

  const requestCities = async () => {
    setIsLoading(true)
    const response = await getCities()
    setCities(response)
    setIsLoading(false)
  }

  const navigateToPlace = (place) => {
    dispatch({
      type: 'set-url-map',
      urlMap: place.urlMap
    })
    navigate(`/animal/${place.Id}`)
  }

  const navigate = useNavigate()
  console.log(cities)
  return (
    <>
      {isLoading && <Loading />}

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
