
import { Button, Container, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import PreviewIcon from '@mui/icons-material/Preview'

import AppBarAR from '../../components/AppBarAR'
import Loading from '../../components/Loading'

import { animals } from '../../mocks/animals'

import './styles.css'
import { useEffect, useState } from 'react'
import { getAnimalByIdService } from '../../services/animals.service'

const Description = () => {
  const [animal, setAnimal] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const params = useParams()

  useEffect(() => {
    requestAnimal()
  }, [])

  const requestAnimal = async () => {
    setIsLoading(true)
    const response = await getAnimalByIdService(params.id)
    setAnimal(response.data)
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loading />}
      <AppBarAR component='description' />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src={animal?.UrlImage}
            alt='item'
            style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '50vh' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container maxWidth='sm'>
            <div className='wrapper_btn'>
              <Button startIcon={<PreviewIcon />}>
                <a href={`/OceanAR-Frontend/${animal?.FileName}/index.html`} className='link-ar'>
                  Preview
                </a>
              </Button>
            </div>
            <Typography variant='h5' component='h2' style={{ paddingTop: '1em' }}>
              {animal?.Name}
            </Typography>
            <Typography variant='body2' component='p' style={{ paddingTop: '1em' }}>
              {animal?.Description}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default Description
