import { useState } from "react"
import "../../styles/Collapse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(far, fas, fab)
function Collapse(props) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    console.log("click")
    setOpen(!open)
  }
  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggle}>
        {props.label}
        {open ? (
          <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        ) : (
          <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        )}
      </div>
      {open && <div className="collapse-content">{props.children}</div>}
    </div>
  )
}
export default Collapse
