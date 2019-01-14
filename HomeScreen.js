import React, { Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {

    renderItem = ({ item: {title, msg}}) => {
        return(
                <TouchableOpacity style={styles.list}>
                    <Text style={styles.text_title}>{title}</Text>
                    <Text style={styles.text_description}>{msg}</Text>
                </TouchableOpacity>
        )
    }

    keyExtractor = (_, index) => index.toString()

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
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.todos
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

export default connect(mapStateToProps)(HomeScreen)