import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { actionCreators } from './todoRedux'

class AddTodoScreen extends Component {

    onSave = () => {
        const {text_title, text_description} = this.state
        const { navigation, onAddTodo } = this.props
        onAddTodo(text_title, text_description)
        navigation.goBack()
    }

    updateTextInputTitle = (text_title) => {
        this.setState({text_title})
    }

    updateTextInputDescription = (text_description) => {
        this.setState({text_description})
    }

    render() {
        const { goBack } = this.props.navigation
        return(
            <View>
                <View>
                    <Text style={styles.header}>Add To-do</Text>
                    <View>
                        <TextInput
                            style={styles.inputTitle}
                            placeholder='Title'
                            onChangeText={this.updateTextInputTitle}
                        />
                        <TextInput
                            style={styles.inputDescription}
                            placeholder='Description'
                            onChangeText={this.updateTextInputDescription}
                        />
                    </View>
                </View>
                <View>
                    <Button
                        style={styles.button}
                        title='Save'
                        onPress={this.onSave}
                    />
                    <Button
                        style={styles.button}
                        title='Cancel'
                        onPress={goBack}
                    />
                </View>
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

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (text_title, text_description) => {
            dispatch(actionCreators.add({title: text_title, msg: text_description}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoScreen)