import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import NotFound from './screens/NotFoundScreen'

//[x] random rendering of cards
//[x] add count to the state
//[o] start the round and when it finish:
//      [o]display a modal
//      [o]reset state and count

function App() {
  return (
    <div>
      <Header />
      <main className='py-2'>
        <Container>
          <Switch>
            <Route path='/' component={HomeScreen} exact={true} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
