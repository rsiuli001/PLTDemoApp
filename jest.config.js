module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)'
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
};
