import React, {FC} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screen/HomeScreen";
import OrderDelivery from "../screen/OrderDelivery";
import {COLORS, icons} from "../constants";
import {Image} from "react-native";
import Restaurant from "../screen/Restaurant";

const Tab = createBottomTabNavigator();

const BottomNavigation: FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: (({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ))
                }}
            />
            <Tab.Screen
                name='Search'
                component={HomeScreen}
                options={{
                    tabBarIcon: (({focused}) => (
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ))
                }}
            />
            <Tab.Screen
                name="Like"
                component={OrderDelivery}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.like}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={Restaurant}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;
