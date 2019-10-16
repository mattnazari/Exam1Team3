import React, {useState} from 'react';
import {View, Text, Picker} from 'react-native';
import styles from '../styles/FooterStyles';

const Footer = ()=>{

    const [name, setName] = useState(1)

    var Author = null;
    var footer = styles.footer

    if(name == 1){
        Author = (
            <Text>Sam Marles</Text>
        )
    }
    if(name == 2){
        Author = (
            <Text>Jesse Jen</Text>
        )
    }
    if(name == 3){
        Author = (
            <Text>Chaze Style</Text>
        )
    }

    return(
        <View style={footer}>
            <Picker style={styles.picker}
            onValueChange={(value)=>{setName(value)}}
            selectedValue={name}
            >
            <Text>by {Author}</Text>
            <Picker.Item label='Story 1' value='1'/>
            <Picker.Item label='Story 2' value='2'/>
            <Picker.Item label='Story 3' value='3'/>
            </Picker>
        
        </View>
    )
};



export default Footer;