import '../../styles/Card.css'

function Card({cover,title,id}){
    return(
        <li key={id} className="li-card-item" >
            <div className='card-item'>
            <img src={cover} alt={title}/>
                <span>{title}</span>
            </div>
                
        </li>
    )
}
export default Card