import { Link, useLocation } from "react-router-dom"
import "../../styles/Header.css"
import logo from "../../assets/logo.png"

function Header() {
  const location = useLocation()
  console.log(location.pathname)
  function getClassName(name) {
    if (location.pathname === name) {
      return "liNavActive"
    } else {
      return "liNav"
    }
  }

  return (
    <div className="header">
      <img src={logo} alt="logo" className="imgLogo" />
      <nav className="navHeader">
        <Link className={getClassName("/")} to="/">
          Acceuil
        </Link>

        <Link className={getClassName("/a_propos")} to="/a_propos">
          A Propos
        </Link>
      </nav>
    </div>
  )
}
export default Header
