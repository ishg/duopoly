'use strict';
 
var React = require('react-native');
var Goals = require('./Goals');
var Achieved = require('./Achieved');
var Icon = require('react-native-vector-icons/Ionicons');
 
var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;
 
class Duopoly extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'goals'
        };
    }
 
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <Icon.TabBarItem
                    selected={this.state.selectedTab === 'goals'}
                    title="Goals"
                    iconName="ios-list-outline"
                    selectedIconName="ios-list"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'goals'
                        });
                    }}>
                    <Goals/>
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    selected={this.state.selectedTab === 'achieved'}
                    title="Achieved"
                    iconName="ios-checkmark-outline"
                    selectedIconName="ios-checkmark"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'achieved'
                        });
                    }}>
                    <Achieved/>
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('Duopoly', () => Duopoly);