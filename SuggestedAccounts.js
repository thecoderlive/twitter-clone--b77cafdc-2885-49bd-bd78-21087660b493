import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function SuggestedAccounts({ item, navigation }){

const onPressFollow = () => {}

function suggestedAccountsItem({ item }){
return (
<View style={styles.suggested_accounts_item}>
<Image
    style={styles.profile_picture}
    source={{uri: item.profile_picture}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.handle} numberOfLines={1}>{item.handle}</Text>
</View>
<TouchableOpacity  onPress={onPressFollow}>
    <View style={styles.follow}>{'Follow'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.suggested_accounts}
    data={item}
    renderItem={suggestedAccountsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default SuggestedAccounts;

const styles = StyleSheet.create({
    "profile_picture": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "user_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "monospace"
    },
    "handle": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "fontFamily": "monospace"
    },
    "follow": {
        "flex": 1,
        "padding": 10,
        "margin": 5,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white"
    }
});