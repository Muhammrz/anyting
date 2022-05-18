
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
    title:'Lullaby',
    source: require('../../asset/voice/Lullaby.mp3')
  },
  {
    title:'Music Box Lullaby',
    source:{uri:'https://cdn.freesound.org/previews/369/369148_6812364-lq.mp3'}
  },
  {
    title:'Music Box Clockwork',
    source:{uri:'https://cdn.freesound.org/previews/417/417934_5837476-lq.mp3'}
  },
  {
    title:'Creepy Lullaby',
    source:{uri:'https://cdn.freesound.org/previews/412/412224_5121236-lq.mp3'}
  },
  {
    title:'Melody Lullaby',
    source:{uri:'https://cdn.freesound.org/previews/583/583395_13139945-lq.mp3'}
  },
  {
    title:'Toy Lullaby',
    source:{uri:'https://cdn.freesound.org/previews/621/621586_9047165-lq.mp3'}
  },
  {
    title:'Horror Lullaby',
    source:{uri:'https://cdn.freesound.org/previews/184/184474_3162775-lq.mp3'}
  },
]
const LullabyComponent = () => {


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


export default LullabyComponent