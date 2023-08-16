import { NavLink } from "react-router-dom"
import "../../styles/Header.css"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="imgLogo" />
      <nav className="navHeader">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a_propos">A Propos</NavLink>
      </nav>
    </div>
  )
}
export default Header
