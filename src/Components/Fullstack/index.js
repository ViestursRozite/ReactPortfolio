import React from 'react';
import {
    FllContainer,
    FllBackground,
    FllVideoBackground
} from './FullstackElements';
import Video from '../../videoes/video.mp4';

const Fullstack = () => {
  return (
    <FllContainer>
        <FllBackground>
            <FllVideoBackground autoPlay loop muted="true" src={Video} type='video/mp4'>

            </FllVideoBackground>
        </FllBackground>
    </FllContainer>
  )
}

export default Fullstack