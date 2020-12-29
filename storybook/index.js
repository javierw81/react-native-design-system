// if you use expo remove this line
//import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader'

import './rn-addons';

// import stories
configure(() => {
  loadStories();
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
