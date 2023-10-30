import React, {FC} from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { PostImage, RouteStackParams } from '../../types';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<RouteStackParams, 'Detail'>

const TodaysImage : FC<PostImage> = ({date, title,url, media_type, thumbnail_url, explanation}) => {
  const{navigate} = useNavigation<NavigationProps>();

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation, media_type,thumbnail_url});
  };


  return (
    <View style={styles.container}>
      <Image source={{uri: `${ media_type === "video" ? thumbnail_url: url}`}} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.btnConatiner} >
        <Button 
          title="View" 
          color="#2c449d" 
          accessibilityLabel="Read more about today's image"
          onPress={handleViewPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: "#2c449d",
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 32,
      padding: 16,
    },
    image: {
      width: "100%",
      height: 190,
      borderRadius: 32,
      borderWidth: 2,
      borderColor: "#FFF"
    },
    title: {
      color: "#FFF",
      fontSize: 20,
      marginVertical:12,
      fontWeight: "bold"
    },
    date: {
      color: "#FFF",
      fontSize: 16,
    },
    btnConatiner: {
        alignItems: "flex-end"
    }

})

export default TodaysImage
