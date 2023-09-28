import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Clipboard from 'expo-clipboard'

import styles from '../../estilos/styles';

export function List(index) {
    const [plataforma, setPlataforma] = useState('');
    const [senha, setSenha] = useState('');
    const [senhasSalvas, setSenhasSalvas] = useState([]);

    useEffect(() => {
        loadSavedPasswords();
    }, [])

    const loadSavedPasswords = async () => {
        try {
            const savedPasswordsJSON = await AsyncStorage.getItem('senhasSalvas');
            if (savedPasswordsJSON !== null) {
                setSenhasSalvas(JSON.parse(savedPasswordsJSON));
            }
        } catch (error) {
            console.error('Erro carregar senhas salvas: ', error);
        }
    }

    const savePasswordsToStorage = async (passwords) => {
        try {
            await AsyncStorage.setItem('senhasSalvas', JSON.stringify(passwords));
        } catch (error) {
            console.error('Erro ao salvar senha: ', error);
        }
    }

    const save = () => {
        if (plataforma.trim() === '' || senha.trim() === '') {
            return;
        }
        const maxLengthPlataforma = 11;
        const maxLengthSenha = 11;

        if (plataforma.length > maxLengthPlataforma || senha.length > maxLengthSenha) {
            Alert.alert(
                'Erro',
                `Plataforma e senha devem ter no máximo ${maxLength} caracteres.`,
            );
            return;
        }

        const novaSenha = {
            plataforma: plataforma,
            senha: senha,
        };

        const updatedPasswords = [...senhasSalvas, novaSenha];
        setSenhasSalvas(updatedPasswords);

        // Save the updated passwords array to AsyncStorage
        savePasswordsToStorage(updatedPasswords);

        setPlataforma('');
        setSenha('');
    }

    const deleteItem = (index) => {
        const updatedPasswords = [...senhasSalvas];
        updatedPasswords.splice(index, 1); // Remove o item na posição do índice
        setSenhasSalvas(updatedPasswords);

        // Atualize o AsyncStorage após a exclusão
        savePasswordsToStorage(updatedPasswords);
    }

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
        Alert.alert('Copiado', `${text} foi copiado para a área de transferência.`);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerList}>
                <Text style={styles.title}>Senhas Salvas</Text>
            </View>
            <View style={styles.contentList}>
                <TextInput
                    placeholder="Plataforma"
                    style={styles.TextSave}
                    onChangeText={(text) => setPlataforma(text)}
                    value={plataforma}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.TextSave}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonSave} onPress={save}>
                    <Text style={styles.buttonTextSave}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lista}>
                <ScrollView style={{ flex: 1 }}>
                    {senhasSalvas.map((item, index) => (
                        <View key={index} style={styles.itens} >
                            <Text style={styles.textList} onPress={() => copyToClipboard(item.plataforma)}>
                                {item.plataforma}:
                            </Text>
                            <Text style={styles.textList} onPress={() => copyToClipboard(item.senha)}>
                                {item.senha}
                            </Text>
                            <TouchableOpacity onPress={() => deleteItem(index)}>
                                <Text style={styles.bottonExcluir}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

            </View>
        </View >
    );
}