import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from '../styles/HeaderStyles';

function Header() {
  const [titleTxt, SetTitleTxt] = useState('The Story of My Life');
  const [inputStatus, SetInputStatus] = useState(false);

  var showInputText = null;
  if (inputStatus == true) {
    showInputText = (
      <TextInput
        onChangeText={txt => {
          SetTitleTxt(txt);
        }}
        value={titleTxt}
        placeholder="The Story of My Life"
      />
    );
  } else {
    showInputText = null;
  }

  return (
    <View style={styles.bg}>
      <View style={styles.rowContainer}>
        <Text style={styles.headerTxt}>{titleTxt}</Text>
        <Button
          title="Edit"
          onPress={() => {
            SetInputStatus(!inputStatus);
          }}
        />
      </View>
      {showInputText}
    </View>
  );
}

export default Header;
