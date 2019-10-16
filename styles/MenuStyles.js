import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({

    menu: {
        backgroundColor:'#8888ae',
        position:'absolute',
        left:0,
        padding:10,
        width: 40,
        height:'100%'
    },

    buttons: {
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    switch: {
        width:30,
    },
    
    text:{
        color:'blue'
    },

});

export default styles;