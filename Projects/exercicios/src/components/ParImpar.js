// exemplo de renderização condicional

import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default ({num = 0}) => {
     /* para se defenir de nenhum valor for passado 
          if((props.num) || 0 % 2 === 0){ 
               --> pode se usar assim ou na chamada dos paremtros/props utilizando da desestruturação
     
     */

     /*
     renderização condicional de forma manual
     if(num % 2 === 0){      // condicional para verirficar se o numero é par ou impar
          return (
               <View>
                    <Text style={estilo.fonteG}>O resultado é:</Text>
                    <Text style={estilo.fonteG}>Par</Text>
               </View>
          )
     }else{
          return (
               <View>
                    <Text style={estilo.fonteG}>O resultado é:</Text>
                    <Text style={estilo.fonteG}>Impar</Text>
               </View>
          )
     }
     */

     // forma de renderização condicional usando o operador ternario
     return (
          <View>
               <Text style={estilo.fonteG}>O resultado é:</Text>
               {
                    num % 2 === 0
                    ? <Text style={estilo.fonteG}>Par</Text>
                    : <Text style={estilo.fonteG}>Impar</Text> // pode ser apenas 'false' porem nada sera mostrado

               }
          </View>
     )

}