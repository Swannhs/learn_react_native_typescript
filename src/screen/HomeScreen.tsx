import React, {FC} from 'react';
import {Button, Text, View} from "react-native";

export interface HomeScreeTypes {
    navigation: any;
}

const HomeScreen: FC<HomeScreeTypes> = ({navigation}) => {
    return (
        <View>
            <Text>Hello from home screen</Text>
            <Button
                title={'Go to Order'}
                onPress={() => navigation.navigate('Order')}
            />
        </View>
    );
};

export default HomeScreen;
