/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';

class Duopoly extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle}>
          <Text>First page</Text>
        </View>
        <View style={styles.pageStyle}>
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});

AppRegistry.registerComponent('Duopoly', () => Duopoly);
