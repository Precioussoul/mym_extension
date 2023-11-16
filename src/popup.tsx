import { CountButton } from "~features/count-button"
import WelcomeNote from "~features/welcome_note"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-bg-white plasmo-h-50 plasmo-w-[400px] plasmo-text-neutral-600">
      {/* <CountButton /> */}
      <WelcomeNote />
    </div>
  )
}

export default IndexPopup
