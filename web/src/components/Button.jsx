import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ onClick = () => {}, icon }) {
  return (
    <div
      onClick={onClick}
      className="bg-black rounded-full w-12 h-12 flex justify-center items-center mt-4 relative"
    >
      <div className="absolute inset-0 text-white flex items-center justify-center">
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>
    </div>
  )
}
