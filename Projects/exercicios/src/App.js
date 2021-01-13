import React from 'react'
import { Text , View } from 'react-native'
import Primeiro from './components/Primeiro'  // importação do componente
import Comp2, { Comp1, Comp3 } from './components/Mult'     //dentro da chave funções que nao foram setadas como default


//a chamada da função tambem pode ser feita da seguinte forma: 
/*
     function App(){...}
ou
     const App = function() {...}
     export default App
ou
     export default () => {...}
ou
     export default () => ...
ou
*/
export default function() {
     //trehco em XJS, meio termo entre JS e HTML
     /*
          const jsx = <Text>Primeiro componente</Text>
          return jsx   
     ou
          return <Text>Primeiro componente!</Text>
     ou
     */
     return (
          <View>
               {/*
                    aqui pode-se add qualquer codigo js que ele sera interpretado
               */}
               <Comp1/>
               <Comp2/>
               <Comp3/>
               <Primeiro/>
          </View>
     )
}