import './App.css'
// importiamo il foglio CSS di bootstrap, UNA VOLTA SOLA in App.js
import 'bootstrap/dist/css/bootstrap.min.css'

// importiamo i componenti da noi scritti
// senza { } perchè tutti i miei componenti li esporto come "default"
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import ReservationList from './components/ReservationList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// che cos'è un componente React a funzione?
// È una funzione che ritorna del JSX

// ROUTING IN REACT
// Per innestare un sistema di routing in create-react-app abbiamo bisogno di installare il pacchetto relativo
// npm i react-router-dom
// e di importare in App.js 3 componenti: BrowserRouter, Routes e Route
// BrowserRouter permette agli altri di funzionare: inseriamolo come cornice di TUTTO il contenuto di App.js
// Routes serve a contenere le singole Route. Routes può venire inserito solamente dentro un BrowserRouter.
// Con Routes voi delimiterete le aree del vostro applicativo che devono CAMBIARE CONTENUTO a seconda dell'indirizzo.
// Routes deve delimitare solamente il contenuto DINAMICO, quello che deve cambiare a seconda dell'indirizzo (della rotta).
// Route è un componente che può esistere solamente dentro Routes. Un blocco Routes DEVE contenere solamente delle Route.

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        {/* voglio aggiungere un sottotitolo alla mia navbar, personalizzato! */}
        <CustomNavbar additionalText="I migliori piatti del web!" />
        {/* ora è il momento di inserire il contenuto principale della landing page! */}
        <div className="flex-grow-1">
          <Routes>
            {/* cosa deve contenere una Route? deve contenere COSA montare (che componente) e DOVE montarlo (la rotta) */}
            {/* il path "/" indica la homepage, es. localhost:3000, www.sitodistefano.com */}
            <Route element={<Home />} path="/" />
            <Route element={<ReservationForm />} path="/booking" />
            <Route element={<ReservationList />} path="/admin" />
          </Routes>
        </div>
        <footer className="text-center">
          EPICODE {new Date().getFullYear()}
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
