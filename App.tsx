import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import CustomDropDown from './CustomDropDown';
import React from 'react';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <CustomDropDown/>
    </GluestackUIProvider>
  );
}


