import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, StyleSheet, Text, View, BackHandler } from 'react-native'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'
import { List } from './pages/listPasswords'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <View style={{ flex: 1 }}>
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