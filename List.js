import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

class List extends Component {

    renderItem = (text) => {
        return(
                <TouchableOpacity style={styles.list}>
                    <Text>{text}</Text>
                </TouchableOpacity>
        )
    }

    render() {
        const {list} = this.props
        return(
            <View>
                {list.map(this.renderItem)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#D3F0E2',
        padding: 10
    }
})

export default List