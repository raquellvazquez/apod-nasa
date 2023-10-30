import React, { FC } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { PostImage } from '../../types';
import Post from '../../Post';

const LastDaysImages : FC<{data?: PostImage[]}> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Last 5 days</Text>
      <ScrollView style={styles.content}>
        {
            data?.map(post => (
                <Post key={`post-image-${post.title}`} {...post}/>
            ))
        }
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginVertical: 8
    },
    titulo: {
        color :"#fff",
        fontSize: 16,
        marginBottom: 18
    },
    content: {
        paddingHorizontal: 24
    }
})

export default LastDaysImages
