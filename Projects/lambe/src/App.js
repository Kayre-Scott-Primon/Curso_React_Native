import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './Navigator'
import { setMessage } from './store/actions/messageTypes'

class App extends Component {

    componentDidUpdate = () => {
        if(this.props.text && this.props.text.trim()) {
            Alert.alert(this.props.title || 'Mensagem', this.props.text.toString())
            this.props.clearMessage()
        }
    }

    render() {
        return (
            <Navigator/>
        )
    }
}

const mapStateToProps = ({ message }) => {
    return {
        title: message.title,
        texte: message.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => 
            dispatch(setMessage({title: '', text: ''}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
