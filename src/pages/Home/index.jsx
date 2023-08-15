import Banner from "../../components/Banner"
import Card from "../../components/Card"
import logementList from '../../datas/logements.json'
import '../../styles/Home.css'
import img from '../../assets/banner.jpg'

function Home() {
    return (
      <div>
        <Banner texte={"Chez vous, partout et ailleurs"}
            img={img}
        />
        <ul className="card-container">
          {logementList.map(({id,title,cover})=>(
            <Card
              key ={id}
              id={id}
              title={title}
              cover={cover}
            />
          ))}
        </ul>
      </div>
     
    )
  }
  
  export default Home