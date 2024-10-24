import { Search } from "lucide-react";


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

  export default SearchBar