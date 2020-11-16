import * as React from 'react';
//import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Image,
  
  Button
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import { Onbording, DestinationDetail } from "./screens"
import Tabs from "./navigation/tabs";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {COLORS, icons, SIZES} from "./constants";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
            initialRouteName={'Onbording'}
            >
                {/*Screens*/}

                <Stack.Screen
                    name="Onbording"
                    component={Onbording}
                    options={{
                        title:null,
                        headerStyle: {
                            backgroundColor: COLORS.wthite
                        },
                        headerLeft:null,
                        headerRight: () => {
                            <TouchableOpacity
                            style={{marginRight: SIZES.padding }}
                            onPress={() => console.log("Pressed")}
                            >
                                
                                <Image
                                source={icons.barMenu}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    
                                }}
                                />
                            </TouchableOpacity>
                        }
                    }}
                />

                <Stack.Screen
                    name="DestinationDetail"
                    component={DestinationDetail}
                    options={{ headerShown: false }}
                />
                {/*tabs*/}
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding}}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                />

                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Menu")}
                            >
                                <Image
                                    source={icons.barMenu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return <App />;
}