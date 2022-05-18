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
    title:'Train',
    source: require('../../asset/voice/TrainPassing.mp3')
  },
  {
    title:'Train Passing',
    source: require('../../asset/voice/TrainPassing2.mp3')
  },
  {
    title:'Old train',
    source:{uri:'https://freesound.org/data/previews/447/447873_9010973-lq.mp3'}
  },
  {
    title:'Train Horn and Bell',
    source:{uri:'https://freesound.org/data/previews/447/447943_4963345-lq.mp3'}
  },
  {
    title:'Old train departure',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-old-train-departure-1628.mp3'}
  },
  {
    title:'Steam train passing',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-steam-train-passing-1630.mp3'}
  },
  {
    title:'Horror train',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-horror-train-1633.mp3'}
  },
  {
    title:'Train arrival at station',
    source:{uri:'https://assets.mixkit.co/sfx/preview/mixkit-train-arrival-at-station-1629.mp3'}
  },
  
  
]

const TrainComponent = () => {


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


export default TrainComponent