import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import _tarefa from '../types/tarefa';
import Tarefa from '../components/Tarefa';
import React from 'react';
import BuscarCep from './BuscarCep';


export default function ToDoScreen({navigation}) {
  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa(){
    if(novaTarefa == ''){
      alert("Insira um texto");
      return;
    }
    let tarefa : _tarefa = {
      id : tarefas.length+1,
      texto : novaTarefa
    };
    setTarefas([...tarefas, tarefa]);
  }

  function mostrarTarefas(){
    let saida = tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir} />);
    return saida;
  }

  function excluir(id :number){
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);
  }

  return (
    <View style={styles.container} key="main">
            <Button title='Buscar Cep' color='gray' onPress={() => navigation.navigate("BuscarCep")}/>
      <Text style={styles.title}>To-do List</Text>
      <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa}/>
      <TouchableOpacity style={styles.button} onPress={adicionarTarefa}>
        <Text style={styles.buttonText}>Adicionar tarefa</Text>
      </TouchableOpacity>
      {mostrarTarefas()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,222, 173)',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Courier New',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input:{
    backgroundColor: '#ffffff',
    height: 50,
    width: '45%',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    fontFamily: 'Courier New',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Courier New',
  }
});
