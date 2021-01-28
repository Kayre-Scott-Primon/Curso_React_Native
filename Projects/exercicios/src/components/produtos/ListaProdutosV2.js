// exibir uma lista no JSX
// usando recursos Reac native

import React, { Profiler } from 'react';
import { FlatList, Text } from 'react-native'
import estilo from '../estilo';
import produtos from './produtos'

export default props => {
     const produtorRender = ({item: p}) => {
          return (
               <Text>{p.id}) {p.nome} - R${p.preco}</Text>
          )
     } 
     return (
          <>
               <Text style={estilo.fonteG}> Lista de produtos V2: </Text>
               <FlatList
                    data={produtos}     // dados, ou seja, uma lista
                    keyExtractor={i => `${i.id}`} // recebe uma fução que tem como parametro o item, que serve para retornar o key
                         // render item serve para tratar com o front
                    renderItem={produtorRender}
               />
          </>
     )
}