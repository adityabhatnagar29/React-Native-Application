import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, List, Title } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectItems } from '../store/Budget_Slice';
import { style } from '../style/ListScreenStyle';

const ListScreen = ({ navigation }) => {
  const items = useSelector(selectItems);

  return (
    <View style={style.container}>
      <List.Section>
        <List.Subheader style={style.title}>Budget Entry Listing</List.Subheader>
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
            <Card key={index} style={[style.card, { marginBottom: 16 }]}>
              <Card.Content>
                <Title>{item.name}</Title>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text style={style.noItemsText}>No items added</Text>
        )}
      </List.Section>

      <Button
        mode="contained"
        style={style.addButton}
        onPress={() => navigation.navigate('ItemInput')}
      >
        Add New Item
      </Button>
    </View>
  );
};

export default ListScreen;
