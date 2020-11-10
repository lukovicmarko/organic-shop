import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Navbar />

      <main>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/product/:id' component={ProductScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App;
