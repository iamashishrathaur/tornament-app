import { Bell, Search, Trophy } from "lucide-react";

const ResponsiveHeader = ({ searchVisible, setSearchVisible }) => (
    <header className="sticky w-full top-0 bg-white z-40 border-b border-gray-200">
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

  export default ResponsiveHeader
  