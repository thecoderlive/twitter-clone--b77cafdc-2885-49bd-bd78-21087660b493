import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './explore_screen_data'
import TrendingTopics from './TrendingTopics'
import Hashtags from './Hashtags'
import SuggestedAccounts from './SuggestedAccounts'

function ExploreScreen({ navigation, route }){ 
const url = (api.explore_screen ?? "explore_screen/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state



async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.explore_screen} showsVerticalScrollIndicator={false}>
<TrendingTopics item={'trending_topics' in item ? item.trending_topics: item} navigation={navigation}/>
<Hashtags item={'hashtags' in item ? item.hashtags: item} navigation={navigation}/>
<SuggestedAccounts item={'suggested_accounts' in item ? item.suggested_accounts: item} navigation={navigation}/>
</ScrollView>
)}

export default ExploreScreen;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center"
    }
});