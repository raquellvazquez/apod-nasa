import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { PostImage, RouteStackParams } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<RouteStackParams, 'Detail'>
    

const Post : FC<PostImage>= ({title, date, url, explanation, thumbnail_url, media_type}) => {
    const{navigate} = useNavigation<NavigationProps>();

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation, thumbnail_url, media_type});
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" color="rgba(18,39,113,255)" onPress={handleViewPress}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "rgba(18,39,113,255)",
        borderRadius: 20,
        marginBottom: 12,
        padding: 16
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 12
    },
    date : {
        color: "#fff"
    },
    buttonContainer: {
        alignItems: "flex-end"
    }

});

export default Post;
