import React from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Spinner, Button} from './components/common';
import LoginForm from './components/loginForm';

class App extends React.Component{
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCX_0acLL9-ff7tkSFHfHkhS9936c0INCY",
            authDomain: "authentication-6d8d1.firebaseapp.com",
            databaseURL: "https://authentication-6d8d1.firebaseio.com",
            projectId: "authentication-6d8d1",
            storageBucket: "authentication-6d8d1.appspot.com",
            messagingSenderId: "98353311787"
        });  

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            }else{
                this.setState({loggedIn: false});
            }
        })  
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (
                <View>
                    <Text>Isti</Text>
                    <Button onPress={ () => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </View>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size='large'/>;
        }
    }

    render(){
        return(
            <View>
                <Header title="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;