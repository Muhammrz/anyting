

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
    title:'Sea',
    source: require('../../asset/voice/Sea.mp3')
  },
  {
    title:'Running out from sea',
    source: require('../../asset/voice/Sea2.wav')
  },
  {
    title:'Sinking in the sea',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-sinking-in-the-sea-1178.mp3' }
  },
  {
    title:'Sea waves with birds loop',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-with-birds-loop-1185.mp3' }
  },
  {
    title:'Sea waves ambience',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-ambience-1189.mp3' }
  },
  {
    title:'Storm in sea',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-stormy-sea-ambience-1197.mp3' }
  },
  {
    title:'Rough sea waves loop',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-rough-sea-waves-loop-1194.mp3' }
  },
  {
    title:'Sea loop',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-windy-sea-loop-1200.mp3' }
  },
  
  
  
]

const SeaComponent = () => {


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


export default SeaComponent