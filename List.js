import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

class List extends Component {

    render() {
        const {text} = this.props
        return(
            <View>
                <TouchableOpacity style={styles.list}>
                    <Text>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#D3F0E2'
    }
})

export default List