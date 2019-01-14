import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

class List extends Component {

    renderItem = ({title: textTitle, msg: textDescription}, i) => {
        return(
                <TouchableOpacity key={i} style={styles.list}>
                    <Text style={styles.text_title}>{textTitle}</Text>
                    <Text style={styles.text_description}>{textDescription}</Text>
                </TouchableOpacity>
        )
    }

    render() {
        const {list} = this.props
        console.log("props", this.props)
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
    },

    text_title: {
        color: '#C71585'
    },

    text_description: {
        color: '#F08080'
    }
})

export default List