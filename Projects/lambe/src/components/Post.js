import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Autor from './Autor'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image}/>
                <Autor email={'fulanodetal@hotmail.com'} nickname='fulando de Tal'/>
                <Comments comments={this.props.comments}/>
                <AddComment/>            
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 3/8,
        resizeMode: 'contain'
    }
})

export default Post;