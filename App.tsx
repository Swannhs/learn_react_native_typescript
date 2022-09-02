import React, {FC} from 'react';
import {Image, Text, View} from "react-native";

const App: FC = () => {
    return (
        <View>
            <Text>Swann</Text>
            <Image
                style={{
                    height: 30,
                    width: 40
                }}
                source={{
                uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&dl=freestocks-9UVmlIb0wJU-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
            }}/>
            <Text>This is footer</Text>
        </View>
    );
};

export default App;
