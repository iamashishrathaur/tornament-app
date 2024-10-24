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

  export default GameFilter