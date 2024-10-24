import TournamentCard from "./TournamentCard";

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
  export default FeaturedSection