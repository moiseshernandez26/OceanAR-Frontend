
import { Button, Container, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import PreviewIcon from '@mui/icons-material/Preview'

import AppBarAR from '../../components/AppBarAR'
import { animals } from '../../mocks/animals'

import './styles.css'

const Description = () => {
  const params = useParams()

  const animalsFiltered = animals.find(animal => animal.idCity === +params.id)

  return (
    <>
      <AppBarAR component='description' />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src={animalsFiltered.urlImage}
            alt='item'
            style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '50vh' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container maxWidth='sm'>
            <div className='wrapper_btn'>
              <Button startIcon={<PreviewIcon />}>
                <a href='/axolotl.html' className='link-ar'>
                  Preview
                </a>
              </Button>
            </div>
            <Typography variant='h5' component='h2'>
              {animalsFiltered.name}
            </Typography>
            <Typography variant='body2' component='p'>
              {animalsFiltered.description}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default Description
