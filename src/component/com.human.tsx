
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
    title:'Young woman sneeze',
    source: require('../../asset/voice/Sneeze.wav')
  },
  {
    title:'Small group cheer and applause',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-small-group-cheer-and-applause-518.mp3' }
  },
  {
    title:'Footsteps on tall grass',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-footsteps-on-tall-grass-532.mp3' }
  },
  {
    title:'Big loving kiss',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-big-loving-kiss-2191.mp3' }
  },
  {
    title:'Little cute kiss',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-little-cute-kiss-2192.mp3' }
  },
  {
    title:'Sick man coughing',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-very-sick-man-coughing-2219.mp3' }
  },
  {
    title:'Cute child',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-deep-child-breathing-and-exhaling-2238.mp3' }
  },
  {
    title:'Busy park playground with kids playing',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-busy-park-playground-with-kids-playing-2264.mp3' }
  },
]

const HumanComponent = () => {


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


export default HumanComponent