import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/routes';
import AppProvider from './src/hooks';

export default function App() {
  return (
    <AppProvider>
        <Routes />
        <StatusBar style="light" />
    </AppProvider>
  );
}
