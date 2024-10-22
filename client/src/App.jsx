import React, { useState } from 'react';
import { Search, Trophy, Users, Calendar, ChevronRight, Gamepad2, Flame } from 'lucide-react';
import freefireImg from './assets/freefire.png'
import pubgImg from './assets/pubg.jpg'
import squadImg from './assets/squad.png'

// Simple Card Component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const TournamentWebsite = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tournaments = [
    {
      id: 1,
      game: "Free Fire",
      name: "Pro League Season 5",
      prize: "$10,000",
      date: "November 15, 2024",
      participants: "48/100",
      image: freefireImg
    },
    {
      id: 2,
      game: "PUBG Mobile",
      name: "Battle Royale Cup",
      prize: "$5,000",
      date: "November 20, 2024",
      participants: "72/100",
      image: pubgImg
    },
    {
      id: 3,
      game: "Free Fire",
      name: "Squad Showdown",
      prize: "$3,000",
      date: "November 25, 2024",
      participants: "24/50",
      image: squadImg
    },
    {
      id: 4,
      game: "Free Fire",
      name: "Squad Showdown",
      prize: "$3,000",
      date: "November 25, 2024",
      participants: "24/50",
      image: squadImg
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 sticky shadow top-0 left-0 z-50 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-white" />
              <h1 className="text-2xl font-bold text-white">GameTourneys</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg">
                Sign In
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Join the Biggest Gaming Tournaments</h2>
            <p className="text-lg mb-8">Compete in Free Fire, PUBG Mobile, and more games. Win huge prizes!</p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium">
                Host Tournament
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium">
                Browse Tournaments
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container mx-auto px-4 -mt-8">
        <Card className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tournaments..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg shadow outline-none"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 z-10 rounded-lg ${activeTab === 'all' ? 'bg-fuchsia-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveTab('all')}
              >
                All Games
              </button>
              <button
                className={`px-4 py-2 z-10 rounded-lg ${activeTab === 'freefire' ? 'bg-fuchsia-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveTab('freefire')}
              >
                Free Fire
              </button>
              <button
                className={`px-4 py-2 z-10 rounded-lg ${activeTab === 'pubg' ? 'bg-fuchsia-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveTab('pubg')}
              >
                PUBG Mobile
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Tournament Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className='p-[10px]'>
              <img
                src={tournament.image}
                alt={tournament.name}
                className="w-full h-[350px] sm:h-auto md:h-[350px] rounded-lg lg:h-[300px] object-cover"
              />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  {tournament.game === "Free Fire" ? (
                    <Flame className="h-5 w-5 text-orange-500" />
                  ) : (
                    <Gamepad2 className="h-5 w-5 text-purple-500" />
                  )}
                  <span className="text-sm font-medium text-gray-600">{tournament.game}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tournament.name}</h3>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Trophy className="h-4 w-4 mr-2" />
                    <span>{tournament.prize}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{tournament.participants}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700">
                  <span>Join Tournament</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentWebsite;