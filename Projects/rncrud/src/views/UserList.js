import React, { useContext } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UsersContext from '../context/UsersContext';
import users from '../data/users'

const UserList = props => {

     const {state} = useContext(UsersContext)

     function getActions(user){
          return (
               <>
                    <Button
                         onPress={() => props.navigation.navigate('UserForm', user)}
                         type='clear'
                         icon={<Icon name='edit' size={25} color='oragne'/>}
                    />
                    <Button
                         onPress={() => props.navigation.navigate('UserForm', user)}
                         type='clear'
                         icon={<Icon name='delete' size={25} color='red'/>}
                    />
               </>
          )
     }
     function confirmUserDeletion(user){
          Alert.alert('Excluir usuario','Deseja exluir o usuario?',[
               {
                    text: 'Sim',
                    onPress(){
                         dispatch({
                              type: 'deleteUser',
                              payload: user,
                         })
                    }
               },{
                    text: 'Não'
               }
          ])
     }

     function getUserItem({ item: user }) {
          return (
               <ListItem 
                    key={user.id} 
                    bottomDivider 
                    onPress={() => props.navigation.navigate('UserForm', user)}
               >
                    <Avatar source={{uri: user.avatarUrl}}/>
                    <ListItem.Content>
                         <ListItem.Title>{user.name}</ListItem.Title>
                         <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Button
                         onPress={() => { props.navigation.navigate('UserForm', user) }}
                         type="clear"
                         icon={<Icon name="edit" size={25} color="orange" />}
                    />
                    <Button 
                         onPress={() => {confirmUserDeletion(user)}}
                         type="clear"
                         icon={<Icon name="delete" size={25} color="red"/>}
                    />
               </ListItem>
          )
     }

     return (
          <View>
               <FlatList
                    keyExtractor={user => user.id.toString()}
                    data={state.users}
                    renderItem={getUserItem}
               />
          </View>
     );
}

export default UserList;