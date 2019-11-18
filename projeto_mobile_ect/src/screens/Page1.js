import React from 'react';
import { View, Button, Text } from 'react-native';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 15, borderRadius: 25 }}>

    <Button 
      title=" Cadastrar Livros "
      onPress={() => navigation.navigate('Cadastro') }
    />
  </View>
);
 export default Home;