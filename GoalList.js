'use strict';

var React = require('react-native');
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

var {
  StyleSheet,
  View,
  Component
} = React;

var styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
});

class GoalList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActionButton offsetY={50} offsetX={4} buttonColor="rgba(231,76,60,1)">
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

module.exports = GoalList;