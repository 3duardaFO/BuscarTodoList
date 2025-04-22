import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BuscarCep() {
  const [cep,setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro:'',
    bairro:'',
    localidade:'',
    uf:'',
    estado:'',
    regiao:'',
    ddd:'',

  });

  async function buscarCep(){
    try {
      let response = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
      let dados = await response.json();
      setEndereco(dados);

    } catch (error) {
      window.alert("CEP Inválido");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu} >
        <Text style={styles.titleText}> 
          Consultor de CEP
        </Text>
        <TextInput value={cep} style={styles.textinput} onChangeText={setCep} />
        <Button  onPress={buscarCep} title='Buscar'/>
        <Text style={styles.labelText}>
          Logradouro: <Text style={styles.dataText}>{endereco.logradouro}</Text>
        </Text>
        <Text style={styles.labelText}>
          Bairro: <Text style={styles.dataText}>{endereco.bairro}</Text> 
        </Text>
        <Text style={styles.labelText}>
          Cidade: <Text style={styles.dataText}>{endereco.localidade}</Text> 
        </Text>
        <Text style={styles.labelText}>
          Estado: <Text style={styles.dataText}>{endereco.estado} </Text>
        </Text>
        <Text style={styles.labelText}>
          UF: <Text style={styles.dataText}>{endereco.uf} </Text>
        </Text>
        <Text style={styles.labelText}>
          Região: <Text style={styles.dataText}>{endereco.regiao}</Text> 
        </Text>
        <Text style={styles.labelText}>
          DDD: <Text style={styles.dataText}>{endereco.ddd} </Text>
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },menu:{
      borderWidth: 4,
      width: 320,
      height: 480,
      padding: 20,
      borderRadius: 10,
  },textinput:{
      borderWidth: 2,
      borderRadius: 5,
      color: "black",
      marginVertical:10,
      height:35,
      padding:8,
  },titleText:{
      fontSize: 24,
      marginTop:20,
      marginBottom: 40,
  },labelText:{
    marginVertical:5,
  },dataText:{
    color: '#363636',
    fontWeight: 'bold',
  }
});