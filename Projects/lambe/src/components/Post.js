import React, { Component } from 'react';
import { connect } from 'react-redux'
import{
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        const addComment = this.props.name ? 
        <AddComment postId={this.props.id}/>
        : null
        return(
            <View style={styles.container}>
                <Image source={{ uri: this.props.image }} style={styles.image}/>
                <Autor email={this.props.email} nickname={this.props.nickname}/>
                <Comments comments={this.props.comments}/>
                {addComment}            
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

const mapStateToProps = ({ user }) => {
    return {
        name: user.nmame
    }
}

export default connect(mapStateToProps)(Post)