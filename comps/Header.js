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


{titleTxt}
<Button
  title='Edit'
  onPress={() => {
  SetInputStatus(!inputStatus);
  }}
/>

{showInputText}

);
}

export default Header;
