import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { StyleSheet, Text, View } from 'react-native';
import CustomDropDown from './CustomDropDown';
import { countries } from './countries_list';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <CustomDropDown list={countries}/>
    </GluestackUIProvider>
  );
}


