

import React from 'react';
import Videos, { OnLoadData, OnProgressData } from 'react-native-video';

interface ff {
    source: any
    paused: boolean
    onLoad?(data: OnLoadData): void
}

const Video: React.FC<ff> = (props) => {

    const videoRef = React.useRef<any>()

    const onProgress = (progress: OnProgressData) => {
        const timeTotal: Number = (Math.round(progress.playableDuration) * 1000) - 2 * 1000;
        const currentTime: Number = Math.round(progress.currentTime) * 1000;
  
        if (currentTime == timeTotal) {
          videoRef.current.seek(0);
        }
    }
  
  

    return (
        <Videos
            ref={refs => videoRef.current = refs}
            source={props.source}
            audioOnly
            paused={props.paused}
            repeat={true}
            playInBackground
            onProgress={onProgress}
            onLoad={props.onLoad}
        />
    )
}

export default Video;