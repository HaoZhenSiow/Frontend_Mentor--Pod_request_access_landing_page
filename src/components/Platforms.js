import styled from 'styled-components';
import fluid from './services/fluid';
import Apple from './SVG/Apple';
import Google from './SVG/Google';
import Spotify from './SVG/Spotify';
import Pocket from './SVG/Pocket';

const PLatforms = styled.div`
  order: 3;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 64px;
    order: 4;
  }
`;

const Platforms = () => {
  return (
    <PLatforms>
      <Spotify sp={`${fluid.calc(23, 40, 'Full', 'px')}`} w={`${fluid.calc(56, 92, 'Full', 'px')}`} h={`${fluid.calc(17, 29, 'Full', 'px')}`}/>
      <Apple sp={`${fluid.calc(25, 41, 'Full', 'px')}`} w={`${fluid.calc(45, 78, 'Full', 'px')}`} h={`${fluid.calc(17, 29, 'Full', 'px')}`}/>
      <Google sp={`${fluid.calc(16, 27, 'Full', 'px')}`} w={`${fluid.calc(73, 125, 'Full', 'px')}`} h={`${fluid.calc(11, 18, 'Full', 'px')}`}/>
      <Pocket sp="0" w={`${fluid.calc(77, 129, 'Full', 'px')}`} h={`${fluid.calc(15, 26, 'Full', 'px')}`}/>
    </PLatforms>
  );
};

export default Platforms;