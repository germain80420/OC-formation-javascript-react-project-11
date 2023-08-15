import { useState } from "react"
import "../../styles/Slideshow.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(far, fas, fab)
function Slideshow({ listPictures }) {
  const [activeImage, setActiveImage] = useState(0)

  function nextImage() {
    if (activeImage < listPictures.length - 1) {
      setActiveImage(activeImage + 1)
    } else {
      setActiveImage(0)
    }
  }
  function previousImage() {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1)
    } else {
      setActiveImage(listPictures.length - 1)
    }
  }
  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {listPictures.length > 1 && (
          <div className="btn-previous" onClick={previousImage}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </div>
        )}
        <img className="slideshow-img" src={listPictures[activeImage]} alt="" />

        {listPictures.length > 1 && (
          <div className="btn-next" onClick={nextImage}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </div>
        )}
      </div>
      {listPictures.length > 1 && (
        <p>
          {activeImage + 1}/{listPictures.length}
        </p>
      )}
    </div>
  )
}
export default Slideshow
