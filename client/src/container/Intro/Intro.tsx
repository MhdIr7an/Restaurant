import { useRef, useState } from 'react';
import {BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { meal } from '../../constants';
import './Intro.scss';

const Intro = () => {
  const [ playVideo, setplayVideo ] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);

    if (vidRef.current)
      playVideo? vidRef.current.pause() : vidRef.current.play();
  }

  return (
    <section className='app__video'>
      <video src={meal} ref={vidRef} loop controls={false} muted />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {playVideo ? 
            <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </section>
  )
};

export default Intro;
