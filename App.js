import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [tarefa, setTarefa] = useState('')

  function handleButtonAdd(){
    alert(tarefa)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Tarefas</Text>

        <View style={styles.containerInput}>
          <TextInput placeholder="Digite sua tarefa..." 
          style={styles.input}
          value={tarefa} //recebendo a useState tarefa para armazenar uma tarefa
          onChangeText={(tarefa) => setTarefa(tarefa)} //setando a tarefa armazenada
          
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={handleButtonAdd}>
            <FontAwesome name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
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
});
