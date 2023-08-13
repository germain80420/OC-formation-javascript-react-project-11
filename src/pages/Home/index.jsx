import Banner from "../../components/Banner"
import Card from "../../components/Card"
import logementList from '../../datas/logements.json'
import '../../styles/Home.css'

function Home() {
    return (
      <div>
        <Banner/>
        <ul className="card-container">
          {logementList.map(({id,title,cover})=>(
            <Card
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