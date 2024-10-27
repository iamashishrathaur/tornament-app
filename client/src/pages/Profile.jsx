import React, { useState } from 'react';
import { Trophy, Users, Calendar, Settings, Edit2, MapPin, 
         Twitter, Globe, Star, Medal, TrendingUp, Shield, 
         ChevronRight, GamepadIcon } from 'lucide-react';
import BottomNav from '../components/BottomNav';

const CustomTab = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium transition-colors relative
      ${active 
        ? 'text-blue-600' 
        : 'text-gray-600 hover:text-gray-900'
      }`}
  >
    {label}
    {active && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
    )}
  </button>
);

const StatBox = ({ icon: Icon, label, value, trend }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all">
    <div className="flex items-center justify-between mb-3">
      <div className="p-2 bg-blue-50 rounded-xl">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      {trend && (
        <div className="flex items-center text-emerald-500 text-sm font-medium">
          <TrendingUp className="w-4 h-4 mr-1" />
          {trend}
        </div>
      )}
    </div>
    <div className="space-y-1">
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  </div>
);

const AchievementBox = ({ icon: Icon, title, description, type }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-all">
    <div className={`p-3 rounded-xl ${
      type === 'gold' ? 'bg-amber-50' :
      type === 'silver' ? 'bg-gray-50' :
      'bg-blue-50'
    }`}>
      <Icon className={`w-6 h-6 ${
        type === 'gold' ? 'text-amber-600' :
        type === 'silver' ? 'text-gray-600' :
        'text-blue-600'
      }`} />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </div>
);

const TournamentCard = ({ tournament }) => (
  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-100 transition-all">
    <div className="flex">
      <div className="w-32 h-32 relative">
        <img
          src={tournament.image}
          alt={tournament.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{tournament.name}</h3>
            <div className="flex items-center mt-1 text-gray-600">
              <GamepadIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">{tournament.game}</span>
            </div>
          </div>
          {tournament.position && (
            <div className="flex items-center px-3 py-1 bg-amber-50 rounded-full">
              <Trophy className="w-4 h-4 text-amber-600 mr-1" />
              <span className="text-sm font-medium text-amber-600">
                #{tournament.position}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {tournament.date}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {tournament.participants}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const userProfile = {
    name: "Alex Thompson",
    username: "@alexthompson",
    avatar: "/api/placeholder/200/200",
    cover: "/api/placeholder/1200/300",
    bio: "Professional esports player | 3x Tournament Champion | Team Captain at Digital Athletes",
    location: "New York, USA",
    website: "alexthompson.gg",
    twitter: "@alex_thompson",
    stats: [
      { 
        label: "Tournament Wins", 
        value: "24", 
        icon: Trophy,
        trend: "+3 this month" 
      },
      { 
        label: "Win Rate", 
        value: "68%", 
        icon: Star,
        trend: "+2.4%" 
      },
      { 
        label: "Active Teams", 
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="h-64 w-full overflow-hidden relative">
        <img
          src={userProfile.cover}
          alt="Profile Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex flex-col md:flex-row md:items-end -mt-20">
          <div className="flex items-end">
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-36 h-36 rounded-2xl object-cover border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0 md:ml-6 md:mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
                <p className="text-gray-600">{userProfile.username}</p>
              </div>
              <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {userProfile.location}
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                <a href={`https://${userProfile.website}`} className="text-blue-600 hover:underline">
                  {userProfile.website}
                </a>
              </div>
              <div className="flex items-center">
                <Twitter className="w-4 h-4 mr-1" />
                {userProfile.twitter}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 border-b border-gray-200">
          <div className="flex space-x-4">
            {['Overview', 'Tournaments', 'Achievements', 'Teams'].map((tab) => (
              <CustomTab
                key={tab}
                label={tab}
                active={activeTab === tab.toLowerCase()}
                onClick={() => setActiveTab(tab.toLowerCase())}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="py-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
                <div className="grid gap-4">
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
                <h2 className="text-xl font-bold mb-4">Recent Tournaments</h2>
                <div className="grid gap-4">
                  {userProfile.tournaments.map((tournament) => (
                    <TournamentCard
                      key={tournament.id}
                      tournament={tournament}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tournaments' && (
            <div className="grid gap-4">
              {userProfile.tournaments.map((tournament) => (
                <TournamentCard
                  key={tournament.id}
                  tournament={tournament}
                />
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid gap-4">
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
            <div className="text-center py-12 text-gray-600">
              Team history coming soon
            </div>
          )}
        </div>
      </div>
      <BottomNav/>
    </div>
  );
};

export default ProfilePage;