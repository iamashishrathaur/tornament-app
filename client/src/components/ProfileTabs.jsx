import React from 'react'

const ProfileTabs = ({ active, label, onClick, icon: Icon }) => {
  return (
    <button
    onClick={onClick}
    className={`flex flex-col items-center py-3 px-4 flex-1 transition-colors relative border-b-2
      ${active 
        ? 'text-blue-600 border-blue-600' 
        : 'text-gray-600 border-transparent'
      }`}
  >
    <Icon className="w-5 h-5 mb-1" />
    <span className="text-xs font-medium">{label}</span>
  </button>
  )
}

export default ProfileTabs