import SPOTIFY from '../assets/desktop/spotify.svg';
import APPLE from '../assets/desktop/apple-podcast.svg';
import GOOGLE from '../assets/desktop/google-podcasts.svg';
import POCKET from '../assets/desktop/pocket-casts.svg';
import styled from 'styled-components';
import fluid from './services/fluid';
import Apple from './SVG/Apple';
import Google from './SVG/Google';
import Spotify from './SVG/Spotify';
import Pocket from './SVG/Pocket';

const PLatforms = styled.div`
  order: 3;
  margin-bottom: 48px;

  svg {
    fill: pink;
    stroke: pink;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 64px;
    order: 4;
  }
`;

const Icon = styled.img`
  margin-top: 0;
  margin-right: ${props => props.sp};
  width: ${props => props.w};
  height: ${props => props.h};
  background: pink;
`;

const Platforms = () => {
  return (
    <PLatforms>
      <Spotify/>
      <Apple/>
      <Google/>
      <Pocket/>
      <Icon src={SPOTIFY} alt="spotify logo" sp={`${fluid.calc(23, 40, 'Full', 'px')}`} w={`${fluid.calc(56, 92, 'Full', 'px')}`} h={`${fluid.calc(17, 29, 'Full', 'px')}`}/>
      <Icon src={APPLE} alt="spotify logo" sp={`${fluid.calc(25, 41, 'Full', 'px')}`} w={`${fluid.calc(45, 78, 'Full', 'px')}`} h={`${fluid.calc(17, 29, 'Full', 'px')}`}/>
      <Icon src={GOOGLE} alt="spotify logo" sp={`${fluid.calc(16, 27, 'Full', 'px')}`} w={`${fluid.calc(73, 125, 'Full', 'px')}`} h={`${fluid.calc(11, 18, 'Full', 'px')}`}/>
      <Icon src={POCKET} alt="spotify logo" sp="0" w={`${fluid.calc(77, 129, 'Full', 'px')}`} h={`${fluid.calc(15, 26, 'Full', 'px')}`}/>
    </PLatforms>
  );
};

export default Platforms;