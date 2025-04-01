import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import _tarefa from "../types/tarefa";

export default function Tarefa(props:{
    dados:_tarefa, 
    handleDeletePress: any
}){
    return <View style={styles.view}>
        <Text style={styles.text}>{props.dados.texto}</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => props.handleDeletePress(props.dados.id)}>
                <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
        </View>;
}

const styles = StyleSheet.create({
    view:{
        borderWidth: 1.5,
        borderColor: "#ccc",
        padding: 10,
        margin: 5,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    text: {
        fontSize: 16,
        fontFamily: 'Courier New',
        color: 'black',
    },
    button: {
        backgroundColor: "rgb(255, 112, 86)",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
    },
    buttonText: {
        color: "white",
        fontFamily: 'Courier New',
    }
})