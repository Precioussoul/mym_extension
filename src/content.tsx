import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { CountButton } from "~features/count-button"
import Quick_connect from "~features/Quick_connect"

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector(".pvs-profile-actions")

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoInline = () => {
  return (
    <div className="plasmo-inline-flex">
      <Quick_connect />
    </div>
  )
}

export default PlasmoInline
