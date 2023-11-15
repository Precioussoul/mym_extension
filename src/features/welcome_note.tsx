import React from "react"

const WelcomeNote = () => {
  return (
    <div className="w-full h-auto plasmo-p-4">
      <p className="plasmo-text-[1rem] plasmo-mb-4">
        Our extension works when you visit{" "}
        <a
          href="https://www.linkedin.com"
          className="cursor-pointer plasmo-underline"
          onClick={() => {
            chrome.tabs.create({
              url: "http://www.linkedin.com",
              active: false
            })
          }}>
          LinkedIn
        </a>{" "}
        from your browser.
      </p>
      <p className="plasmo-text-[0.9rem]">
        All you need to do is go on{" "}
        <a
          href="https://www.linkedin.com"
          className="cursor-pointer plasmo-underline"
          onClick={() => {
            chrome.tabs.create({
              url: "http://www.linkedin.com",
              active: false
            })
          }}>
          LinkedIn
        </a>{" "}
        and press our logo that appears at the top right of the page, just like
        on this screenshot
      </p>
    </div>
  )
}

export default WelcomeNote
