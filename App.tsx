import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {

  const [age, setAge] = useState<string>("")

  // Hyväksyy vain 0-9 -merkit (jos tyhjä tai muu --> null)
  const ageAsNumber: number | null = /^\d+$/.test(age) ? parseInt(age, 10) : null

  // Jos null --> näytetään nollat
  const lowerLimit = ageAsNumber !== null ? (220 - ageAsNumber) * 0.65 : 0
  const upperLimit = ageAsNumber !== null ? (220 - ageAsNumber) * 0.85 : 0



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headline}>Heart Rate Limits Calculator</Text>
      <Text style={styles.subline}>Enter your age:</Text>
      <TextInput
        keyboardType='number-pad'
        inputMode='numeric'
        style={styles.inputField}
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.result}>Lower limit: {lowerLimit.toFixed(2)} bpm </Text>
      <Text style={styles.result}>Upper limit: {upperLimit.toFixed(2)} bpm </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 150,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 30,
  },

  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  subline: {
    fontSize: 15,
    marginBottom: 15,
  },

  inputField: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },

  result: {
    fontSize: 15,
  }

});
