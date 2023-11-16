import React from "react"

type NotesProps = {
  onClose?: () => void
}
const Notes = ({ onClose }: NotesProps) => {
  return (
    <form className="plasmo-w-[90%] plasmo-mx-auto plasmo-flex plasmo-flex-col plasmo-gap-12">
      <div className="plasmo-flex plasmo-items-center plasmo-justify-center">
        <div className="plasmo-w-[100px] plasmo-h-[100px] plasmo-rounded-lg">
          <img
            src="https://media.licdn.com/dms/image/C560BAQGGvA_6OjhaUg/company-logo_200_200/0/1630589753512/matt_young_media_logo?e=1707955200&v=beta&t=gONTlLmChp1d84PvBTPUJ6P59TYz8EJvIbIN5es1mIM"
            alt=""
            className="plasmo-w-full plasmo-h-full plasmo-object-contain"
          />
        </div>
      </div>
      <h2 className="plasmo-font-[700] plasmo-text-[1.75rem] plasmo-font-sans plasmo-text-neutral-700">
        Want to write some note down from your linkedin's feed? We got you.
      </h2>
      <div className="">
        <label
          htmlFor="title"
          className="font-[700] plasmo-text-[1.75rem] plasmo-text-neutral-600  plasmo-mb-6">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="title"
          id="title"
          className="plasmo-w-full plasmo-h-[51px] plasmo-px-4 plasmo-mt-8 plasmo-rounded-md plasmo-font-[700] plasmo-text-[1.5rem] plasmo-bg-neutral-100 plasmo-outline-none "
        />
      </div>
      <div className="">
        <label
          htmlFor="description"
          className="font-[700] plasmo-text-[1.5rem]  plasmo-text-neutral-500">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Notes something down"
          className="plasmo-w-full plasmo-h-[50vh] plasmo-p-4 plasmo-rounded-md plasmo-mt-6 plasmo-font-[700] plasmo-text-[1.5rem] plasmo-bg-neutral-100 plasmo-outline-none "
        />
      </div>
      <div className="plasmo-flex plasmo-w-full plasmo-gap-8 plasmo-mb-6">
        <button
          onClick={onClose}
          type="button"
          className="plasmo-w-1/2 plasmo-border plasmo-border-blue-800  plasmo-rounded-lg plasmo-p-4 plasmo-text-[1.5rem]">
          Cancel
        </button>
        <button
          type="submit"
          className="plasmo-w-1/2 plasmo-bg-blue-800 plasmo-text-white plasmo-rounded-lg plasmo-font-[700] plasmo-text-[1.5rem]">
          Save note
        </button>
      </div>
    </form>
  )
}

export default Notes
