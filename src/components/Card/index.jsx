import {Link} from 'react-router-dom';
import '../../styles/Card.css'

function Card({cover,title,id}){

    return(
        <li className="li-card-item">
        <Link  to={"/fiche_logement/"+id} >
                
                <div className='card-item'>
                <img src={cover} alt={title}/>
                    <span>{title}</span>
                </div>
               
       </Link>
        </li>
       
    )
}
export default Card