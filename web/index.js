import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './App';

AppRegistry.registerComponent('reactNativeWeb', () => App);
AppRegistry.runApplication('reactNativeWeb', { rootTag: document.getElementById('react-app') });
