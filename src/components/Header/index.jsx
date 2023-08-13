import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/logo.png'
function Header(){
    return(
        <div className='header'>
            <img src={logo} alt="logo" className='imgLogo'/>
        <nav className='navHeader'>
            
            <Link className='liNav' to="/">Acceuil</Link>
            <Link className='liNav' to="/a_propos">A Propos</Link>
        </nav>
        </div>
    )
}
export default Header