import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";
import { Header } from "react-native-elements";

var itemArray = new Array(9).fill("empty");
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      winMessage: "",
      isCross: false,
      loading: true
    };
  }
  drawItem = itemNumber => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber] });
    }
    this.setState({ winMessage: "" });
    this.winGame();
  };
  chooseIcons = itemNumber => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };
  IconsColor = itemNumber => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };
  resetGame = () => {
    isArray.fill("empty");
    this.setState({ winMessage: "" });
    this.forceUpdate();
  };
  winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winMessage: (itemArray[3] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winMessage: (itemArray[1] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win")
      });
      itemArray.fill("empty");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{
            text: "Tic Tac Toe by AKG",
            style: { color: "#fff", fontSize: 20, fontWeight: "bold" }
          }}
        />
        <View style={styles.container}>
          <View style={styles.grid}>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(0)}>
                  <Entypo
                    name={this.chooseIcons(0)}
                    size={50}
                    color={this.IconsColor(0)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(1)}>
                  <Entypo
                    name={this.chooseIcons(1)}
                    size={50}
                    color={this.IconsColor(1)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(2)}>
                  <Entypo
                    name={this.chooseIcons(2)}
                    size={50}
                    color={this.IconsColor(2)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(3)}>
                  <Entypo
                    name={this.chooseIcons(3)}
                    size={50}
                    color={this.IconsColor(3)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(4)}>
                  <Entypo
                    name={this.chooseIcons(4)}
                    size={50}
                    color={this.IconsColor(4)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(5)}>
                  <Entypo
                    name={this.chooseIcons(5)}
                    size={50}
                    color={this.IconsColor(5)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(6)}>
                  <Entypo
                    name={this.chooseIcons(6)}
                    size={50}
                    color={this.IconsColor(6)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(7)}>
                  <Entypo
                    name={this.chooseIcons(7)}
                    size={50}
                    color={this.IconsColor(7)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(8)}>
                  <Entypo
                    name={this.chooseIcons(8)}
                    size={50}
                    color={this.IconsColor(8)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.wintext}>{this.state.winMessage}</Text>
          <Button
            onPress={() => {
              itemArray.fill("empty");
              this.setState({ winMessage: "" });
            }}
            full
            rounded
            primary
            style={styles.btn}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Reset
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF222",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: { backgroundColor: "#eedd82" },
  row: { flexDirection: "row" },
  item: { borderWidth: 2, borderColor: "black", padding: 30 },
  wintext: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold"
  },
  btn: {
    padding: 10,
    margin: 20
  }
});
