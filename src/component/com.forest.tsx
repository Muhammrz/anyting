

import { View, Text, FlatList, Pressable, ActivityIndicator } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Video from './video'
import styles, { colorStop } from './styles'

interface items {
  title: string;
  source: any;
}

const Data: items[] = [
  {
    title:'Forest',
    source: require('../../asset/voice/Forest.mp3')
  },
  {
    title:'Forest near',
    source: require('../../asset/voice/Forestnear.m4a')
  },
  {
    title:'Witch forest Atmo',
    source:{ uri:'https://freesound.org/data/previews/577/577936_2282212-lq.mp3' }
  },
  {
    title:'Bird in forest',
    source:{ uri:'https://freesound.org/data/previews/623/623090_1648170-lq.mp3' }
  },
  {
    title:'Forest at dawn',
    source:{ uri:'https://freesound.org/data/previews/328/328292_1661766-lq.mp3' }
  },
  {
    title:'Forest at night',
    source:{ uri:'https://freesound.org/data/previews/328/328293_1661766-lq.mp3' }
  },
  {
    title:'Summer night in the forest',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-summer-night-in-the-forest-1227.mp3' }
  },
  {
    title:'Crickets and insects in the wild ambience',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-crickets-and-insects-in-the-wild-ambience-39.mp3' }
  },
  {
    title:'Night crickets near the swamp',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-night-crickets-near-the-swamp-1782.mp3' }
  },
  
  
  
  
]

const ForestComponent= () => {


  const [onIndex, setOnIndex] = useState(0);
  const [onPlay, setOnPlay] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);




  const setIndexCallBack = useCallback((index: number) => {
    if (index === onIndex) {
      setOnPlay(!onPlay);
    } else {
      setOnIndex(index);
      setOnPlay(!onPlay);
      setLoading(true)
    }
  }, [onPlay,setOnIndex, setOnPlay])

  const renderItem = ({item, index}:{ item: items, index: number }) => {

    return (
      <View style={styles.itemContainer}>
          <View style={styles.itemSubContainer}>
            {loading ? onIndex === index ? <View style={{marginRight: 5}}><ActivityIndicator size={15} color='#fff' /></View> : null : null}
            <Text style={styles.titleItem}>{item.title}</Text>
          </View>
          <Pressable onPress={() => setIndexCallBack(index)} style={styles.btnIcon}>
             {index === onIndex ?  onPlay ? <Icon name='play' size={25} color='#fff' /> : <Icon name='stop' size={25} color={colorStop} /> :  <Icon name='play' size={25} color='#fff' />}
          </Pressable>
      </View>
    )
  };

  



  return (
    <View style={{flex:1}}>
      <FlatList
        data={Data}
        renderItem={renderItem}
      />
      <Video
        source={Data[onIndex].source}
        paused={onPlay}
        onLoad={(event) => {
            if (event) {
              setLoading(false);
            }
        }}
      />
    </  View>
  )
}


export default ForestComponent