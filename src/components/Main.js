import styled from 'styled-components';
import fluid from './services/fluid';
import Form from './Form';
import Platforms from './Platforms';

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  margin-top: 57px;
  font-size: 18px;
  line-height: 28px;
  position: relative;
  z-index: 2;

  h1 {
    font-weight: 300;
    font-size: ${fluid.calc(26, 48, 's', 'px')};
    line-height: ${fluid.calc(38, 56, 's', 'px')};
    color: var(--color1);
    margin: 0;
    order: 1;
  }

  span {
    color: var(--color6);
  }

  p {
    font-size: ${fluid.calc(15, 18, 's', 'px')};
    line-height: ${fluid.calc(25, 28, 's', 'px')};
    color: var(--color5);
    order: 2;
  }

  @media (min-width: 768px) {
    display: block;
    background-color: var(--color2);
    width: ${fluid.calc(635, 723, 'b', 'px')};
    text-align: left;
    margin-top: ${fluid.calc(152, 103, 'b', 'px')};
    padding-top: ${fluid.calc(93, 88, 'b', 'px')};
    padding-right: ${fluid.calc(0, 58, 'b', 'px')};

    h1 {
      font-size: ${fluid.calc(48, 52, 'b', 'px')};
      line-height: ${fluid.calc(56, 62, 's', 'px')};
    }

    p {
      width: 24.72em;
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

function Main() {
  return (
    <MainStyled>
      <h1>PUBLISH YOUR PODCASTS<br/><span>EVERYWHERE.</span></h1>
      <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
      <Form/>
      <Platforms/>
    </MainStyled>
  );
}

export default Main;