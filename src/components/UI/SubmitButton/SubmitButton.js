import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const submitButton = props => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={[styles.centerText, props.style]} onPress={props.onPress}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BED600',
        borderWidth: .5,
        height: 40,
        borderRadius: 5 ,
        margin: 10
    }
})
export default submitButton;