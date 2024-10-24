import React, { useState, useEffect } from 'react';
import { Search, Trophy, Users, Calendar, ChevronRight, Gamepad2, Flame, Filter } from 'lucide-react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTournaments, setFilteredTournaments] = useState([]);
  
  const tournaments = [
    {
      id: 1,
      game: "Free Fire",
      name: "Pro League Season 5",
      prize: "$10,000",
      date: "November 15, 2024",
      participants: "48/100",
      image: freefireImg,
      status: "Upcoming"
    },
    {
      id: 2,
      game: "PUBG Mobile",
      name: "Battle Royale Cup",
      prize: "$5,000",
      date: "November 20, 2024",
      participants: "72/100",
      image: pubgImg,
      status: "Registration Open"
    },
    {
      id: 3,
      game: "Free Fire",
      name: "Squad Showdown",
      prize: "$3,000",
      date: "November 25, 2024",
      participants: "24/50",
      image: squadImg,
      status: "Registration Open"
    },
    {
      id: 4,
      game: "Free Fire",
      name: "Squad Showdown Elite",
      prize: "$3,000",
      date: "November 25, 2024",
      participants: "24/50",
      image: squadImg,
      status: "Upcoming"
    }
  ];

  useEffect(() => {
    const filterTournaments = () => {
      return tournaments.filter(tournament => {
        const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tournament.game.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTab = activeTab === 'all' || 
                          (activeTab === 'freefire' && tournament.game === 'Free Fire') ||
                          (activeTab === 'pubg' && tournament.game === 'PUBG Mobile');
        return matchesSearch && matchesTab;
      });
    };

    setFilteredTournaments(filterTournaments());
  }, [searchTerm, activeTab]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 sticky shadow-lg top-0 left-0 z-50 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-white" />
              <h1 className="text-2xl font-bold text-white">GameTourneys</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                Sign In
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
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
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Host Tournament
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
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
                  className="w-full pl-10 pr-4 py-2 border rounded-lg shadow outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 z-10 rounded-lg transition-colors ${activeTab === 'all' ? 'bg-fuchsia-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('all')}
              >
                All Games
              </button>
              <button
                className={`px-4 py-2 z-10 rounded-lg transition-colors ${activeTab === 'freefire' ? 'bg-fuchsia-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('freefire')}
              >
                Free Fire
              </button>
              <button
                className={`px-4 py-2 z-10 rounded-lg transition-colors ${activeTab === 'pubg' ? 'bg-fuchsia-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
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
        {filteredTournaments.length === 0 ? (
          <div className="text-center py-8">
            <h3 className="text-xl text-gray-600">No tournaments found matching your criteria</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="p-[10px]">
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-[350px] sm:h-auto md:h-[350px] rounded-lg lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {tournament.game === "Free Fire" ? (
                        <Flame className="h-5 w-5 text-orange-500" />
                      ) : (
                        <Gamepad2 className="h-5 w-5 text-purple-500" />
                      )}
                      <span className="text-sm font-medium text-gray-600">{tournament.game}</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                      {tournament.status}
                    </span>
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
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
                    <span>Join Tournament</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentWebsite;