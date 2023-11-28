import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";

//Компоненты
import MainDisplay from "./displays/MainDisplay";

const Stack = createStackNavigator();

export default function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator>

                {/* Экраны */}
                <Stack.Screen
                    name='main'
                    component={MainDisplay}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}