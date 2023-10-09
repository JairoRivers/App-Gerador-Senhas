import { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Animated, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import styles from './src/estilos/styles';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0))

  const [logo] = useState(new Animated.ValueXY({ x: 200, y: 200 }))

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false

      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false

      })
    ]).start();

  }, []);


  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 75,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 75,
        duration: 100,
        useNativeDriver: false

      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
        useNativeDriver: false

      }),
      Animated.timing(logo.y, {
        toValue: 200,
        duration: 100,
        useNativeDriver: false

      })
    ]).start();
  }

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
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Animated.Image
            style={{
              width: logo.x, height: logo.y,
              marginTop: 120
            }}
            source={require("./src/assets/padlock.png")}
          />
          <Animated.View style={[
            styles.logins,
            {
              opacity: opacity,
              transform: [
                { translateY: offset.y }
              ]
            }
          ]}>
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
          </Animated.View>

        </View>
      )}
    </View>
  );
};