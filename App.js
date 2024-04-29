import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Transaction from './screens/Transaction/Transaction';
import { Text, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"

const Stack = createNativeStackNavigator();

function App() {
    const [fontLoaded, fontError] = useFonts({
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    });

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerTitleAlign: "center",
                        headerLeft: () => (
                            <TouchableOpacity>
                                <AntDesign name="arrowleft" style={{ fontSize: 24 }} />
                            </TouchableOpacity>
                        ),
                    }}
                    name="Transaction"
                    component={Transaction}
                />
                {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="OnboardingScreen"
                    component={OnboardingScreen}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="LoginScreen"
                    component={LoginScreen}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="RegisterScreen"
                    component={RegisterScreen}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;