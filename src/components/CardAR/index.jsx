import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const CardAR = ({ place, handleClick, isClicked = true }) => {
  return (
    <Grid item xs={6} onClick={() => handleClick(place)}>
      <Card>
        {isClicked
          ? (
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image={place.urlImage ?? ''}
                alt={`${place.name} image`}
                loading='lazy'
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                  {place.name}
                </Typography>

              </CardContent>
            </CardActionArea>

            )
          : (
            <>
              <CardMedia
                component='img'
                height='140'
                image={place.src ?? ''}
                alt={`${place.name} image`}
                loading='lazy'
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                  {place.name}
                </Typography>

              </CardContent>
            </>
            )}
      </Card>
    </Grid>
  )
}

export default CardAR
