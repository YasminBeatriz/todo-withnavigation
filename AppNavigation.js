import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './HomeScreen'
import AddTodoScreen from './AddTodoScreen'

const AppNavigator = createStackNavigator (
	{ Home: { screen: HomeScreen },
	  AddTodo: { screen: AddTodoScreen }}
)

export default createAppContainer(AppNavigator)
