

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
    title:'Bus departure zone',
    source: require('../../asset/voice/Bus.wav')
  },
  {
    title:'Motorcycle changing gears',
    source: require('../../asset/voice/Motorcycle.wav')
  },
  {
    title:'Bus passing by in a city',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-bus-passing-by-in-a-city-2706.mp3' }
  },
  {
    title:'City traffic bus pass by',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-city-traffic-bus-pass-by-3031.mp3' }
  },
  {
    title:'Helicopter flying far away',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-helicopter-flying-far-away-2696.mp3' }
  },
  {
    title:'Motorcycle engine doing gearshift',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-motocross-motorcycle-engine-2727.mp3' }
  },
  {
    title:'Tank engine working',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-tank-engine-working-2753.mp3' }
  },
  

]


const EngineComponent = () => {


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


export default EngineComponent