// aninhamento de componentes e de forma dinamica

import React from 'react';
import estilo from '../estilo';
import Membro from './Membro';
import { Text } from 'react-native'

export default props => {

     return (
          <>
               <Text style={estilo.fonteG}> Membros da Familia: </Text>
               {/*  // assim fica de forma fixa
               <Membro nome='Ana' sobrenome='Silva'/>
               <Membro nome='Joana' sobrenome='Silva'/>
               */}
               {props.children     /* desta forma pega-se os filhos passados dentro do componente onde é estanciado */}
               <Text>{'\n'}</Text>
          </>
     )
}