
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
    title:'Shower',
    source: require('../../asset/voice/Shower.mp3')
  },
  {
    title:'Wash',
    source: require('../../asset/voice/Wash.mp3')
  },
  {
    title:'Showering',
    source:{uri:'https://cdn.freesound.org/previews/353/353195_5121236-lq.mp3'}
  },
  {
    title:'Shower noise',
    source:{uri:'https://cdn.freesound.org/previews/466/466305_8803593-lq.mp3'}
  },
  {
    title:'Shower Turn On Run Turn Off Drain Water',
    source:{uri:'https://cdn.freesound.org/previews/456/456771_9514571-lq.mp3'}
  },
  {
    title:'washing machine rinse',
    source:{uri:'https://cdn.freesound.org/previews/49/49094_8238-lq.mp3'}
  },
  
]

const ShowerComponent = () => {


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


export default ShowerComponent