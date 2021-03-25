import React, { Component } from 'react'
import {
    ImageBackground, Text, StyleSheet
} from 'react-native'

import backgroundImage from '../../assets/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component {
    render () {
    return (
            <ImageBackground
            source={ImageBackground}
            style={styles.background}>
                <Text style={styles.title}>Task</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    }
})