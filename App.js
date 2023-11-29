import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Компаненты
import MainStack from './navigate'
import NavBar from './components/NavBar';
import { useState } from 'react';

export default function App() {

  //Хранит открыт или закрыт navbar
  const [openNavBar, setOpenNavBar] = useState(false)

  //Функция управления открытием и закрытием navbar
  const clickOpenNavbar = ()=>{
    setOpenNavBar(!openNavBar)
  }

  return (
    <View style={styles.container}>
      <MainStack clickOpenNavbar={clickOpenNavbar     /*Функция управлением открытия и закрытия navbar */}/>
      <NavBar 
        openNavBar={openNavBar            /*Передача положения navbara */}
        clickOpenNavbar={clickOpenNavbar  /*Функция управлением открытия и закрытия navbar */}   
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2
  },
});
