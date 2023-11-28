import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator>

                {/* Экраны */}
                <Stack.Screen/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}