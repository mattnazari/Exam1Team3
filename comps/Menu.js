import React, {useState} from 'react';
import {View, Image, Switch, PickerIOS} from 'react-native';
import styles from '../styles/MenuStyles';

const Menu = () => {

    const [msg, setMsg] = useState('');

    return (
        <View style={{width:50, height:'100%'}}>
            <Image
          style={{width: 45, height: 50}}
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}}/>
        </View>
        <View style={styles.buttons}>
           <Text>Header</Text>
                <Switch style={styles.switch}/>
            <Text>Story</Text>
                <Switch style={styles.switch}/>
            <Text>Footer</Text>
                <Switch style={styles.switch}/>
        </View>

        <View>
            <PickerIOS 
                selectedValue={this.state.language}
                 style={{height: 50, width: 100}}
                onValueChange={(itemValue) =>
                this.setState({language: itemValue})
                }>
                <Picker.Item label="Theme1" value="theme1" />
                <Picker.Item label="Theme2" value="theme2" />
                <Picker.Item label="Theme3" value="theme3" />
                
            </PickerIOS>
        </View>
    )
};

export default Menu;