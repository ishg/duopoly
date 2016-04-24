'use strict';
 
var React = require('react-native');
var AchievedList = require('./AchievedList')
 
var {
    StyleSheet,
    View,
    Text,
    Component,
    NavigatorIOS
   } = React;
 
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class Achieved extends Component {
    render() {
        return (
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: 'Achieved',
                component: AchievedList
              }}/> 
        );
    }
}
 
module.exports = Achieved;