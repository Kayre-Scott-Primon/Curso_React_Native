import React, {useState} from 'react'
import {
     View, StyleSheet, Text, TouchableOpacity, Modal
} from 'react-native'
import Flag from './Flag'
import Icon from 'react-native-vector-icons/Feather';

export default props => {

     const [modal, setModal] = useState(false)
     let info = 'As regras do Campo Minado são simples: Se você descobrir uma mina, o jogo acaba. Se descobrir um quadrado vazio, o jogo continua. Se aparecer um número, ele informará quantas minas estão escondidas nos oito quadrados que o cercam. Você usa essa informação para deduzir em que quadrados próximos é seguro clicar. Acima, mostra quantas marcações podem ser feitas, parar marcar uma mina basta precionar no campo e segurar. Para alterar o nivel, precione o icone que esta fora do campo.'

     return (
          <View style={styles.container}>    
               <View style={styles.flagContainer}>
                    <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                         <Flag bigger/>
                    </TouchableOpacity>
                    <Text style={styles.flagsLeft}>
                          = {props.flagsLeft}
                    </Text>
               </View>
               <Icon name="info" size={30} color="#000" style={{alignItems: 'flex-end'}} onPress={() => setModal(true)}/>
               <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                    <Text style={styles.buttonLabel}>Novo jogo</Text>
               </TouchableOpacity>
               <Modal
                    visible={modal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => {setModal(false)}}
               >
                    <View style={styles.frame}>
                         <View style={styles.containerModal}>
                              <Text style={styles.title}> Instuções: </Text>
                              <Text style={styles.info}>{info}</Text>
                         </View>
                    </View>
               </Modal>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#eee',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingHorizontal: 20
     },
     flagContainer: {
          flexDirection: 'row'
     },
     flagButton: {
          marginTop: 10,
          minWidth: 30
     },
     flagsLeft: {
          fontSize: 30,
          fontWeight: 'bold',
          paddingTop: 5,
          marginLeft: 20
     },
     button: {
          backgroundColor: '#5a5',
          padding: 8,
          borderRadius: 10
     },
     buttonLabel: {
          fontSize: 20,
          color: '#DDD',
          fontWeight: 'bold'
     },     
     frame: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
     },
     containerModal: {
          backgroundColor: '#eee',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '75%',
          padding: 25,
          borderRadius: 25,
     },
     title: {
          fontSize: 30,
          fontWeight: 'bold'
     },
     info: {
          fontSize: 20
     }

})