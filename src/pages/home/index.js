import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'
import styles from '../../estilos/styles';

let charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#"

export function Home() {
    const [size, setSize] = useState(8)
    const [passwordValue, setPasswordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    function generatePassword() {
        let password = "";

        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        setPasswordValue(password)
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/padlock.png")}
                style={styles.logo}

            />
            <Text style={styles.titleG}> Senha de {size} caracteres </Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={10}
                    maximumTrackTintColor="#ff0000"
                    minimumTrackTintColor="#000"
                    thumbTintColor="#000"
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}

                />

            </View>

            <TouchableOpacity style={styles.buttonG} onPress={generatePassword}>
                <Text style={styles.buttonTextG}>Gerar senha</Text>
            </TouchableOpacity>


            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>

        </View>
    );
}
