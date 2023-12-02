import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { StyleSheet, Text, View } from 'react-native';
import CustomDropDown from './CustomDropDown';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <CustomDropDown/>
    </GluestackUIProvider>
  );
}


