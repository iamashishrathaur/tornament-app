import React, { useState, useEffect } from 'react';
import { Search, Trophy, Users, Calendar, Home, Gamepad2, Flame, User, Plus, Menu, Bell, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Mobile Navigation
const BottomNav = ({ activeSection, setActiveSection }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
    <div className="flex justify-around items-center h-16">
      {[
        { icon: Home, label: 'Home', id: 'home' },
        { icon: Trophy, label: 'Tournaments', id: 'tournaments' },
        { icon: Plus, label: 'Host', id: 'host' },
        { icon: User, label: 'Profile', id: 'profile' }
      ].map(({ icon: Icon, label, id }) => (
        <button
          key={id}
          onClick={() => setActiveSection(id)}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
            activeSection === id ? 'text-blue-600' : 'text-gray-600'
          }`}
        >
          <Icon className="h-5 w-5" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  </div>
);

// Desktop Sidebar
const DesktopSidebar = ({ activeSection, setActiveSection }) => (
  <div className="hidden md:flex flex-col w-64 border-r border-gray-200 h-screen fixed left-0 top-0 bg-white">
    <div className="p-6">
      <div className="flex items-center space-x-2">
        <Trophy className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold">GameTourneys</span>
      </div>
    </div>
    <nav className="flex-1 px-4">
      {[
        { icon: Home, label: 'Home', id: 'home' },
        { icon: Trophy, label: 'Tournaments', id: 'tournaments' },
        { icon: Plus, label: 'Host Tournament', id: 'host' },
        { icon: User, label: 'Profile', id: 'profile' }
      ].map(({ icon: Icon, label, id }) => (
        <button
          key={id}
          onClick={() => setActiveSection(id)}
          className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 transition-colors ${
            activeSection === id 
              ? 'bg-blue-50 text-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Icon className="h-5 w-5" />
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </nav>
  </div>
);

// Responsive Header
const ResponsiveHeader = ({ searchVisible, setSearchVisible }) => (
  <header className="sticky top-0 bg-white z-40 border-b border-gray-200">
    {/* Mobile Header */}
    <div className="flex md:hidden items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <Trophy className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-bold">GameTourneys</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setSearchVisible(!searchVisible)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Search className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>

    {/* Desktop Header */}
    <div className="hidden md:flex items-center justify-between p-4 pl-72">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tournaments..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Host Tournament
        </button>
      </div>
    </div>
  </header>
);

// Search Bar Component (Mobile)
const SearchBar = ({ searchTerm, setSearchTerm, visible }) => (
  <div className={`md:hidden ${visible ? 'max-h-16' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
    <div className="p-4 bg-white border-b">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search tournaments..."
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  </div>
);

// Game Filter
const GameFilter = ({ activeTab, setActiveTab }) => (
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-2 p-4 min-w-max">
      {[
        { id: 'all', label: 'All Games' },
        { id: 'freefire', label: 'Free Fire' },
        { id: 'pubg', label: 'PUBG Mobile' }
      ].map(({ id, label }) => (
        <button
          key={id}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === id 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab(id)}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

// Tournament Card Component
const TournamentCard = ({ tournament, isFeatured = false }) => {
  const CardContent = () => (
    <div className="group cursor-pointer">
      <div className="relative">
        <img
          src={tournament.image}
          alt={tournament.name}
          className={`w-full object-cover ${
            isFeatured ? 'h-32' : 'h-48 md:h-56'
          }`}
        />
        <div className="absolute top-2 right-2">
          <span className="text-xs px-3 py-1 rounded-full bg-white/90 text-blue-600 font-medium">
            {tournament.status}
          </span>
        </div>
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
        <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">
          {tournament.name}
        </h3>
        {!isFeatured && (
          <>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <Trophy className="h-4 w-4 text-blue-600 mb-1" />
                <span className="text-xs text-gray-600">{tournament.prize}</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <Calendar className="h-4 w-4 text-green-600 mb-1" />
                <span className="text-xs text-gray-600">{tournament.date}</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <Users className="h-4 w-4 text-purple-600 mb-1" />
                <span className="text-xs text-gray-600">{tournament.participants}</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Join Tournament
            </button>
          </>
        )}
      </div>
    </div>
  );

  if (isFeatured) {
    return (
      <div className="w-72 md:w-80">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <CardContent />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <CardContent />
      </CardContent>
    </Card>
  );
};

// Featured Section
const FeaturedSection = ({ tournaments }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between px-4 mb-3">
      <h2 className="text-lg font-bold">Featured Tournaments</h2>
      <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
    </div>
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 p-4 min-w-max">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} isFeatured={true} />
        ))}
      </div>
    </div>
  </div>
);

// Main Component
const TournamentWebsite = () => {
  const [activeSection, setActiveSection] = useState('tournaments');
  const [searchVisible, setSearchVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTournaments, setFilteredTournaments] = useState([]);

  const tournaments = [
    {
      id: 1,
      game: "Free Fire",
      name: "Pro League Season 5",
      prize: "$10,000",
      date: "Nov 15",
      participants: "48/100",
      image: "/api/placeholder/400/320",
      status: "Upcoming"
    },
    {
      id: 2,
      game: "PUBG Mobile",
      name: "Battle Royale Cup",
      prize: "$5,000",
      date: "Nov 20",
      participants: "72/100",
      image: "/api/placeholder/400/320",
      status: "Registration Open"
    },
    {
      id: 3,
      game: "Free Fire",
      name: "Squad Showdown",
      prize: "$3,000",
      date: "Nov 25",
      participants: "24/50",
      image: "/api/placeholder/400/320",
      status: "Registration Open"
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
    <div className="min-h-screen bg-gray-50">
      <DesktopSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="md:pl-64">
        <ResponsiveHeader searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} visible={searchVisible} />
        
        <main className="max-w-7xl mx-auto pb-16 md:pb-8">
          <GameFilter activeTab={activeTab} setActiveTab={setActiveTab} />
          <FeaturedSection tournaments={filteredTournaments} />
          
          <div className="px-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">All Tournaments</h2>
              <button className="flex items-center space-x-2 text-gray-600">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filter</span>
              </button>
            </div>
            
            {filteredTournaments.length === 0 ? (
              <div className="text-center py-8">
                <h3 className="text-gray-600">No tournaments found</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTournaments.map((tournament) => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
};

export default TournamentWebsite;