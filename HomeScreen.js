import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import List from './List';

class HomeScreen extends Component {
    render() {
        const {items} = this.props
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
                    list={items}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.todos
    }
}

export default connect(mapStateToProps)(HomeScreen)