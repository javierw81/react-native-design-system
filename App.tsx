import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Title } from './src/components/Title';
import { View } from './src/components/View';

export default function App() {
  return (
    <View>
      <Title>Open up App.tsx to start working on your app!</Title>
      <StatusBar style="auto" />
    </View>
  );
}

