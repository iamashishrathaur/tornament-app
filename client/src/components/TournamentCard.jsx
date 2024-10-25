import { Calendar, Flame, Gamepad2, Trophy, Users } from "lucide-react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const TournamentCard = ({ tournament, isFeatured = false }) => {
    // Renamed to avoid conflict with MUI's CardContent

    

    const TournamentCardContent = () => (
      <div className="group cursor-pointer">
        <div className="relative">
          <img
            src={tournament.image}
            alt={tournament.name}
            className={`w-full object-cover ${
              isFeatured ? 'h-32' : 'h-48 md:h-56'
            }`}
          />
          <div className="absolute top-2 right-2">
            <span className="text-xs px-3 py-1 rounded-full bg-white/90 text-blue-600 font-medium">
              {tournament.status}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            {tournament.game === "Free Fire" ? (
              <Flame className="h-5 w-5 text-orange-500" />
            ) : (
              <Gamepad2 className="h-5 w-5 text-purple-500" />
            )}
            <span className="text-sm font-medium text-gray-600">{tournament.game}</span>
          </div>
          <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">
            {tournament.name}
          </h3>
          {!isFeatured && (
            <>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                  <Trophy className="h-4 w-4 text-blue-600 mb-1" />
                  <span className="text-xs text-gray-600">{tournament.prize}</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                  <Calendar className="h-4 w-4 text-green-600 mb-1" />
                  <span className="text-xs text-gray-600">{tournament.date}</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                  <Users className="h-4 w-4 text-purple-600 mb-1" />
                  <span className="text-xs text-gray-600">{tournament.participants}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Join Tournament
              </button>
            </>
          )}
        </div>
      </div>
    );
  
    if (isFeatured) {
      return (
        <div className="w-72 md:w-80">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <TournamentCardContent />
            </CardContent>
          </Card>
        </div>
      );
    }
  
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <TournamentCardContent />
        </CardContent>
      </Card>
    );
};

export default TournamentCard;
