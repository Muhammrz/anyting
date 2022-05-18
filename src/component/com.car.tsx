

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
    title:'Car passing',
    source: require('../../asset/voice/CarPassing.mp3')
  },
  {
    title:'Car Ferrari',
    source: require('../../asset/voice/CarFerrari.mp3')
  },
  {
    title:'Car drive',
    source: require('../../asset/voice/Cardrive.mp3')
  },
  {
    title:'Fast car drive',
    source: require('../../asset/voice/Car2.wav')
  },
  {
    title:'Car double horn',
    source: require('../../asset/voice/Car3.wav')
  },
  {
    title:'Car ignition',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-car-ignition-1535.mp3' }
  },
  {
    title:'Cars starting',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-cars-starting-1561.mp3' }
  },
  {
    title:'Urban city sounds and light car traffic',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-urban-city-sounds-and-light-car-traffic-369.mp3' }
  },
  
]

const CarComponent = () => {


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


export default CarComponent