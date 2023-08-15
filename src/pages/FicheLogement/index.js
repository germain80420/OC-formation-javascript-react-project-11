import { useParams, Navigate } from "react-router-dom"
import logementList from "../../datas/logements.json"
import "../../styles/FicheLogement.css"
import Collapse from "../../components/Collaps"
import Slideshow from "../../components/Slideshow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(far, fas, fab)
function FicheLogement() {
  const { id } = useParams()
  const logement = logementList.find((logement) => logement.id === id)
  const range = [1, 2, 3, 4, 5]
  if (logement !== undefined) {
    return (
      <div className="container">
        <div>
          <Slideshow listPictures={logement.pictures}></Slideshow>
        </div>
        <div className="heading-container">
          <div className="heading">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <div>
              <ul className="tags-container">
                {logement.tags.map((tag) => {
                  return (
                    <li key={tag + "-" + logement.id} className="tag">
                      {tag}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="profil">
            <div className="user">
              <h3>{logement.host.name}</h3>
              <img src={logement.host.picture} alt="host" />
            </div>
            <div className="rating">
              {range.map((value) =>
                parseInt(logement.rating) > value ? (
                  <FontAwesomeIcon icon="fa-solid fa-star" key={value} />
                ) : (
                  <FontAwesomeIcon
                    className="star-inactive"
                    icon="fa-solid fa-star"
                    key={value}
                  />
                ),
              )}
            </div>
          </div>
        </div>
        <div className="details">
          <Collapse label="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse label="Equipement" className="equipe">
            <ul className="listEquipement">
              {logement.equipments.map((equipement) => {
                return (
                  <li
                    key={equipement + "-" + logement.id}
                    className="equipement"
                  >
                    {equipement}
                  </li>
                )
              })}
            </ul>
          </Collapse>
        </div>
      </div>
    )
  } else {
    return <Navigate to="/error" replace={true} />
  }
}
export default FicheLogement
