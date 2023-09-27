import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import styles from './src/estilos/styles';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Implementar autentificação no futuro
  const handleLogin = () => {
    if (username === '' && password === '') { //Retirei senha padrão para testes
      setIsLoggedIn(true);
    } else {
      alert('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.pages}>
      {isLoggedIn ? (
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      ) : (
        <View style={{ flex: 1 }}>
          <Image
            source={require("./src/assets/padlock.png")}
            style={styles.logoInicial}
          />
          <View style={styles.logins}>
            <TextInput
              placeholder="Nome de usuário"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.loginText}
            />
            <TextInput
              placeholder="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              style={styles.loginText}
            />
            <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
              <Text style={styles.buttonTextEntrar}>Entrar</Text>
            </TouchableOpacity>
          </View>

        </View>
      )}
    </View>
  );
};