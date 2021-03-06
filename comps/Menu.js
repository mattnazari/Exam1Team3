import React, {useState} from 'react';
import {View, Image, Switch, Picker, Text} from 'react-native';
import styles from '../styles/MenuStyles';

const Menu = () => {

return (
    <View style={styles.Menu}>
        <Image
      style={{width: 45, height: 50}}
      source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}}/>
    <View style={styles.buttons}>
       <Text>Header</Text>
            <Switch style={styles.switch}/>
        <Text>Story</Text>
            <Switch style={styles.switch}/>
        <Text>Footer</Text>
            <Switch style={styles.switch}/>
    </View>

    <View>
        <Picker
            
             style={{height: 50, width: 100}}
            
            >
            <Picker.Item label="Theme1" value="theme1" />
            <Picker.Item label="Theme2" value="theme2" />
            <Picker.Item label="Theme3" value="theme3" />
        </Picker>
    </View>
</View>
)
};

export default Menu;

