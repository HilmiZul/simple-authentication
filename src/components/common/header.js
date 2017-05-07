//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


//make component
const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>    
        </View>
    );
}

const styles= StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: '#fff'
  },
  viewStyle:{
    backgroundColor: '#00bbff',
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height:2},
    shadowOpacity: 0.5,
    elevation: 5,
    position: 'relative'
  },
  icon: {
      justifyContent: "center",
      alignItems: "flex-start"
  }
});
//make the component avalaible for other app
export { Header };