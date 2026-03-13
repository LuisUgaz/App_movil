import React from 'react';

// Mock Expo Modules Core and EventEmitter
jest.mock('expo-modules-core', () => {
  return {
    NativeModulesProxy: {
      ExpoFontLoader: {
        loadAsync: jest.fn(),
      },
    },
    EventEmitter: class {
      addListener = jest.fn(() => ({ remove: jest.fn() }));
      removeListener = jest.fn();
      removeAllListeners = jest.fn();
      emit = jest.fn();
    },
  };
});

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: (props) => React.createElement(View, props),
    Ionicons: (props) => React.createElement(View, props),
    AntDesign: (props) => React.createElement(View, props),
  };
});

// Mock Expo Router
jest.mock('expo-router', () => {
  const React = require('react');
  const MockScreen = (props) => null;
  const MockStack = (props) => props.children || null;
  MockStack.Screen = MockScreen;
  
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    }),
    useLocalSearchParams: () => ({}),
    Stack: MockStack,
    Tabs: MockStack,
    Redirect: (props) => null,
    Link: (props) => props.children,
  };
});

// Mock React Native Alert
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.Alert.alert = jest.fn();
  return RN;
});
