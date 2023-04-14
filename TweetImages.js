import React, { useState } from 'react'
import { FlatList, StyleSheet, View, Image } from 'react-native'



function TweetImages({ item, navigation }){



function tweetImagesItem({ item }){
return (
<View style={styles.tweet_images_item}>
<Image
    style={styles.image}
    source={{uri: item.image}}
    />
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.tweet_images}
    data={item}
    renderItem={tweetImagesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default TweetImages;

const styles = StyleSheet.create({
    "image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    }
});