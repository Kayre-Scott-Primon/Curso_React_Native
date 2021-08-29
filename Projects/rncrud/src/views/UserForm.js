import React, { useContext, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UsersContext';

const UserForm = ({route, navigation}) => {

  const [user, setUser] = useState(route.params ? route.params : {})
  const { dispatch } = useContext(UsersContext)

  return (
    <View style={styles.form}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={name => setUser({...user, name})}
        placeholder='Informe o nome'
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={email => setUser({...user, email})}
        placeholder='Informe o email'
        value={user.name}
      />
      <Text>URL do avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder='Informe a url do avatar'
        value={user.name}
      />
      <Button
        title='Salvar'
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user
          })
          navigation.goBack()
        }}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  form: {
    padding: 12
  }
})

export default UserForm;