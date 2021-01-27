// comunicação indireta
// componente Filho

import React from 'react';
import { Button } from 'react-native';

export default props => {

     //função para gerar um valor aleatorio dentro do parametros passados
     function gerarNumero(min, max){
          const fator = max - min + 1
          return parseInt(Math.random() * fator) + min
     }

     return(
          <Button
               title='Executar'
               onPress={function(){
                    const n = gerarNumero(props.min, props.max)
                    /* com a props pe possivel acessar as propriedades do pai, sendo assim a função que receberá um ou mais parametros em seu istanciamento      */
                    props.funcao(n, 'O valor é')
               }}
          />
     )
}