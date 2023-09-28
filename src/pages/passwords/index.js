import { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hocks/useStorage'
import styles from '../../estilos/styles'

import { PasswordItem } from './components/passwordItem'

export function Passwords() {
    const [listaPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }

        loadPasswords();

    }, [focused])

    async function hadleDeletePassword(item) {
        Alert.alert(
            'Aviso',
            'Senha Excluída'
        )
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Histórico de senhas salvas</Text>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={styles.botton} onPress={toggleVisibility}>
                    <Text style={styles.bottonText}>
                        {isVisible ? 'Clique para Ocultar' : 'Clique para Revelar'}
                    </Text>
                </TouchableOpacity>

                {isVisible && (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            style={{ flex: 1, paddingTop: 14 }}
                            data={listaPasswords}
                            keyExtractor={(item) => String(item)}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <PasswordItem data={item} removePassword={() => hadleDeletePassword(item)} />
                                </View>
                            )}
                        />
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}