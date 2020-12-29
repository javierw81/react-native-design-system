// if you use expo remove this line
//import { AppRegistry } from 'react-native';
import React from "react";
import { name as appName } from '../app.json';
import { theme } from "../src/themes/theme";
import { ThemeProvider } from 'styled-components/native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { loadStories } from './storyLoader'
import * as Font from 'expo-font';

import './rn-addons';

// import stories
configure(() => {
  Font.loadAsync({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'ComingSoon-Regular': require('../assets/fonts/ComingSoon-Regular.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  });
  loadStories();
  addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  port: 9009
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
//AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
