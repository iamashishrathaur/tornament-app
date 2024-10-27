import { ChevronRight } from 'lucide-react'
import React from 'react'

const AchievementBox = ({ icon: Icon, title, description, type }) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-100">
    <div className={`p-2 rounded-lg ${
      type === 'gold' ? 'bg-amber-50' :
      type === 'silver' ? 'bg-gray-50' :
      'bg-blue-50'
    }`}>
      <Icon className={`w-5 h-5 ${
        type === 'gold' ? 'text-amber-600' :
        type === 'silver' ? 'text-gray-600' :
        'text-blue-600'
      }`} />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-sm text-gray-900 truncate">{title}</h3>
      <p className="text-xs text-gray-600 truncate">{description}</p>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
  </div>
  )
}

export default AchievementBox