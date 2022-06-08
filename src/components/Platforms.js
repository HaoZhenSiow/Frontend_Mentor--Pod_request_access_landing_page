import SPOTIFY from '../assets/desktop/spotify.svg';
import APPLE from '../assets/desktop/apple-podcast.svg';
import GOOGLE from '../assets/desktop/google-podcasts.svg';
import POCKET from '../assets/desktop/pocket-casts.svg';
import styled from 'styled-components';
import fluid from './services/fluid';

const PLatforms = styled.div`
  order: 3;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 64px;
    order: 4;
  }
`;

const Icon = styled.img`
  margin-top: 0;
  margin-right: ${props => props.spacing};
  width: ${props => props.width};
`;

const Platforms = () => {
  return (
    <PLatforms>
      <Icon src={SPOTIFY} alt="spotify logo" spacing={`${fluid.calc(23, 40, 'Full', 'px')}`} width={`${fluid.calc(56, 92, 'Full', 'px')}`}/>
      <Icon src={APPLE} alt="spotify logo" spacing={`${fluid.calc(25, 41, 'Full', 'px')}`} width={`${fluid.calc(45, 78, 'Full', 'px')}`}/>
      <Icon src={GOOGLE} alt="spotify logo" spacing={`${fluid.calc(16, 27, 'Full', 'px')}`} width={`${fluid.calc(73, 125, 'Full', 'px')}`}/>
      <Icon src={POCKET} alt="spotify logo" spacing="0" width={`${fluid.calc(77, 129, 'Full', 'px')}`}/>
    </PLatforms>
  );
};

export default Platforms;