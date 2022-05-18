

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
    title:'Camp fire',
    source: require('../../asset/voice/Campfire.mp3')
  },
  {
    title:'Campfire crackles',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3' }
  },
  {
    title:'Campfire burning',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-campfire-burning-crackles-1329.mp3' }
  },
  {
    title:'Campfire in the woods',
    source:{ uri:'https://cdn.freesound.org/previews/213/213804_3832471-lq.mp3' }
  },
  {
    title:'Campfire on summer night',
    source:{ uri:'https://cdn.freesound.org/previews/454/454745_3328914-lq.mp3' }
  },
  {
    title:'Campfire with bird & crickets',
    source:{ uri:'https://cdn.freesound.org/previews/618/618242_13702991-lq.mp3' }
  },
  {
    title:'Digital campfire',
    source:{ uri:'https://cdn.freesound.org/previews/537/537531_11045610-lq.mp3' }
  },
  {
    title:'Campfire in forest',
    source:{ uri:'https://cdn.freesound.org/previews/453/453784_612689-lq.mp3' }
  },
 
 
]


const CampfireComponent = () => {


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


export default CampfireComponent