import React from 'react';
import { HeroContainer, HeroBg, Videobg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../Video/Video.mp4';
import { Button } from '../ButtonElement'
import { useState } from 'react';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer>
        <HeroBg>
            <Videobg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual banking made easy</HeroH1>
            <HeroP>
                Sign up for a new account today and receive $250 credit towards
                your next payment
            </HeroP>

            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"> Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;