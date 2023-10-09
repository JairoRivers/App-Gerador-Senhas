import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Padrão
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        marginTop: -30,
        textAlign: "center"
    },
    // Tela de Inicial / Login
    pages: {
        flex: 1
    },
    logins: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150
    },
    loginText: {
        marginBottom: 20,
        padding: 10,
        width: 250,
        borderWidth: 1,
    },
    buttonEntrar: {
        backgroundColor: "#000",
        width: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    buttonTextEntrar: {
        color: "#fff",
        fontSize: 16
    },

    //Tela de geração de senhas
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 30,
        width: 200,
        height: 200
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        borderRadius: 8,
        padding: 8,
    },
    titleG: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: -20,
    },
    buttonG: {
        backgroundColor: "#000",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    buttonTextG: {
        color: "#fff",
        fontSize: 20,
    },

    //Lista de Senhas
    headerList: {
        backgroundColor: "#000",
        padding: 14,
        paddingTop: 50,
        marginTop: 27
    },
    contentList: {
        flexDirection: 'row',
        margin: 20,
    },
    TextSave: {
        padding: 10,
        width: '50%',
        borderWidth: 1,
        marginRight: 8,
    },
    buttonSave: {
        backgroundColor: '#000',
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: "10%",
    },
    buttonTextSave: {
        color: '#fff',
        fontSize: 16,
    },
    lista: {
        flex: 3,
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 30,

    },
    itens: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 200
    },
    textList: {
        fontSize: 16,
        margin: 4,
        fontWeight: 'bold',
        width: "50%",
        lineHeight: 30,
    },
    bottonExcluir: {
        backgroundColor: 'red',
        color: "#fff",
        marginLeft: 25,
        padding: 5,
        borderRadius: 8,
    },

    //Histórico de Senhas
    header: {
        backgroundColor: "#000",
        padding: 14,
        paddingTop: 50,
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
        marginBottom: 5,
    },
});

export default styles;
