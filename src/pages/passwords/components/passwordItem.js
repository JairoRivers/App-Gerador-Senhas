import React from "react";
import { useState, useEffect } from 'react'

import { Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export function PasswordItem({ data, removePassword }) {

    const [hidepass, setHidePass] = useState(true)



    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data} </Text>
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => setHidePass(!hidepass)}>
                {hidepass ?
                    <Ionicons name="eye" color="#fff" size={20} />
                    :
                    <Ionicons name="eye-off" color="#fff" size={20} />
                }


            </TouchableOpacity>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#373a59",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    text: {
        color: "#fff",
    }
})
