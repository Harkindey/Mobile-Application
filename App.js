import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Master from './components/Master';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Master />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.proptypes
