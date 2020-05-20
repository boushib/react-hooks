import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import About from './views/about/About'
import Services from './views/services/Services'
import Contact from './views/contact/Contact'

// import Counter from './components/counter/Counter'
import Toggler from './components/toggler/Toggler'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Counter /> */}
      <Toggler />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
