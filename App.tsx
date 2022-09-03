import React, {FC} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./src/screen/HomeScreen";
import OrderDelivery from "./src/screen/OrderDelivery";

const Stack = createNativeStackNavigator();

const App: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Order'} component={OrderDelivery}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
