import React, { useState } from 'react';
import { View, Text,Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/Budget_Slice';
import { input_ScreenStyles } from '../style/InputScreenStyle';

const InputScreen= ({ navigation }) => {
  const dispatch = useDispatch();
  const [Name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const save = () => {
         if (!Name.trim() || !plannedAmount.trim() || !actualAmount.trim()) {
           Alert.alert('Please fill all the fields');
           return;
         }
         if (navigation) {
           dispatch(addItem({ name: Name, plannedAmount, actualAmount }));
           navigation.navigate('List');
         }
       };

  const show = () => {
    if (navigation) {
      navigation.navigate('List');
    }
  };

  return (
    <View style={input_ScreenStyles.container}>
      <Text style={input_ScreenStyles.title}>Add New Item</Text>

      <TextInput
        label="Name of Item"
        value={Name}
        onChangeText={(text) => setName(text)}
        style={input_ScreenStyles.input}
      />

      <TextInput
        label="Planned Expenditure"
        value={plannedAmount}
        onChangeText={(text) => setPlannedAmount(text)}
        keyboardType="numeric"
        style={input_ScreenStyles.input}
      />

      <TextInput
        label="Actual Expenditure"
        value={actualAmount}
        onChangeText={(text) => setActualAmount(text)}
        keyboardType="numeric"
        style={input_ScreenStyles.input}
      />

      <Button mode="contained" onPress={save} style={input_ScreenStyles.button}>
        Save
      </Button>

      <Button mode="contained" onPress={show} style={input_ScreenStyles.button}>
        Home
      </Button>
    </View>
  );
};

export default InputScreen;
