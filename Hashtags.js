import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function Hashtags({ item, navigation }){



function hashtagsItem({ item }){
return (
<View style={styles.hashtags_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.hashtag} numberOfLines={1}>{item.hashtag}</Text>
<Text style={styles.tweet_count1} numberOfLines={1}>{item.tweet_count1}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.hashtags}
    data={item}
    renderItem={hashtagsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Hashtags;

const styles = StyleSheet.create({
    "hashtag": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "monospace"
    },
    "tweet_count1": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "monospace"
    }
});