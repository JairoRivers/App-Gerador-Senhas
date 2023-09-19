import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hocks/useStorage'


import { PasswordItem } from './components/passwordItem'

export function Passwords() {
    const [listaPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();


    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }

        loadPasswords();

    }, [focused])

    async function hadleDeletePassword(item) {
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Histórico de senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listaPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} removePassword={() => hadleDeletePassword(item)} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        marginTop: -30,
        marginLeft: "25%"
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }

})