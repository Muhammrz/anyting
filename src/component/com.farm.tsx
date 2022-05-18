


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
    title:'Farm',
    source: require('../../asset/voice/Farm.mp3')
  },
  {
    title:'Chiken Short rooster crowing',
    source: require('../../asset/voice/Chiken.wav')
  },
  {
    title:'Farm animal',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-farm-animals-in-the-morning-7.mp3'}
  },
  {
    title:'Forest near countryside farm',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-forest-near-countryside-farm-1221.mp3'}
  },
  {
    title:'Goat herd move out',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-goat-herd-move-out-1757.mp3'}
  },
  {
    title:'Pig herd grunt and cry',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-pig-herd-grunt-and-cry-1765.mp3'}
  },
  {
    title:'Train arrival at station',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-train-arrival-at-station-1629.mp3'}
  },
  
  
]

const FarmComponent = () => {


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


export default FarmComponent