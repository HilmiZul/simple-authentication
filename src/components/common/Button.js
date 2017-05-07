import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#00bbff',
        borderColor: '#919191',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export { Button };