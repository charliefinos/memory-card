import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

//[x] random rendering of cards
//[x] add count to the state
//[o] start the round and when it finish:
//      [o]display a modal
//      [o]reset state and count

function App() {
  return (
    <Router>
      <Header />
      <main className='py-2'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
