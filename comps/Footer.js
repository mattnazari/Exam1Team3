import React, {useState} from 'react';
import {View, Text, Picker} from 'react-native';
import styles from '../styles/FooterStyles';


const Footer = ()=>{

    const [name, setName] = useState('author full name')

    return(
        <View style={[styles.container]}>
            <Text style={styles.byText}>by</Text>
            <Text style={styles.titleText}>{name}</Text>
            <Picker style={styles.picker}
            onValueChange={(value)=>{setName(value)}}
            selectedValue={name}
            >

            <Picker.Item label='Story 1' value=' Sam Marles'/>
            <Picker.Item label='Story 2' value=' Jesse Jen'/>
            <Picker.Item label='Story 3' value=' Chaze Style'/>
            </Picker>
        
        </View>
    )
};


export default Footer;