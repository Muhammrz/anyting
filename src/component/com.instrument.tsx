

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
    title:'Violin',
    source: require('../../asset/voice/Violin.mp3')
  },
  {
    title:'Fingerstyle Guitar',
    source: require('../../asset/voice/FingerstyleGuitar.mp3')
  },
  {
    title:'Cool guitar riff',
    source: require('../../asset/voice/Guitar2.wav')
  },
  {
    title:'Suspense mystery bass',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-suspense-mystery-bass-685.mp3'}
  },
  {
    title:'Cinematic mystery heartbeat transition',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-cinematic-mystery-heartbeat-transition-492.mp3'}
  },
  {
    title:'Space soundscape',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-space-soundscape-653.mp3'}
  },
  {
    title:'Beautiful violin',
    source:{uri:'https://cdn.freesound.org/previews/372/372005_6596218-lq.mp3'}
  },
  
]


const InstrumentComponent = () => {


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


export default InstrumentComponent