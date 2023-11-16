import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import Notes from "~features/Notes"

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className="">
      {isOpen && (
        <div
          className="hide-scroll plasmo-py-4 plasmo-h-[100vh] plasmo-overflow-y-scroll plasmo-overflow-x-hidden plasmo-w-[400px] plasmo-top-0 plasmo-right-0 plasmo-fixed plasmo-bg-white  plasmo-shadow-lg"
          style={{
            padding: 12
          }}>
          <Notes onClose={() => setisOpen((prev) => !prev)} />
        </div>
      )}
      <div
        onClick={() => setisOpen((prev) => !prev)}
        className="plasmo-w-[85px] plasmo-h-[85px] plasmo-rounded-md plasmo-shadow-md plasmo-fixed plasmo-z-20 plasmo-text-white plasmo-top-[50%] plasmo-right-0">
        <img
          src="https://media.licdn.com/dms/image/C560BAQGGvA_6OjhaUg/company-logo_200_200/0/1630589753512/matt_young_media_logo?e=1707955200&v=beta&t=gONTlLmChp1d84PvBTPUJ6P59TYz8EJvIbIN5es1mIM"
          alt=""
          className="plasmo-w-full plasmo-h-full plasmo-object-contain"
        />
      </div>
    </div>
  )
}

export default PlasmoOverlay
