import React from "react"

const WelcomeNote = () => {
  return (
    <div className="w-full h-auto plasmo-p-4 plasmo-flex plasmo-flex-col plasmo-gap-6">
      <div className="plasmo-flex plasmo-items-center plasmo-justify-center">
        <div className="plasmo-w-[100px] plasmo-min-h-[100px] plasmo-rounded-lg">
          <img
            src="https://media.licdn.com/dms/image/C560BAQGGvA_6OjhaUg/company-logo_200_200/0/1630589753512/matt_young_media_logo?e=1707955200&v=beta&t=gONTlLmChp1d84PvBTPUJ6P59TYz8EJvIbIN5es1mIM"
            alt=""
            className="plasmo-w-full plasmo-h-full plasmo-object-contain"
          />
        </div>
      </div>
      <p className="plasmo-text-[1rem] ">
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
        and press our logo that appears at the center right of the page.
      </p>
    </div>
  )
}

export default WelcomeNote
