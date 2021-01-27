
// comunicação direta
// componente Pai 

/*
     é considerado comunicação direta uma vez que o Pai tem acesso direto ao filho ('import')
     passar um dado de um elemento, superior na arvore de herança, para um abaixo
*/

import React from 'react'
import Filho from './Filho'

export default props => {
     let x = 100
     let y = 200
     return(
          <>
               <Filho a={x} b={y}/>
               <Filho a={x + 100} b={y + 200}/>
          </>
     )
}