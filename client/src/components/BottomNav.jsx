import {Trophy, Home, User, Plus} from 'lucide-react';

const BottomNav = ({ activeSection, setActiveSection }) => (
    <>
    <div className='pt-[100px]'></div>
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
    </>
  );
  export default BottomNav