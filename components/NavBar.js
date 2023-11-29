import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function NavBar({openNavBar, clickOpenNavbar}) {

  let leftIndent = '-70%'
  {openNavBar ? leftIndent = '0%' : leftIndent = '-70%' }


  return (
    <View style={[styles.container, {left: leftIndent}]}>
      
      <TouchableOpacity style={styles.btnClose}  onPress={()=>clickOpenNavbar()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 2,
    position: 'absolute',
    width: '70%',
    height: '100%',
    backgroundColor: '#228B22',
  },

  btnClose: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    right: 0,
    top: 25
  }
});