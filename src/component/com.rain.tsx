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
    title:'Forest rain',
    source: require('../../asset/voice/rain.m4a'),
  },
  {
    title: 'Forest heavy rain',
    source: {uri: 'https://assets.mixkit.co/sfx/preview/mixkit-forest-heavy-rain-loop-1226.mp3'}
  },
  {
    title:'Driving in the rain',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-driving-in-the-rain-1242.mp3' }
  },
  {
    title:'Long rain ambience',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-long-rain-ambience-1247.mp3' }
  },
  {
    title:'Rain ambien and thunder',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-rain-ambien-and-thunder-1256.mp3' }
  },
  {
    title:'Rain on umbrella',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-rain-on-umbrella-1263.mp3' }
  },
  {
    title:'Downpour loop',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-downpour-loop-1245.mp3' }
  },
  {
    title:'Heavy rain on car glass interior',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-heavy-rain-on-car-glass-interior-1248.mp3' }
  },
  {
    title:'Rain and thunder',
    source:{ uri:'https://cdn.freesound.org/previews/237/237729_3839718-lq.mp3' }
  },
  {
    title:'Blizzard cold winds',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-blizzard-cold-winds-1153.mp3' }
  },
  
  
]

const RainComponent = () => {

  const videoRef = useRef<any>()

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


export default RainComponent