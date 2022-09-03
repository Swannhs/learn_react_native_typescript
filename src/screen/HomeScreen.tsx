import React, {FC} from 'react';
import {Text, View} from "react-native";

export interface HomeScreeTypes {
}

const HomeScreen: FC<HomeScreeTypes> = () => {
    return (
        <View>
            <Text>Hello from home screen</Text>
        </View>
    );
};

export default HomeScreen;
