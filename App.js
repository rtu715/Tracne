import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import { ProfilePage } from './JavaScript/Views/ProfilePage';
// import { EventArgs } from './JavaScript/Views/EventArgs';

/**
 * the landing page.
 */
//  var EventArgs = require('./JavaScript/Views/EventArgs.js')
export default class App extends React.Component {
  render() {
     let pic = {
     uri: 'https://www.makeupforever.com/sites/default/files/styles/field_how_to_step__field_howto_step_image__full__how_to_page/public/1.6_Contouring-Square-Face.jpg?itok=ObBIMZPp'
 };
    return (
      <View style={styles.container}>
        <Text>Welcome to TrAcne!</Text>
        <Text>How is your skin today? </Text>
        <Image source={pic} style={{width: 300, height: 300}}/>
        <Text>How are you?</Text>
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
