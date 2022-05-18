// import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
// import React, { useCallback, useState } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons'
// import Video from './video'
// import styles, { colorStop } from './styles'

// interface items {
//   title: string;
//   source: any
// }


// const AnimalComponen = () => {

//   const [onIndex, setOnIndex] = useState(0);
//   const [onPlay, setOnPlay] = useState<boolean>(true);


//   const setIndexCallBack = useCallback((index: number) => {
//     if (index === onIndex) {
//       setOnPlay(!onPlay);
//     } else {
//       setOnIndex(index);
//       setOnPlay(!onPlay);
//     }
//   }, [onPlay])

//   const renderItem = ({item, index}:{ item: items, index: number }) => {

//     return (
//       <View style={styles.itemContainer}>
//           <View style={styles.itemSubContainer}>
//             <Text style={styles.titleItem}>{item.title}</Text>
//           </View>
//           <Pressable onPress={() => setIndexCallBack(index)} style={styles.btnIcon}>
//              {index === onIndex ?  onPlay ? <Icon name='play' size={25} color='#fff' /> : <Icon name='stop' size={25} color={colorStop} /> :  <Icon name='play' size={25} color='#fff' />}
//           </Pressable>
//       </View>
//     )
//   };



//   return (
//     <View style={{flex:1}}>
//       <FlatList
//         data={Data}
//         renderItem={renderItem}
//       />
//       {/* <Video
//         source={Data[onIndex].source}
//         audioOnly
//         paused={onPlay}
//         repeat={true}
//         playInBackground
//       /> */}
//       <Video
//          source={Data[onIndex].source}
//          paused={onPlay}
//       />
//     </  View>
//   )
// }


// export default AnimalComponen




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
    title:'cat',
    source: require('../../asset/voice/Cat.mp3')
  },
  {
    title:'Cat Screaming',
    source: require('../../asset/voice/CatScreaming.mp3')
  },
  {
    title:'Angry cat',
    source: require('../../asset/voice/Angrycat.mp3')
  },
  {
    title:'kitty Begging Meow',
    source: require('../../asset/voice/kittybeggingmeow.mp3')
  },
  {
    title:'Dog',
    source: require('../../asset/voice/Dog.wav')
  },
  {
    title:'Lion roar',
    source: require('../../asset/voice/Lion.wav')
  },
  {
    title:'Cow moo',
    source: require('../../asset/voice/Cow.wav')
  },
  {
    title:'Cow moo in barn',
    source: require('../../asset/voice/Cow2.wav')
  },
  {
    title:'Little Bird',
    source: require('../../asset/voice/Bird.wav')
  },
  {
    title:'Flock of wild geese',
    source: require('../../asset/voice/Flock.wav')
  },
  {
    title:'Double Little Bird',
    source: require('../../asset/voice/Bird2.wav')
  },
  {
    title:'Natural ambience with flowing water and birds',
    source:{ uri:'https://assets.mixkit.co/sfx/preview/mixkit-natural-ambience-with-flowing-water-and-birds-61.mp3' }
  },
  
  
 
]


const AnimalComponent = () => {


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


export default AnimalComponent