import React from 'react'
import { Text } from 'react-native'

function Comp1() {
     return <Text> Comp 1</Text>
}
/* pode ser exportado assim */
export default function Comp2() {
     return <Text> Comp 2</Text>
}
/* ou */
export function Comp3() {
     return <Text> Comp 3</Text>
}
/* ou */
export { Comp1 }