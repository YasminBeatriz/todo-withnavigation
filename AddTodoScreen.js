import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { actionCreators } from './todoRedux'

class AddTodoScreen extends Component {

    onAddTodo = () => {
        const {dispatch} = this.props
        const {text_title} = this.state
        dispatch(actionCreators.add(text_title))
        this.props.navigation.goBack()
    }

    render() {
        const { goBack } = this.props.navigation;
        return(

            <View>
                <View>
                    <Text style={styles.header}>Add To-do</Text>
                    <View>
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
                    </View>
                </View>
                <View>
                    <View>
                        <Button
                            style={styles.button}
                            title='Save'
                            onPress={this.onAddTodo}
                        />
                    </View>
                    <View>
                        <Button
                            style={styles.button}
                            title='Cancel'
                            onPress={() => { goBack()}}
                        />
                    </View>
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

const mapStateToProps = (state, ownProps) => {
    return {}
}

export default connect(mapStateToProps)(AddTodoScreen)