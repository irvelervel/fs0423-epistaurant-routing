// creiamo il componente Navbar a funzione

// questo è un import più conciso
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// questo è un import più efficiente
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// useLocation è un hook di react-router-dom che ci fornisce informazioni su quale rotta sia attualmente attiva

const CustomNavbar = (props) => {
  // console.log('le props sono', props)

  const location = useLocation()
  // location è un Location Object, un oggetto (il valore di ritorno di useLocation)
  console.log('OGGETTO LOCATION', location)
  // location.pathname ci torna la rotta attiva in questo momento! es. "/", "/admin", "/booking" etc.

  const navigate = useNavigate()
  // navigate è una funzione di navigazione
  // sarebbe come fare window.location.assign() in un progetto javascript (senza react-router)
  // ci porta istantaneamente nella nuova rotta, senza ricaricare il browser! :)

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Epistaurant - {props.additionalText}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* i Nav.Link di React-Bootstrap sono degli <a> */}
            {/* per non ottenere una <a> dentro una <a> sostituisco il Nav.Link con un div con le giuste classi bootstrap */}
            {/* il risultato sarà identico */}
            <Link
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className={`nav-link${
                location.pathname === '/booking' ? ' active' : ''
              }`}
              to="/booking"
            >
              Prenotazioni
            </Link>
            <Link
              className={
                location.pathname === '/about' ? 'nav-link active' : 'nav-link'
              }
              to="/about"
            >
              Come raggiungerci
            </Link>
            <Link
              className={
                location.pathname === '/admin' ? 'nav-link active' : 'nav-link'
              }
              to="/admin"
            >
              Admin
            </Link>
            <Button variant="info" onClick={() => navigate('/cliccami')}>
              CLICCAMI!
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
