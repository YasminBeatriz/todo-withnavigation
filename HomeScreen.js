import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import List from './List'

class HomeScreen extends Component {
    render() {
        const {todos} = this.props
        return(
            <View>
                <View style={{backgroundColor: '#CFD5DB', padding: 10 }} >
                    <Text style={{color: 'black', textAlign: 'center' }}>TODO LIST</Text>
                </View>
                <Button
                    title="ADD"
                    onPress={() => this.props.navigation.navigate('AddTodo')}
                />
                <List
                    list={todos}
                />
            </View>
        )
    }
}

export default HomeScreen