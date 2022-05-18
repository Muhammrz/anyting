import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: '#000',
      marginHorizontal: 5,
      marginTop: 5,
      borderRadius: 8,
      flexDirection: 'row',
      overflow: 'hidden'
    },
    itemSubContainer:{
      flex:1,
      height: 60,
      paddingLeft: 10,
      flexDirection:'row',
      alignItems:'center'
    },
    titleItem: {
      fontSize: 16,
      fontWeight:'bold',
      textTransform: 'uppercase'
    },
    btnIcon: {
      height: 60,
      justifyContent:'center',
      width: 45,
      alignItems:'center'
    }
})

export const colorStop = '#f00';

export default styles;