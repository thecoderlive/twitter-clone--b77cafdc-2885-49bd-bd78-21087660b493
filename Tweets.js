import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

import TweetImages from './TweetImages'

function Tweets({ item, navigation }){



function tweetsItem({ item }){
return (
<View style={styles.tweets_item}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.profile_picture}
    source={{uri: item.profile_picture}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.handle} numberOfLines={1}>{item.handle}</Text>
</View>
<Text style={styles.tweet_content}>{item.tweet_content}</Text>
</View>
<TweetImages item={'tweet_images' in item ? item.tweet_images: item} navigation={navigation}/>
<Image
    style={styles.profile_picture}
    source={{uri: item.profile_picture}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.handle} numberOfLines={1}>{item.handle}</Text>
</View>
<View style={{flexDirection: 'row'}}>
<Text style={styles.tweet_content}>{item.tweet_content}</Text>
<View style={{flexDirection: 'column'}}>
{<View
    style={[styles.like,{ backgroundColor: item.like ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.share,{ backgroundColor: item.share ? 'red' : 'black' }]}
   />}
</View>
{<View
    style={[styles.retweet,{ backgroundColor: item.retweet ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.comment,{ backgroundColor: item.comment ? 'red' : 'black' }]}
   />}
</View>
<Text style={styles.timestamp} numberOfLines={1}>{item.timestamp}</Text>
</View>
)}

return (
<FlatList
    style={styles.tweets}
    data={item}
    renderItem={tweetsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Tweets;

const styles = StyleSheet.create({
    "profile_picture": {
        "width": "10vw",
        "height": "10vw",
        "marginTop": 5,
        "borderStyle": "solid"
    },
    "user_name": {
        "flex": 1,
        "color": "#080707",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "monospace"
    },
    "handle": {
        "flex": 1,
        "color": "#030202",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "monospace"
    },
    "tweet_content": {
        "fontSize": 14,
        "fontWeight": "250",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "ArialHebrew-Light"
    },
    "like": {
        "width": "10px",
        "height": "10px",
        "borderRadius": 20,
        "marginTop": 5
    },
    "share": {
        "width": "10px",
        "height": "10px",
        "borderRadius": 20,
        "marginTop": 5
    },
    "retweet": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "comment": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "timestamp": {
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