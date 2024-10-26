import { Trophy, Home, User, Plus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BottomNav = () => {
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

  return (
    <>
      <div className="pt-[100px]"></div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
        <div className="flex justify-around items-center h-16">
          {[
            { icon: Home, label: 'Home', id: '' },
            { icon: Trophy, label: 'Tournaments', id: 'tournaments' },
            { icon: Plus, label: 'Host', id: 'host' },
            { icon: User, label: 'Profile', id: 'profile' }
          ].map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => handleChange(id)}
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
    </>
  );
};

export default BottomNav;
