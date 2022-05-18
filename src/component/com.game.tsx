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
    title:'Arcade game opener',
    source: require('../../asset/voice/Game.wav'),
  },
  {
    title:'Arcade retro scoring counter',
    source: require('../../asset/voice/Game2.wav'),
  },
  {
    title:'Synthetic sci fi wobble',
    source: require('../../asset/voice/Game3.wav'),
  },
  {
    title:'Slot machine win alert',
    source: require('../../asset/voice/Game4.wav'),
  },
  {
    title: 'Game level music',
    source: {uri: 'https://assets.mixkit.co/sfx/preview/mixkit-game-level-music-689.mp3'}
  },
  {
    title:'Glitchy Sci Fi bass suspense',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-glitchy-sci-fi-bass-suspense-686.mp3' }
  },
  
]

const GameComponent = () => {

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


export default GameComponent