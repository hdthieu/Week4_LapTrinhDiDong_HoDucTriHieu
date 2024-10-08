import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [diceRolls, setDiceRolls] = useState([]);
  const [arr, setArr] = useState([0, 1, 2]);

  const arrIncrease = () => {
    arr.map((item) => {
      return item + 1;
    });
  };
  return (
    <View>
      <View>
        <Text style={{ fontSize: 30 }}>Câu 1</Text>
        <Button
          title="Tăng số"
          onPress={() => {
            setDiceRolls([...diceRolls, diceRolls.length]);
          }}
        />

        {diceRolls.map((count, index) => (
          <Text style={{ fontSize: 24 }} key={index}>
            {count}
          </Text>
        ))}
      </View>

      <View>
        <Text style={{ fontSize: 30 }}>Câu 2</Text>
        <Button
          title="Tăng số trong mảng"
          onPress={() => {
            setArr();
          }}
        />
        {arr.map((item, index) => (
          <Text style={{ fontSize: 24 }} key={index}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

