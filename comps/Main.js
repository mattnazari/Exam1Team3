import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import Story from './Story';
import Footer from './Footer';
import Menu from './Menu';

const Main = () => {

    return (
      <View style={{flex:1}}>
        <Menu/>
        <Header/>
        <Story/>
        <Footer/>
      </View>
    )
  };

  export default Main;
