import React from "react"
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import APropos from "./pages/APropos"
import FicheLogement from "./pages/FicheLogement"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Error from "./pages/Error"
const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>, //,
  // document.getElementById('root')
)
