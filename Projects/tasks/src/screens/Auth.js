import React, { Component } from 'react'
import {
    ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, Alert
} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

import AuthInput from "../components/AuthInput";

import { server, showError, showSuccess } from '../common'

const initialState = {
    email: '',
    password: '',
    name: '',
    confirPassword: '',
    stageNew: false
}

export default class Auth extends Component {

    state= {
        ...initialState
    }

    signinOrSignup = () => {
        if(this.state.stageNew) {
            this.signup()
        }else{
            this.signin()
        }
    }

    signup = async () => {
        try{
            await axios.post(`${server}/signup`,{
                name : this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirPassword: this.state.confirPassword
            })

            showSuccess('Usuario cadastrado!')
            this.setState({ ...initialState })
        }catch(e) {
            showError(e)
        }
    }

    signin = async () => {
        try{
            const res = axios.post(`${server}/signin`,{
                email: this.state.email,
                password: this.state.password
            })

            AsyncStorage.setItem('userData', JSON.stringify(res.data))
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.navigation.navigate('Home', res.data)
        }catch(e) {
            showError(e)
        }
    }

    render () {
        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)
        
        if(this.state.stageNew) {
            validations.push(this.state.confirPassword === this.state.password)
            validations.push(this.state.name && this.state.name.trim().length >= 3)
        }

        const validForm = validations.reduce((t,a) => t && a)

        return (
            <ImageBackground
            source={backgroundImage}
            style={styles.background}>
                <Text style={styles.title}>Task</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>{this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}</Text>
                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder='Nome' value={this.state.name} onChangeText={name => this.setState({name})} style={styles.input}/>
                    }
                    <AuthInput icon='at' placeholder='E-mail' value={this.state.email} onChangeText={email => this.setState({email})} style={styles.input}/>
                    <AuthInput icon='lock' placeholder='Senha' value={this.state.password} onChangeText={password => this.setState({password})} style={styles.input} secureTextEntry={true}/>
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk' placeholder='Confirmar a senha' value={this.state.confirPassword} onChangeText={confirPassword => this.setState({confirPassword})} style={styles.input}/>
                    }
                    <TouchableOpacity onPress={this.signinOrSignup} disabled={!validForm}>
                        <View style={[styles.button, validForm ? {} : {backgroundColor: '#aaa'}]}>
                            <Text style={styles.buttonText}>{this.state.stageNew ? 'Registrar' : 'Entrar'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                    </Text>
                </TouchableOpacity>
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
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10
    },
    input: {
        marginTop: 10,
        backgroundColor: '#fff',
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8
    },
    buttonText: {
        color: '#fff',
        fontFamily: commonStyles.fontFamily,
        fontSize: 20
    }
})