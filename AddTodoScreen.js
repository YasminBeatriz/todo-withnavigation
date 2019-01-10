import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class AddTodoScreen extends Component {
    render() {
        return(
            <View> 
                <Text style={styles.header}>Add To-do</Text>
                <TextInput 
                    style={styles.inputTitle}
                    placeholder='Title'
                />
                <TextInput 
                    style={styles.inputDescription}
                    placeholder='Description'
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

export default AddTodoScreen