

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
    title:'Piano',
    source: require('../../asset/voice/piano.mp3')
  },
  {
    title:'Soft Piano',
    source: require('../../asset/voice/Softpiano.mp3')
  },
  {
    title:'Scary Piano Halloween',
    source: require('../../asset/voice/ScaryPianoHalloween.mp3')
  },
  {
    title:'100 year old piano music phrase',
    source: {
      uri:'https://freesound.org/data/previews/476/476559_9509443-lq.mp3'
    }
  },
  {
    title:'My Love',
    source:{ uri:'https://freesound.org/data/previews/325/325611_4548252-lq.mp3' }
  },
  {
    title:'Space soundscape',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-space-soundscape-653.mp3' }
  },
  {
    title:'The sonata',
    source:{ uri:'https://cdn.freesound.org/previews/424/424283_4548252-lq.mp3' }
  },
  {
    title:'Beauty Piano',
    source:{ uri:'https://cdn.freesound.org/previews/163/163485_215874-lq.mp3' }
  },
  {
    title:'Beach Piano',
    source:{ uri:'https://cdn.freesound.org/previews/570/570630_2282212-lq.mp3' }
  },
 
]

const PianoComponent = () => {


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


export default PianoComponent