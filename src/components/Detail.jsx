import { Container, Row, Col, Badge, Spinner } from 'react-bootstrap'
import paste from '../data/menu.json'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// questo componente Detail deve mostrare i dettagli di UNA pasta specifica
// quella su cui abbiamo cliccato dal componente Menu
// i link possibili saranno /detail/0, /detail/1, /detail/2, /detail/3, /detail/4
// in App.js, il valore dopo "/detail/" viene genericamente indicato con il nome "pastaId"
// questo componente Detail riceverà "pastaId" perchè questo componente viene montato su una rotta parametrica
// come recupero il valore del parametro pastaId, che mi dirà qual è la pasta corretta di cui mostrare i dettagli?
// lo recupero con un hook

const Detail = () => {
  // qui dentro si possono usare gli hooks
  const params = useParams()
  console.log('PARAMS', params)
  const navigate = useNavigate()

  console.log('la pasta da far vedere ha id', params.pastaId)

  const [pastaDetail, setPastaDetail] = useState(null)

  // simulo con uno useEffect un componentDidMount, in modo da poter controllare il valore di questo parametro
  // e validarlo, ed eventualmente recuperarne i dettagli online
  useEffect(() => {
    // params.pastaId dovrebbe essere un id valido per una pasta
    const pastaIndex = parseInt(params.pastaId)
    // pastaIndex può essere un numero ma può anche essere NaN
    if (
      !isNaN(pastaIndex) && // che sia una stringa rappresentante un numero
      parseInt(params.pastaId) >= 0 && // che sia un indice > 0
      !(parseInt(params.pastaId) >= paste.length) // l'indice non superi la lunghezza dell'array - 1
    ) {
      const pastaToShow = paste[pastaIndex]
      console.log('dettagli da visualizzare', pastaToShow)
      setTimeout(() => {
        setPastaDetail(pastaToShow)
      }, 800)
    } else {
      // il parametro params.pastaId non è una stringa rappresentante un numero
      navigate('/not-found') // porto l'utente su una schermata 404
    }
  }, [])

  return (
    <Container className="h-100">
      <Row className="justify-content-center h-100">
        <Col md={6} className="h-100">
          {pastaDetail === null && (
            <div className="text-center h-100 d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {pastaDetail && (
            <div key={pastaDetail.id} className="my-3">
              <img
                src={pastaDetail.image}
                alt={pastaDetail.name}
                className="w-100"
              />
              <h5 className="text-center mt-1">
                <span>{pastaDetail.name}</span>
                <Badge bg="warning" className="ms-2">
                  {pastaDetail.price}€
                </Badge>
              </h5>
              <div className="text-center">{pastaDetail.description}</div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Detail
