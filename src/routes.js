import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, StyleSheet, Text, View, BackHandler } from 'react-native'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'
import { List } from './pages/listSenhas'
import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

/* const exit = () => {
    BackHandler.exitApp();
}; */

export function Routes() {

    return (
        <View style={styles.content}>
            {/* <TouchableOpacity style={styles.button} onPress={exit}>
                <Text style={styles.buttonText}>Sair do APP</Text>
            </TouchableOpacity> */}

            <Tab.Navigator>
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => {
                            if (focused) {
                                return <Ionicons size={size} black={color} name="home" />
                            }
                            return <Ionicons size={size} color={color} name="home-outline" />
                        }
                    }}
                />
                <Tab.Screen
                    name="lista"
                    component={List}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => {
                            if (focused) {
                                return <Ionicons size={size} black={color} name="documents" />
                            }
                            return <Ionicons size={size} color={color} name="documents-outline" />
                        }
                    }}
                />
                <Tab.Screen
                    name="passwords"
                    component={Passwords}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => {
                            if (focused) {
                                return <Ionicons size={size} black={color} name="lock-closed" />
                            }
                            return <Ionicons size={size} color={color} name="lock-closed-outline" />
                        }
                    }}
                />
            </Tab.Navigator>

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    button: {
        width: 100,
        height: 50,
        alignItems: "center",
        marginTop: 30,
        marginLeft: 10
    },
    buttonText: {
        fontSize: 16
    }
});