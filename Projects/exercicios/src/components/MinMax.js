import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo'

// exemplo de como receber parametros em um componente
// esse nome pode assumir qualquer valor, porem, para padronização utiliza-se o termo 'props' que significa as propriedades do componente
export default (param) => {
     console.warn(param)
     /* aqui mostra-se que parms é um objeto e que recebeu todos os parametros que foram passados quando se estanciou o componente.
     para se utilizar esses valores, basta chamar o termo de param colocando um ponto para conseguir acessar os endereços internos dele sendo chamados pelo nome do mesmo */
     return(
          <Text style={estilo.fonteG}>O valor {param.max} é maior que o {param.min}</Text>
     )}