import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from '../styles/HeaderStyles'

function Header(){
  const [text, setText] = useState("");
  const [title, setTitle] = useState("A New Title");

  return(
    <View style={styles.header}>
      <Text style={{fontSize:30}}>{title}</Text>
      <TextInput
        placeholder="new title"
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button
      style={styles.button}
      title="edit"
      onPress={()=>{
        setTitle(text);
      }}
      />
    </View>

  )
}

export default Header;
