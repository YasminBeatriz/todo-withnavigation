/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppNavigation from './AppNavigation.js';
import { reducer } from './todoRedux'

const store = createStore(reducer)

class App extends Component {
	
	render() {

		return (
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		)
	}
}

export default App;
