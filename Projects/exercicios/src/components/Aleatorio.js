import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

const Aleatorio = (props) => {
     let num = 0
     num = Math.random() * (props.max - props.min) + props.min

     // antes de realizar uma destructurin nao é possivel alterar valores das propriedades, pois props é somente leitura
     // recomenda-se sempre criar uma nova variavel apra poder alterar nesses valores
      // props.max += 1000

     // pode-se ainda realizar um processo que se chama desestruturação/ destruction
     let { min , max } = props
     return (
          <View>
               <Text
                    style={estilo.fonteG}
               >Um numero aleatorio entre {min} e {max} : {parseInt(num)}</Text>
          </View>
     )
}

export default Aleatorio;