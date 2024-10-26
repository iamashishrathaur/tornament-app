import { useEffect, useState } from "react";
import DesktopSidebar from "../components/DesktopSidebar";
import ResponsiveHeader from "../components/ResponsiveHeader";
import SearchBar from "../components/SearchBar";
import GameFilter from "../components/GameFilter";
import FeaturedSection from "../components/FeaturedSection";
import { Filter } from "lucide-react";
import TournamentCard from "../components/TournamentCard";
import BottomNav from "../components/BottomNav";
import freefireImg from '../assets/freefire.png'
import pubgImg from '../assets/pubg.jpg?100/200'
import squadImg from '../assets/squad.png'

const Home = () => {
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
        image: freefireImg,
        status: "Upcoming"
      },
      {
        id: 2,
        game: "PUBG Mobile",
        name: "Battle Royale Cup",
        prize: "$5,000",
        date: "Nov 20",
        participants: "72/100",
        image: pubgImg,
        status: "Registration Open"
      },
      {
        id: 3,
        game: "Free Fire",
        name: "Squad Showdown",
        prize: "$3,000",
        date: "Nov 25",
        participants: "24/50",
        image: squadImg,
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
        <DesktopSidebar/>
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
        <BottomNav/>
      </div>
    );
  };
  export default Home