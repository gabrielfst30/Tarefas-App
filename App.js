import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

//importando aquitvo Tarefa.js
import Tarefa from "./src/Tarefa";

export default function App() {
  const [tarefa, setTarefa] = useState('')

  //armazenar lista de tarefas
  const [lista, setLista] = useState([
   
  ])

  function handleButtonAdd(){
    //verifica se a tarefa foi inserida vazia
    if(tarefa === ''){
      return alert("Digite algo antes de inserir uma tarefa!");
    }

    //os dados que serão inseridos
    const dados = {
      key: Date.now(),
      item: tarefa
    }

    //old array pega os itens que ja tenho e tb insere os itens que eu quero passar que no caso é a const dados
    setLista(oldArray => [dados, ...oldArray])

    //zerando input após ter add o item
    setTarefa('')

  }

  function handleButtonDelete(item){
    console.log(item)

    let filtroItem = lista.filter((tarefa) => {
      return(tarefa.item !== item)
    })

    setLista(filtroItem)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Tarefas</Text>

        <View style={styles.containerInput}>
          <TextInput placeholder="Digite sua tarefa..." 
          style={styles.input}
          value={tarefa} //recebendo a useState tarefa para armazenar uma tarefa
          onChangeText={(text) => setTarefa(text)} //setando a tarefa armazenada
          
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={handleButtonAdd}>
            <FontAwesome name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <FlatList
         data={lista}
         keyExtractor={(item) => item.key}
         renderItem={ ({ item }) => <Tarefa data={item} deleteItem={ () => handleButtonDelete(item.item) } /> }
         style={styles.lista}
        />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: "#22272e",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "5%",
    paddingStart: "5%",
    marginBottom: 12,
  },
  containerInput: {
    flexDirection: "row",
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  input: {
    width: "75%",
    height: 44,
    backgroundColor: "#FBFBFB",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonAdd: {
    width: "15%",
    height: 44,
    backgroundColor: "#73f7ff",
    marginLeft: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  lista: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingStart: '4%',
    paddingEnd: '4%',  
  },
});
