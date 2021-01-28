// renderização coindional, ou seja, exibi no front so se satisfazer alguma condição
// renderização com componente aninhado que nao existe JSX apenas ira manipular os que estao dentro do mesmo,
// sendo esses que estao internos acessados atraves de props.children

import React from 'react';
import { Text } from 'react-native'
import estilo from './estilo';
import If from './If'

export default props => {
     // qualquer coisa que avalia que a propriedade usuario seja falso, ira pegar o objeto vazio
     const usuario = props.usuario || {}
     return (
          <>
               {/*
                por aqui utiliza-se um componente sem JSX para manipular um conjunto de componentes
                como nos componentes comuns, atraves de props é possivel acessar o que é exportado no componente pai
                e isso faz, atraves da renderização condicional, que seja possivel controlar o JSX atraves de outro componente
               */}
               {/* aqui se existir ira retornar true, caso constratio false */}
               <If teste={usuario && usuario.nome && usuario.email}>
                    <Text style={estilo.fonteG}>
                         Usuario logado:
                    </Text>
                    <Text style={estilo.fonteG}>
                         {usuario.nome} - {usuario.email}
                    </Text>
               </If>
          </>          
     )
}