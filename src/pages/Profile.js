import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

Profile = ({ navigation }) => {
  const gitHubUsername = navigation.getParam('github_username');
  
  return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${gitHubUsername}`}} />
}

export default Profile;