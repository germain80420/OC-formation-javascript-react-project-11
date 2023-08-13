import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import Header from './components/Header'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/a_propos" element={<APropos/>}/>
        <Route path="/fiche_logement" element={<FicheLogement/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)