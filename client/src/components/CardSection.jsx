// src/components/CardSection.jsx
import React from 'react';
import { Card, CardContent } from '@mui/material';

const CardSection = ({ activeTab, tabIndex, children }) => (
  <div hidden={activeTab !== tabIndex} className='pt-8'>
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  </div>
);

export default CardSection;
