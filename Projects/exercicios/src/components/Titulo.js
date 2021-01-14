import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
     /*
          nao é possivel retornar mais de um componente no return de renderização, 
          sempre ha necessidade de haver UM que envolva todos os outros
          Caso queria-se realmete retornar dois componentes diretamente, usa-se um recurso chamado de Fragment, do React
     */

     /*
     return(
          <View>
               <Text style={Estilo.fonteG}>{props.principal}</Text>
               <Text >{props.secundario}</Text>
          </View>
     )
     */

     //ou

     /*
     return(
          <React.Fragment>
               <Text style={Estilo.fonteG}>{props.principal}</Text>
               <Text >{props.secundario}</Text>
          </React.Fragment>
     )
     */

     //ou

     return(
          <Fragment>
               <Text style={Estilo.fonteG}>{props.principal}</Text>
               <Text >{props.secundario}</Text>
          </Fragment>
     )

     //ou

     /*
     // aqui nao sera possivel utilizar propriedades no component global, ou seja, esse que engloba tudo
     return(
          <>
               <Text style={Estilo.fonteG}>{props.principal}</Text>
               <Text >{props.secundario}</Text>
          </>
     )
     */
}