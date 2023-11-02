import { Badge, Col, Container, Row } from 'react-bootstrap'
import paste from '../data/menu.json'
import { Link } from 'react-router-dom'

const Menu = () => (
  <Container>
    <Row className="justify-content-center">
      <Col md={6}>
        {paste.map((pasta) => (
          <div key={pasta.id} className="my-3">
            <Link to={'/detail/' + pasta.id}>
              <img src={pasta.image} alt={pasta.name} className="w-100" />
            </Link>
            <h5 className="text-center mt-1">
              <span>{pasta.name}</span>
              <Badge bg="warning" className="ms-2">
                {pasta.price}€
              </Badge>
            </h5>
          </div>
        ))}
      </Col>
    </Row>
  </Container>
)

export default Menu
