import React, { useState } from "react"

const Quick_connect = () => {
  return (
    <div
      onClick={() => {
        document.body.dispatchEvent(
          new Event("openOverlay", { bubbles: true, cancelable: false })
        )
      }}
      className="quick plasmo-flex plasmo-items-center plasmo-text-['#0B66C2'] plasmo-font-[500] plasmo-text-[1.5rem] plasmo-justify-center plasmo-py-2 hover:plasmo-border-[2px] plasmo-cursor-pointer plasmo-w-[150px] plasmo-border plasmo-border-['#0B66C2'] plasmo-rounded-3xl">
      Quick Connect
    </div>
  )
}

export default Quick_connect
