import React from 'react'
import { Button } from 'react-native'

export default props => {

     function executar() {
          console.warn('Exec #01!!')
     }
     /* 
          segue-se um exemplo de como utilizar um botao no front de app, referenciando um determinada ação ao mesmo
     */
     return (
          <>
               <Button
                    /* Title é para escolher o texto interno */
                    title="Executar #01!"
                    /* onPress é responsavel pela ação que sera executada ao click do botao,
                         refenciaando a uma função criada previamente
                    */
                    onPress={executar}
               />

               <Button
                    /* Title é para escolher o texto interno */
                    title="Executar #02!"
                    /* onPress é responsavel pela ação que sera executada ao click do botao,
                         sendo assim podese criar uma função interna às chaves
                    */
                    onPress={function() {
                         console.warn('Exec #02!!')
                    }}
               />

               <Button
                    /* Title é para escolher o texto interno */
                    title="Executar #03!"
                    /* onPress é responsavel pela ação que sera executada ao click do botao,
                         sendo assim podese criar uma função anonima interna às chaves  
                    */
                    onPress={() => {
                         console.warn('Exec #03!!')
                    }}
               />
          </>
     )
}