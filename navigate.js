import React from "react";
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";

//Компоненты
import MainDisplay from "./displays/MainDisplay";

const Stack = createStackNavigator();

export default function Navigate({clickOpenNavbar}){

    

    return(
        <NavigationContainer>
            <Stack.Navigator>

                {/* Экраны */}
                <Stack.Screen  
                    name='main'
                    component={MainDisplay}
                    options={{
                        title:'Главная',
                        headerLeft: ()=>{
                            return <Button title="III" onPress={()=>clickOpenNavbar()}/>
                        }                     
                    }}
                    
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    test: {
        width:'100%',
        borderColor: 'red',
        borderWidth: 2,
    },
  });