import { TrendingUp } from 'lucide-react'
import React from 'react'

const StatBox = ({ icon: Icon, label, value, trend }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100">
    <div className="flex items-center justify-between mb-2">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      {trend && (
        <div className="flex items-center text-emerald-500 text-xs font-medium">
          <TrendingUp className="w-3 h-3 mr-1" />
          {trend}
        </div>
      )}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900">{value}</h3>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  </div>
  )
}

export default StatBox