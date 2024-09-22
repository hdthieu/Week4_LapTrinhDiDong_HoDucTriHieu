import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
} from "react-native";
import { Card } from "react-native-paper";

export default function App() {
  const [price, setPrice] = useState([]);

  return (
    <View style={{ padding: 25 }}>
      <View style={styles.header}>
        <View>
          <Image style={styles.image} source={require("./assets/anh3.png")} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flex: 3,
            }}
          >
            <Text style={styles.title_header}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.title2_header}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>141.800 đ</Text>
            <Text style={styles.price_discount}>141.800 đ</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "space-between" }}></View>
        </View>
      </View>
      <View>
        <Text>Mã giảm giá đã lưu</Text>
        <Text>Mã giảm giá đã lưu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 104,
    height: 127,
  },
  header: {
    flex: 1,

    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  title_header: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: 700,
  },
  title2_header: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: 700,
  },
  price: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 700,
    color: "#EE0D0D",
  },
  price_discount: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: 700,
    color: "#808080",
  },
});
