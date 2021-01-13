import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

function Comp1() {
     return <Text style={estilo.fonteG}> Comp 1</Text>
}
/* pode ser exportado assim */
export default function Comp2() {
     return <Text style={estilo.fonteG}> Comp 2</Text>
}
/* ou */
export function Comp3() {
     return <Text style={estilo.fonteG}> Comp 3</Text>
}
/* ou */
export { Comp1 }