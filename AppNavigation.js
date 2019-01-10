import React, { Component } from 'react'
import { View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './HomeScreen'
import AddTodoScreen from './AddTodoScreen'

const AppNavigator = createStackNavigator (
	{ Home: { screen: HomeScreen },
	  AddTodo: { screen: AddTodoScreen }}
)

const AppContainer = createAppContainer(AppNavigator)

class AppNavigation extends Component {
	
	render() {
		return (
			<AppContainer />
		)
	}
}

export default AppNavigation;
