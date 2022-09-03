import React, {FC} from 'react';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from "./src/navigation/BottomNavigation";

const Stack = createNativeStackNavigator();

const App: FC = () => {
    return (
        <NavigationContainer theme={DefaultTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Navigation'
            >
                <Stack.Screen name='Navigation' component={BottomNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
