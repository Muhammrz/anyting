// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import Sound from "react-native-sound";

// const App:React.FC = () => {

//   const [playStatus, setPlayStatus] = useState(null);

//   const voice = new Sound('./asset/voice/rain.mp3', Sound.MAIN_BUNDLE, (Error) => {
//       if (error) {
//           console.log('failed to load the sound', error);
//           return;


//       }
//     voice.play((success) => {
//         if (success) {
//           console.log('successfully finished playing');
//         } else {
//           console.log('playback failed due to audio decoding errors');

//         }



//     })   
//   }

//   return (
//     <View>
//         <Button
//           title={!playStatus ? 'play' : 'stop'}
//           onPress={playSong}
          
//         />
//     </View>


//   )  

// });

// export default App;

import React, { useState } from "react";
import { Button, View } from "react-native";
import Video from 'react-native-video';

const App: React.FC = () => {

  const videoRef = React.useRef<any>();
  const [Paused,setPaused] = useState(true)


  const playButton = () => {
      if (videoRef.current !== null){
        videoRef.current.seek(0)
        setPaused(!Paused)
      }
  }

  const stopButton = () => {
    if (videoRef.current !== null){
      videoRef.current.seek(0)
      setPaused(!Paused)
    }
  }

  const bufferTime = () => {

  }

  return (
    <View style={{flex:1}}>
        <Video 
          audioOnly 
          
          ref={(vrf) => (videoRef.current = vrf)} 
          source={require('./asset/voice/rain.mp3')}
          playInBackground
          onLoad={console.log}
          onProgress={(event) => {
          //  console.log(Math.ceil((event.currentTime / event.playableDuration) * 100))
          }}
          paused={Paused}
          repeat={false}
      />
      {Paused ?  <Button title="play" onPress={playButton} /> : <Button title="stop" onPress={stopButton} />}
     
      

    </View>
  )
}

export default App