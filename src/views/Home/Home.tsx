import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../../components/Header'
import fetchAPI from "../../utils/fetch";
import TodaysImage from '../../components/TodaysImage';
import { PostImage } from '../../types';
import {format, sub} from "date-fns";
import LastDaysImages from '../../components/LastDaysImages';

const Home = () => {

  const [todaysImage, setTodaysImage] = useState<PostImage >();
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
        try {
            const todaysImageResponse = await fetchAPI("&thumbs=true");
            setTodaysImage(todaysImageResponse)
        } catch(error) {
            setTodaysImage({})
        }
        
    };


    const loadLast5DaysImages = async() => {
      try {
        const date = new Date();
        const today = format(date, "yyyy-MM-dd");
        const pastDays= format(sub(date, {days: 5}), "yyyy-MM-dd");
        const response = await fetchAPI(`&thumbs=true&start_date=${pastDays}&end_date=${today}`);
        setLastFiveDaysImages(response);

      } catch (error) {
        setLastFiveDaysImages([]);
      }
    }

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, [])
  

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage}/>
      <LastDaysImages data={lastFiveDaysImages} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "rgba(7,26,93,255)"
    }
})
export default Home;
