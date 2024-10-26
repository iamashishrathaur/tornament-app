// src/components/CardSection.jsx
import React from 'react';
import { Box, Card, CardContent } from '@mui/material';

const CardSection = ({ activeTab, tabIndex, children }) => (
  <Box role="tabpanel" hidden={activeTab !== tabIndex} p={4}>
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  </Box>
);

export default CardSection;
