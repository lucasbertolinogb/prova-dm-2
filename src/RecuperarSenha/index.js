import { Text , TouchableOpacity, View , TextInput, SafeAreaView} from "react-native";
import styles from "../components/style";
import { Link } from '@react-navigation/native';
import React, { useState } from 'react';

export default function RecuperarSenha () {
    
    const [text, onChangeText] = React.useState('Email genérico');
    const [number, onChangeNumber] = React.useState('');

    return(
        <View style={styles.container}>
            <SafeAreaView>
                    <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                     />
                     <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Senha genérica"
                    keyboardType="numeric"
                    />
            </SafeAreaView>

            <TouchableOpacity style={styles.button}>
                <Link to={{screen: "login"}}>Logar</Link> 
            </TouchableOpacity>


        </View>
    );
}
