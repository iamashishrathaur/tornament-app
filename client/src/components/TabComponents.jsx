import {
  Tabs,
  Tab,
} from '@mui/material';

const TabComponents = ({activeTab,handleTabChange}) => {
  return (
    <Tabs value={activeTab} onChange={handleTabChange} centered>
    <Tab label="Basic Info" />
    <Tab label="Prize & Entry" />
    <Tab label="Details" />
    <Tab label="Requirements" />
    <Tab label="Contact" />
  </Tabs>
  )
}

export default TabComponents