import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Title } from './src/components/Title';
import { View } from './src/components/View';
import { theme } from "./src/themes/theme";
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'ComingSoon-Regular': require('./assets/fonts/ComingSoon-Regular.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <View >
          <Title>Open up App.tsx to start working on your app!</Title>
          <Title>Open up App.tsx to start working on your app!</Title>
          <Title>Open up App.tsx to start working on your app!</Title>
          <Title>Open up App.tsx to start working on your app!</Title>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </>
  );
}

