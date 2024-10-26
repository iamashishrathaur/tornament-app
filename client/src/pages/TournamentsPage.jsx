import React, { useState } from 'react';
import {
  Button,
  Tabs,
  Tab,
  Alert,
  AlertTitle,
  Typography,
  Box,
} from '@mui/material';
import BottomNav from '../components/BottomNav';
import ResponsiveHeader from '../components/ResponsiveHeader';
import DesktopSidebar from '../components/DesktopSidebar';
import CardSection from '../components/CardSection';
import FormField from '../components/FormField';
import FormSelect from '../components/FormSelect';

const HostTournamentPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState('tournaments');
  const [searchVisible, setSearchVisible] = useState(false);
  const [formData, setFormData] = useState({
    tournamentName: '',
    game: '',
    startDate: '',
    endDate: '',
    registrationDeadline: '',
    timeZone: '',
    prizePool: '',
    entryFee: '',
    maxTeams: '',
    playersPerTeam: '',
    format: '',
    description: '',
    rules: '',
    schedule: '',
    platformRequirements: '',
    minimumRank: '',
    regionRestriction: '',
    organizerName: '',
    organizerEmail: '',
    discordServer: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.tournamentName || !formData.game) {
      alert("Tournament Name and Game are required!");
      return;
    }
    console.log('Form submitted:', formData);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Responsive Header */}
      <ResponsiveHeader searchVisible={searchVisible} setSearchVisible={setSearchVisible} />

      <div className='block md:flex'>
        <div className='hidden md:block z-10' style={{ width: '240px', minHeight: '100vh', borderRight: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
        <DesktopSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>


        {/* Main Content Area */}
        <div className='flex-1 p-5 sm:p-10 pt-16 sm:pt-8 overflow-auto'>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Host a Tournament
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Create and manage your gaming tournament
          </Typography>

          <Alert severity="info" sx={{ mb: 4 }}>
            <AlertTitle>Before you start</AlertTitle>
            Make sure you have all tournament details ready, including prize pool information, rules, and schedule.
          </Alert>

          <Tabs value={activeTab} onChange={handleTabChange} centered >
            <Tab label="Basic Info" />
            <Tab label="Prize & Entry" />
            <Tab label="Details" />
            <Tab label="Requirements" />
            <Tab label="Contact" />
          </Tabs>


          {/* Tab Panels */}
          <CardSection activeTab={activeTab} tabIndex={0}>
            <FormField label="Tournament Name" name="tournamentName" value={formData.tournamentName} onChange={handleInputChange} />
            <FormSelect label="Game" name="game" value={formData.game} onChange={handleInputChange} options={[
              { value: 'freefire', label: 'Free Fire' },
              { value: 'pubg', label: 'PUBG Mobile' },
              { value: 'codm', label: 'COD Mobile' },
              { value: 'fortnite', label: 'Fortnite' },
            ]} />
            <Box display="flex" gap={2}>
              <FormField label="Start Date" name="startDate" value={formData.startDate} onChange={handleInputChange} type="datetime-local" InputLabelProps={{ shrink: true }} />
              <FormField label="End Date" name="endDate" value={formData.endDate} onChange={handleInputChange} type="datetime-local" InputLabelProps={{ shrink: true }} />
            </Box>
            <Box display="flex" gap={2}>
              <FormField label="Registration Deadline" name="registrationDeadline" value={formData.registrationDeadline} onChange={handleInputChange} type="datetime-local" InputLabelProps={{ shrink: true }} />
              <FormSelect label="Time Zone" name="timeZone" value={formData.timeZone} onChange={handleInputChange} options={[
                { value: 'utc', label: 'UTC' },
                { value: 'est', label: 'EST' },
                { value: 'pst', label: 'PST' },
                { value: 'ist', label: 'IST' },
              ]} />
            </Box>
          </CardSection>

          <CardSection activeTab={activeTab} tabIndex={1}>       
            <Box display="flex" gap={2}>
              <FormField label="Total Prize Pool" name="prizePool" type='number' value={formData.prizePool} onChange={handleInputChange} />  
              <FormField label="Entry Fee" type="number" name="entryFee" value={formData.entryFee} onChange={handleInputChange}/>
            </Box>
            <Box display="flex" gap={2}>
              <FormField label="Maximum Teams" type="number" name="maxTeams" value={formData.maxTeams} onChange={handleInputChange}/>
              <FormField label="Players per Team" type="number" name="playersPerTeam" value={formData.playersPerTeam} onChange={handleInputChange} />
            </Box>
          </CardSection>

          <CardSection activeTab={activeTab} tabIndex={2}>
            <FormSelect label="Tournament Format" name="format" value={formData.format} onChange={handleInputChange} options={[
              { value: 'single', label: 'Single Elimination' },
              { value: 'double', label: 'Double Elimination' },
              { value: 'round', label: 'Round Robin' },
              { value: 'swiss', label: 'Swiss System' },
            ]} />
            <FormField label="Tournament Description" name="description" value={formData.description} onChange={handleInputChange} multiline rows={4} />
            <FormField label="Tournament Rules" name="rules" value={formData.rules} onChange={handleInputChange} multiline rows={4} />
            <FormField label="Schedule" name="schedule" value={formData.schedule} onChange={handleInputChange} multiline rows={4} />
          </CardSection>
          
          <CardSection activeTab={activeTab} tabIndex={3}>
            <FormField label="Platform Requirements" name="platformRequirements" value={formData.platformRequirements} onChange={handleInputChange} multiline rows={4} />
            <FormField label="Minimum Rank Requirement" name="minimumRank" value={formData.minimumRank} onChange={handleInputChange}/>
            <FormSelect label="Region Restriction" name="regionRestriction" value={formData.regionRestriction} onChange={handleInputChange} options={[
              { value: 'none', label: 'No Restriction' },
              { value: 'na', label: 'North America' },
              { value: 'eu', label: 'Europe' },
              { value: 'asia', label: 'Asia' },
            ]} />
          </CardSection>
          
          <CardSection activeTab={activeTab} tabIndex={4}>
            <FormField label="Organizer Name" name="organizerName" value={formData.organizerName} onChange={handleInputChange} />
            <FormField label="Organizer Email" type="email" name="organizerEmail" value={formData.organizerEmail} onChange={handleInputChange}/>
            <FormField label="Discord Server Link" name="discordServer" value={formData.discordServer} onChange={handleInputChange}/>
          </CardSection>

          <div className='mt-5 flex justify-end gap-2' >
            <Button variant="outlined">Save as Draft</Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create Tournament
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
};

export default HostTournamentPage;
