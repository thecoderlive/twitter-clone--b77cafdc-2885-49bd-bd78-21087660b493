import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function TrendingTopics({ item, navigation }){



function trendingTopicsItem({ item }){
return (
<View style={styles.trending_topics_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.topic} numberOfLines={1}>{item.topic}</Text>
<Text style={styles.tweet_count} numberOfLines={1}>{item.tweet_count}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.trending_topics}
    data={item}
    renderItem={trendingTopicsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default TrendingTopics;

const styles = StyleSheet.create({
    "topic": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "monospace"
    },
    "tweet_count": {
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