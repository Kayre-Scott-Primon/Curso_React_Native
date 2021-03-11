import React from 'react'
import {
     TouchableOpacity,
     StyleSheet,
     Modal,
     Text,
     View
} from 'react-native'

export default props => {
     return (
          <Modal
               onRequestClose={props.onCancel}
               visible={props.isVisible}
               animationType='slide'
               transparent={true}
          >
               <View style={styles.frame}>
                    <View style={styles.container}>
                         <Text style={styles.title}> Selecione o nível: </Text>
                         <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={() => props.onLevelSelected(0.1)}>
                              <Text style={styles.buttonLabel}>Fácil</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={[styles.button, styles.bgNormal]} onPress={() => props.onLevelSelected(0.2)}>
                              <Text style={styles.buttonLabel}>Intermediário</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={() => props.onLevelSelected(0.3)}>
                              <Text style={styles.buttonLabel}>Dificil</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </Modal>
     )
}

const styles = StyleSheet.create({
     frame: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
     },
     container: {
          backgroundColor: '#eee',
          alignItems: 'stretch',
          justifyContent: 'center',
          padding: 25,
          borderRadius: 25,
     },
     title: {
          fontSize: 30,
          fontWeight: 'bold'
     },
     button: {
          marginTop: 10,
          padding: 8,
          borderRadius: 10,
     },
     buttonLabel: {
          fontSize: 20,
          color: '#eee',
          fontWeight: 'bold',
          alignSelf: 'center'
     },
     bgEasy: {
          backgroundColor: '#49b65d'
     },
     bgNormal: {
          backgroundColor: '#2765f7'
     },
     bgHard: {
          backgroundColor: '#f26337'
     }

})