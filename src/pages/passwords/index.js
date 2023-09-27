import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hocks/useStorage'


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
        alert("Senha Excluída")
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
                    <FlatList
                        style={{ flex: 1, paddingTop: 14 }}
                        data={listaPasswords}
                        keyExtractor={(item) => String(item)}
                        renderItem={({ item }) => <PasswordItem data={item} removePassword={() => hadleDeletePassword(item)} />}
                    />
                )}

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#000",
        padding: 14,
        paddingTop: 50,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        marginTop: -30,
        marginLeft: "17%"
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    },
    botton: {
        backgroundColor: "#373a59",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 10,

    },
    bottonText: {
        fontSize: 18,
        marginTop: 5,
        color: "#fff",
        marginBottom: 5
    }

})