import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { actionCreators } from './todoRedux'

class AddTodoScreen extends Component {

    onAddTodo = () => {
        const {dispatch} = this.props
        const {text_title} = this.state
        dispatch(actionCreators.add(text_title))
    }

    render() {
        return(
            <View> 
                <Text style={styles.header}>Add To-do</Text>
                <TextInput 
                    style={styles.inputTitle}
                    placeholder='Title'
                    onChangeText={(text_title) => { this.setState({text_title}) }}
                />
                <TextInput 
                    style={styles.inputDescription}
                    placeholder='Description'
                    onChangeText={(text_description) => { this.setState({text_description}) }}
                />
                <Button
                    title='Save'
                    color='firebrick'
                    onPress={this.onAddTodo}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 8,
        backgroundColor: 'crimson',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    inputTitle: {
        padding: 5
    },

    inputDescription: {
        padding: 5,
        height: 30
    }
})

const mapStateToProps = (state, ownProps) => {
    return {}
}

export default connect(mapStateToProps)(AddTodoScreen)