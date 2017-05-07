import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const Input = (props) => {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.label}</Text>
            <TextInput 
                 secureTextEntry={props.secureTextEntry}
                 placeholder={props.placeholder}
                 autoCorrect={false}
                 style={styles.textInput}
                 value={props.value}
                 onChangeText={props.onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput:{
        width: 100,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        // marginTop: 10,
        fontSize: 14,
        color: '#000',
        lineHeight: 23,
        flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 10,
        flex: 1
    },
    containerStyle:{
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    }
})

export { Input };