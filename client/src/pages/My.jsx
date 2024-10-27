import React, { useState } from 'react';
import { Trophy, Users, Settings, Edit2, MapPin, 
         Twitter, Globe, Star, Medal, Shield, Menu } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import ProfileTabs from '../components/ProfileTabs';
import StatBox from '../components/StatBox';
import AchievementBox from '../components/AchievementBox';
import RecentTournament from '../components/RecentTournament';
import ResponsiveHeader from '../components/ResponsiveHeader';
import DesktopSidebar from '../components/DesktopSidebar';
import SearchBar from '../components/SearchBar';
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const userProfile = {
    name: "Alex Thompson",
    username: "@alexthompson",
    avatar: "/api/placeholder/200/200",
    cover: "/api/placeholder/1200/300",
    bio: "Professional esports player | 3x Tournament Champion",
    location: "New York, USA",
    website: "alexthompson.gg",
    twitter: "@alex_thompson",
    stats: [
      { 
        label: "Tournament Wins", 
        value: "24", 
        icon: Trophy,
        trend: "+3" 
      },
      { 
        label: "Win Rate", 
        value: "68%", 
        icon: Star,
        trend: "+2.4%" 
      },
      { 
        label: "Teams", 
        value: "3", 
        icon: Users 
      }
    ],
    achievements: [
      {
        title: "Tournament MVP",
        description: "Voted most valuable player in 3 tournaments",
        icon: Trophy,
        type: "gold"
      },
      {
        title: "Team Captain",
        description: "Successfully led team to victory",
        icon: Shield,
        type: "silver"
      },
      {
        title: "Rising Star",
        description: "Named best newcomer 2023",
        icon: Star,
        type: "bronze"
      }
    ],
    tournaments: [
      {
        id: 1,
        name: "Pro League Season 5",
        game: "Free Fire",
        date: "Oct 2023",
        position: 1,
        participants: "64 Teams",
        image: "/api/placeholder/200/200"
      },
      {
        id: 2,
        name: "Battle Royale Cup",
        game: "PUBG Mobile",
        date: "Sep 2023",
        position: 3,
        participants: "32 Teams",
        image: "/api/placeholder/200/200"
      }
    ]
  };

  const tabs = [
    { label: 'Overview', icon: Star },
    { label: 'Tournaments', icon: Trophy },
    { label: 'Achievements', icon: Medal },
    { label: 'Teams', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    
      <DesktopSidebar/>
      <div className="md:pl-64">
          <ResponsiveHeader searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} visible={searchVisible} />
      
      {/* Cover Image */}
      
      <div className="h-40 w-full overflow-hidden relative">
        <img
          src={userProfile.cover}
          alt="Profile Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="px-4">
        <div className="relative -mt-16 mb-4 flex items-end">
          <div className="relative">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow-lg"
            />
            <button className="absolute bottom-1 right-1 p-1.5 bg-blue-600 text-white rounded-lg shadow-lg">
              <Edit2 className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{userProfile.name}</h2>
              <p className="text-sm text-gray-600">{userProfile.username}</p>
            </div>
            <button className="p-2 bg-blue-600 text-white rounded-lg">
              <Settings className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {userProfile.location}
            </div>
            <div className="flex items-center">
              <Globe className="w-3 h-3 mr-1" />
              <a href={`https://${userProfile.website}`} className="text-blue-600">
                {userProfile.website}
              </a>
            </div>
            <div className="flex items-center">
              <Twitter className="w-3 h-3 mr-1" />
              {userProfile.twitter}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-[68px] z-40 bg-white mt-4 border-t border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => (
            <ProfileTabs
              key={tab.label}
              label={tab.label}
              icon={tab.icon}
              active={activeTab === tab.label.toLowerCase()}
              onClick={() => setActiveTab(tab.label.toLowerCase())}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {userProfile.stats.map((stat) => (
                <StatBox
                  key={stat.label}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  trend={stat.trend}
                />
              ))}
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Recent Achievements</h2>
              <div className="space-y-3">
                {userProfile.achievements.map((achievement) => (
                  <AchievementBox
                    key={achievement.title}
                    icon={achievement.icon}
                    title={achievement.title}
                    description={achievement.description}
                    type={achievement.type}
                  />
                ))}
              </div>
            </div>

            {/* Recent Tournaments */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Recent Tournaments</h2>
              <div className="space-y-3">
                {userProfile.tournaments.map((tournament) => (
                  <RecentTournament
                    key={tournament.id}
                    tournament={tournament}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tournaments' && (
          <div className="space-y-3">
            {userProfile.tournaments.map((tournament) => (
              <RecentTournament
                key={tournament.id}
                tournament={tournament}
              />
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-3">
            {userProfile.achievements.map((achievement) => (
              <AchievementBox
                key={achievement.title}
                icon={achievement.icon}
                title={achievement.title}
                description={achievement.description}
                type={achievement.type}
              />
            ))}
          </div>
        )}

        {activeTab === 'teams' && (
          <div className="text-center py-8 text-gray-600 text-sm">
            Team history coming soon
          </div>
        )}
      </div>
      <BottomNav/>
      </div>
    </div>
  );
};

export default ProfilePage;