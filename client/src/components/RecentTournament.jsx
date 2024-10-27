import { Calendar, GamepadIcon, Trophy, Users } from 'lucide-react'
import React from 'react'

const RecentTournament = ({ tournament }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
    <div className="flex">
      <div className="w-24 h-24 relative flex-shrink-0">
        <img
          src={tournament.image}
          alt={tournament.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-3 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 truncate">{tournament.name}</h3>
            <div className="flex items-center mt-1 text-gray-600">
              <GamepadIcon className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="text-xs truncate">{tournament.game}</span>
            </div>
          </div>
          {tournament.position && (
            <div className="flex items-center px-2 py-1 bg-amber-50 rounded-full flex-shrink-0">
              <Trophy className="w-3 h-3 text-amber-600 mr-1" />
              <span className="text-xs font-medium text-amber-600">
                #{tournament.position}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3 mt-2 text-xs text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {tournament.date}
          </div>
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            {tournament.participants}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecentTournament