import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo' // importando arquivo de estilos

// exemplo da maneira de como aplicar estilos nos componentes
export default () => {
     //aqui seguem duas maneiras de auxiliar na analise de dados: yellowBox
     /* esta primeira retornará a mensagem no terminal */
     console.log('OPA!')
     /* ja esta segunda opção, fara com que a mensagem apareça como um alerta na tela do proprio dispositivo */
     console.warn('OPA!')
     return(
          <Text style={estilo.fonteG}>Primeiro!</Text>
     )
}