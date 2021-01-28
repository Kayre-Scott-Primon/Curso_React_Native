// exibir uma lista no JSX
// usando uma forma masi manual

import React, { Profiler } from 'react';
import { Text } from 'react-native'
import estilo from '../estilo';
import produtos from './produtos'

export default props => {
     function lista () {
          return produtos.map(p => {
               // a função map recebe uma função que pode ser recebida cada um dos produtos e manipula-los
               // sempre que trabalha-se com lista, é necessario atribuir uma key para item da lista
               return <Text key={p.id} style={estilo.fonteG}>{p.id}) {p.nome} tem R$ {p.preco}</Text>
          })
     }
     return (
          <>
               <Text style={estilo.fonteG}> Lista de produtos: </Text>
               {lista()}
          </>
     )
}