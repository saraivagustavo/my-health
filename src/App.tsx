import { Outlet, Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Container } from '@mui/material'

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}