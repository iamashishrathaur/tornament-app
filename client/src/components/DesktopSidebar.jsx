import {Trophy, Home, User, Plus} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const DesktopSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Update active section based on the current route path
  useEffect(() => {
    const path = location.pathname.substring(1); // Get path without leading '/'
    setActiveSection(path || ''); // Set activeSection to empty string for Home route
  }, [location]);

  const handleChange = (id) => {
    setActiveSection(id);
    navigate(`/${id}`);
  };
  return(
    <div className="hidden md:flex flex-col w-64 border-r border-gray-200 h-screen fixed left-0 top-0 bg-white">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">GameTourneys</span>
        </div>
      </div>
      <nav className="flex-1 px-4">
        {[
          { icon: Home, label: 'Home', id: '' },
          { icon: Trophy, label: 'Tournaments', id: 'tournaments' },
          { icon: Plus, label: 'Host Tournament', id: 'host' },
          { icon: User, label: 'Profile', id: 'profile' }
        ].map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => handleChange(id)}
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
  )};
  export default DesktopSidebar