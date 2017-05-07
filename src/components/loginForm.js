import React from 'react';
import {Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from './common';


class LoginForm extends React.Component{
    state = {email: '', password:'', error:'', loading:false};

    onButtonPress(){
        const {email, password} = this.state;
        
        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
         .then(this.onLoginSuccess.bind(this))
         .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
             .then(this.onLoginSuccess.bind(this))
             .catch(this.onLoginFailed.bind(this))
        });
    }

    renderButton(){
        if (this.state.loading){
            return <Spinner size='small' />
        }else{
            return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>);
        }
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password:'',
            loading: false,
            error:''
        })
    }

    onLoginFailed(){
        this.setState({
            error:'Authentication Failed',
            loading: false
        })
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder={'user@blabla.com'}
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder={'password'}
                        label={'Password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                
                <Text style={styles.textError}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    textError:{
        color: "#FF0000",
        fontSize: 20,
        alignSelf: 'center'
    }
})
export default LoginForm;