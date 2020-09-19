import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.list.id,
      title: this.props.list.title,
      content: this.props.list.content,
    };
  }
  onChangeTitle = (text) => {
    this.setState({ newTitle: text });
  };
  onChangeContent = (text) => {
    this.setState({ newContent: text });
  };
  onDelete = (index) => {
    this.props.delete(index);
  };
  render() {
    return (
      <View style={styles.cardContainer} key={this.props.id}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableOpacity onPress={this.props.delete}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <Text>{this.state.content}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    padding: 10,
    width: "95%",
    height: 150,
    backgroundColor: "#ffe",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    width: "95%",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 5,
  },
});
