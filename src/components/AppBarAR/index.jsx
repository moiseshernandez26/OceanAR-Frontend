import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

export default function AppBarAR ({ component }) {
  const navigate = useNavigate()
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' style={{ background: '#000' }}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => {
                navigate(-1)
              }}
            >
              {component === 'home' ? <MenuIcon /> : <ArrowBackIcon />}
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Ocean AR
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
