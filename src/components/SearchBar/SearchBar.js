import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const searchBar = () => {
    return(
        
        <View style={styles.searchView}>
         <View style={styles.sectionStyle}>
            <Icon style={styles.magnifyingGlass} size={20} name={'magnifying-glass'} />
            <TextInput 
                style={styles.searchInput}
                placeholder={'Search'} 
                underlineColorAndroid="transparent"
            />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderWidth: .5,
        height: 40,
        borderRadius: 5 ,
        margin: 10
    },
    searchView: {
        paddingTop: 5
    },
    searchInput: {
        width: 300,
    },
    magnifyingGlass: {
        padding: 1,
        margin: 1,
        height: 25,
        width: 25,
        alignItems: 'center'
    }
});

export default searchBar;