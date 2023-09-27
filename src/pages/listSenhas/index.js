import { useState } from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';


export function List() {

    const [plataforma, setPlataforma] = useState('');
    const [senha, setSenha] = useState('');
    const [senhasSalvas, setSenhasSalvas] = useState([]);

    const save = () => {
        if (plataforma.trim() === '' || senha.trim() === '') {
            return;
        }

        const novaSenha = {
            plataforma: plataforma,
            senha: senha,
        };

        setSenhasSalvas([...senhasSalvas, novaSenha]);
        setPlataforma('');
        setSenha('');
    };



    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Senhas Salvas</Text>
            </View>
            <View style={styles.content}>


                <TextInput
                    placeholder="Plataforma"
                    style={styles.loginText}
                    onChangeText={(text) => setPlataforma(text)}
                    value={plataforma}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.loginText}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>

            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={save}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.lista}>
                {senhasSalvas.map((item, index) => (
                    <Text key={index}>
                        Plataforma: {item.plataforma}, Senha: {item.senha}
                    </Text>
                ))}
            </View>



        </View>


    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#000",
        padding: 14,
        paddingTop: 50,
        marginTop: 27
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        marginTop: -30,
        marginLeft: "30%"
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    loginText: {
        padding: 10,
        width: '50%',
        borderWidth: 1,
        marginRight: 8,
    },
    button: {
        backgroundColor: '#000',
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: "10%",
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    lista: {
        alignItems: 'center',
        justifyContent: "flex-start",
        marginBottom: 300
    }
});