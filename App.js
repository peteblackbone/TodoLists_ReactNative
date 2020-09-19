import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { Component, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Card } from "./src/components/Card";
import { ScrollView, TextInput } from "react-native-gesture-handler";
export default class App extends Component {
  state = {
    modalVisible: false,
    newTitle: "",
    newContent: "",
    initId: 0,
    Tasks: [],
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  onChangeTitle = (text) => {
    this.setState({ newTitle: text });
  };
  onChangeContent = (text) => {
    this.setState({ newContent: text });
  };
  AddTask = () => {
    this.state.Tasks.push({
      id: this.state.initId,
      title: this.state.newTitle,
      content: this.state.newContent,
    });
    this.setState({
      newTitle: "",
      newContent: "",
      initId: this.state.initId + 1,
    });
    this.setModalVisible(!this.state.modalVisible);
  };
  cancle = () =>{
    this.setState({
      newTitle: "",
      newContent: "",
    });
    this.setModalVisible(!this.state.modalVisible);
  }
  delete = (id) => {
    this.state.Tasks.splice(
      this.state.Tasks.findIndex((task) => task.id == id),
      1
    );
    this.setState({ Task: this.state.Task });
  };
  render() {
    const { modalVisible, newTitle, newContent } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{this.state.modalVisible}</Text>
          <Text style={styles.headerFont}>To do lists</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            {this.state.Tasks.map((list) => (
              <Card
                list={list}
                delete={() => this.delete(list.id)}
                key={list.id}
              ></Card>
            ))}
          </View>
        </ScrollView>
        <View style={styles.newTask}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ margin: 10 }}>
                <Text style={{}}>Title :</Text>
                <KeyboardAvoidingView>
                  <TextInput
                    style={{
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                    }}
                    onChangeText={(text) => this.onChangeTitle(text)}
                    value={newTitle}
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>
              <View style={{ margin: 10 }}>
                <Text>Content :</Text>
                <KeyboardAvoidingView>
                  <TextInput
                    multiline
                    numberOfLines={3}
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={(text) => this.onChangeContent(text)}
                    value={newContent}
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>
              <View style={{flexDirection:"row",marginLeft:"59%"}}>
                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#2196F3",marginRight:10 }}
                  onPress={() => {
                    this.AddTask();
                  }}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.cancle();
                  }}
                >
                  <Text style={styles.textStyle}>Cancle</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  content: {
    marginTop: 60,
    maxHeight: "100%",
    alignItems: "center",
  },
  header: {
    top: 0,
    position: "absolute",
    zIndex: 5,
    backgroundColor: "#fff",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerFont: {
    fontSize: 20,
    fontWeight: "bold",
  },
  right: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  newTask: {
    zIndex: 8,
    width: 50,
    height: 50,
    backgroundColor: "#2196F3",
    position: "absolute",
    right: 20,
    bottom: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "95%",
    height: 220,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
