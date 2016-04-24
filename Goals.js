'use strict';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
var React = require('react-native');


var {
  StyleSheet,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  actionButton:{
    marginBottom: 50
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  description:{
    fontSize: 20,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

class Goals extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Goals Tab
        </Text>

        <ActionButton offsetY={75} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Goal" onPress={() => console.log("notes tapped!")}>
            <Icon name="android-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

module.exports = Goals;