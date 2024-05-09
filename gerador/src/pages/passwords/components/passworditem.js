import { useState, React } from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons"

export function PasswordItem({ data, removePassword }) {
    const [isButtonActive, setIsButtonActive] = useState(false);

    const toggleButton = () => {
        setIsButtonActive(!isButtonActive);
    };

    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={[styles.text, isButtonActive && styles.hiddenText]}>{data}</Text>
            <Pressable onPress={toggleButton} style={styles.button}>
                <Ionicons name={isButtonActive ? "eye-off" : "eye"} size={24} color="#FFF" />
            </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0e0e0e',
        padding:14,
        width: '100%',
        marginBottom:14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color: "#FFF"
    },
    hiddenText: {
        color: "transparent"
    },
    button: {
        padding: 8
    }
});
