import React, {Component} from 'react';
import { 
     View ,
     StyleSheet,
     FlatList,
     Text
} from 'react-native';
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
     state = {
          post: [{
               id: Math.random(),
               nickname: 'Rafael Pereira Filho',
               email: 'rafaelFilho@gmail.com',
               image: require('../../assets/assets/imgs/fence.jpg'),
               comments: [{
                    nickname: 'John Ray Sheldon',
                    comment: 'Stunning!'
               },{
                    nickname: 'Ana Julia Arruda',
                    comment: 'Foto linda!'
               }]
          },{
               id: Math.random(),
               nickname: 'Francisco Leandro Lima',
               email: 'fllima@gmail.com',
               image: require('../../assets/assets/imgs/bw.jpg'),
               comment: []
          }]
     }

     render(){
          return(
               <View style={styles.container}>
                    <Header />
                    <FlatList
                         data={this.state.post}
                         keyExtractor={ item => `${item.id}`}
                         renderItem={({item}) => 
                              <Post key={item.id} {...item} />
                         } 
                    />
               </View>
          )
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5fcff'
     }
})

export default Feed;