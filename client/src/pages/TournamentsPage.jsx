// src/pages/HostTournamentPage.jsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  InputLabel,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Tabs,
  Tab,
  Alert,
  AlertTitle,
  Typography,
  Box,
} from '@mui/material';
import { Trophy, Upload, Clock, Users, Info } from 'lucide-react';
import BottomNav from '../components/BottomNav';

const HostTournamentPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState('tournaments');
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
    console.log('Form submitted:', formData);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box maxWidth="lg" mx="auto" p={4}>
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

      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Basic Info" />
        <Tab label="Prize & Entry" />
        <Tab label="Details" />
        <Tab label="Requirements" />
        <Tab label="Contact" />
      </Tabs>

      <Box role="tabpanel" hidden={activeTab !== 0} p={4}>
        <Card>
          <CardContent>
            <FormControl fullWidth margin="normal">
              {/* <InputLabel>Tournament Name</InputLabel>
              <TextField
                name="tournamentName"
                value={formData.tournamentName}
                onChange={handleInputChange}
                placeholder="Enter tournament name"
              /> */}
              <TextField
                label="Tournament Name"
                type="text"
                name="tournamentName"
                value={formData.tournamentName}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Game</InputLabel>
              <Select
                value={formData.game}
                name="game"
                onChange={handleInputChange}
              >
                <MenuItem value="freefire">Free Fire</MenuItem>
                <MenuItem value="pubg">PUBG Mobile</MenuItem>
                <MenuItem value="codm">COD Mobile</MenuItem>
                <MenuItem value="fortnite">Fortnite</MenuItem>
              </Select>
            </FormControl>

            <Box display="flex" gap={2}>
              <TextField
                label="Start Date"
                type="datetime-local"
                fullWidth
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                type="datetime-local"
                fullWidth
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box display="flex" gap={2}>
              <TextField
                label="Registration Deadline"
                type="datetime-local"
                fullWidth
                name="registrationDeadline"
                value={formData.registrationDeadline}
                onChange={handleInputChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Time Zone</InputLabel>
                <Select
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleInputChange}
                >
                  <MenuItem value="utc">UTC</MenuItem>
                  <MenuItem value="est">EST</MenuItem>
                  <MenuItem value="pst">PST</MenuItem>
                  <MenuItem value="ist">IST</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box role="tabpanel" hidden={activeTab !== 1} p={4}>
        <Card>
          <CardContent>
            <Box display="flex" gap={2}>
              <TextField
                label="Total Prize Pool"
                type="number"
                name="prizePool"
                value={formData.prizePool}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Entry Fee"
                type="number"
                name="entryFee"
                value={formData.entryFee}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </Box>

            <Box display="flex" gap={2}>
              <TextField
                label="Maximum Teams"
                type="number"
                name="maxTeams"
                value={formData.maxTeams}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Players per Team"
                type="number"
                name="playersPerTeam"
                value={formData.playersPerTeam}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box role="tabpanel" hidden={activeTab !== 2} p={4}>
        <Card>
          <CardContent>
            <FormControl fullWidth margin="normal">
              <InputLabel>Tournament Format</InputLabel>
              <Select
                value={formData.format}
                name="format"
                onChange={handleInputChange}
              >
                <MenuItem value="single">Single Elimination</MenuItem>
                <MenuItem value="double">Double Elimination</MenuItem>
                <MenuItem value="round">Round Robin</MenuItem>
                <MenuItem value="swiss">Swiss System</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Tournament Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Tournament Rules"
              name="rules"
              value={formData.rules}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Schedule"
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
          </CardContent>
        </Card>
      </Box>

      <Box role="tabpanel" hidden={activeTab !== 3} p={4}>
        <Card>
          <CardContent>
            <TextField
              label="Platform Requirements"
              name="platformRequirements"
              value={formData.platformRequirements}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Minimum Rank Requirement"
              name="minimumRank"
              value={formData.minimumRank}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Region Restriction</InputLabel>
              <Select
                name="regionRestriction"
                value={formData.regionRestriction}
                onChange={handleInputChange}
              >
                <MenuItem value="none">No Restriction</MenuItem>
                <MenuItem value="na">North America</MenuItem>
                <MenuItem value="eu">Europe</MenuItem>
                <MenuItem value="asia">Asia</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Box>

      <Box role="tabpanel" hidden={activeTab !== 4} p={4}>
        <Card>
          <CardContent>
            <TextField
              label="Organizer Name"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contact Email"
              type="email"
              name="organizerEmail"
              value={formData.organizerEmail}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Discord Server Link"
              name="discordServer"
              value={formData.discordServer}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </CardContent>
        </Card>
      </Box>

      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined">Save as Draft</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create Tournament
        </Button>
      </Box>
      <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </Box>
  );
};

export default HostTournamentPage;
