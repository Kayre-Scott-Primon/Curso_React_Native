import React from 'react'
import { Text , View , StyleSheet } from 'react-native'
import Primeiro from './components/Primeiro'  // importação do componente
import Comp2, { Comp1, Comp3 } from './components/Mult'     //dentro da chave funções que nao foram setadas como default
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'

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
          <View style={style.App}>
               {/*
                    aqui pode-se add qualquer codigo js que ele sera interpretado
               */}
               {/* aqui segue-se um exemplo de como realizar a passagem de algum dado ao componente, podendo 
               ser mais de um componente e qual tipo seja ele (somente lembrando de seguir as regras, por exemplo se for num, deve-se ter um par de chaves entre ele), so nao pode ter nome repetido 
               propriedades passadas para componentes podem ser somentes lidas, e nao modificadas*/}

               <Contador inicial={100} passo={13}/>
               <Contador />
               {/*<Botao/>*/}
               {/*<Titulo principal='Cadastro' secundario='Tela de cadastro'/>*/}
               {/*<Aleatorio min={2} max={10}/>*/}
               {/*<MinMax min='3' max={20}/>*/}
               {/*<Comp1/>*/}
               {/*<Comp2/>*/}
               {/*<Comp3/>*/}
               {/*<Primeiro/>*/}
          </View>
     )
}

// para poder-se adicionar styles nos componentes muito proximo ao CSS, porem em JS
// pode ser usado desta forma, ou ainda em um arquivo separado e importa-lo, como é exemplificado no arquivo Primeiro.js
const style = StyleSheet.create({
     // aqui pode-se escolher um nome qualquer como tambem qualquer quantidade
     App: {
          //backgroundColor: '#A00',

          // dizendo a ele que ele pode crescer, pode-se usar tambem: 'flex:1'.  
          // o valor acossiado diz respeito ao peso da taxa de crescimento em relação a outros styles/componentes
          flexGrow: 1,

          // alinhamento em relação aos eixos, somente o componente, o que esta dentro nao é alterado
          justifyContent: 'center',
          alignItems: 'center',

          // espaçamento interno, ou seja, entre o componente e a borda
          padding: 20
     }
})