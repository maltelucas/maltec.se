import React from 'react'

export default function HeaderItem({ imageUrl, title, description }) {
  return (
    <div className="flex flex-col md:flex-row p-8 bg-gray-100">
      {imageUrl && (
        <div className="w-full p-12 md:p-0 md:w-60 md:h-60">
          <img
            className="shadow-md object-cover w-full md:w-60 md:h-60"
            src={imageUrl}
          />
        </div>
      )}
      <div className="h-full flex flex-col justify-center ml-6">
        {title && title}
        {description && description}
      </div>
    </div>
  )
}
