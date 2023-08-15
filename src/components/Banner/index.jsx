import '../../styles/Banner.css'
function Banner({texte,img}){
    return (
        <div className="banner">
            <div className='img-banner'>
                <img src={img} alt="banniere"/>
            </div>
            <div className='innerBanner'>
           
            {
            texte.length>0&&<h2>{texte}</h2>
            }
            </div>
            
        </div>
        
    )
}
export default Banner