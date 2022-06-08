import styled from 'styled-components';
import fluid from './components/services/fluid';
import logoUrl from './assets/desktop/logo.svg';
import BG from './assets/desktop/image-host.jpg';
import PATTERN from './assets/desktop/bg-pattern-dots.svg';
import Main from './components/Main';
import BG1 from './components/ui/BG1';

import './App.css';

const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${BG});
  background-color: var(--color2);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right -241px;
  display: flex;
  padding: 0 ${fluid.calc(24, 39, 's', 'px')};
  padding-bottom: ${fluid.calc(94, 257, 'b', 'px')};
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: ${fluid.calc(120, 39, 's', 'px')};
    position: relative;
    z-index: 2;
    
  }

  .bg-pattern {
    display: none;
  }

  

  @media (min-width: 768px) {
    background-image: none;
    padding-bottom: ${fluid.calc(257, 130, 'b', 'px')};
    padding-right: 0;
    padding-left: ${fluid.calc(39, 165, 'b', 'px')};
    display: block;
    .logo {
      margin-top: ${fluid.calc(39, 102, 'b', 'px')};
    }
    .bg-pattern {
      display: block;
      position: absolute;
      top: clamp( 718px,920px + -202px * ((var(--viewport) - 768)/672),920px + -202px * -0.5848214285714286);
      right: clamp( 506px + -506px * 1,506px + -506px * ((var(--viewport) - 768)/672),506px + -506px * -0.5848214285714286);
    }
  }

  @media (min-width: 1440px) {
    padding: ${fluid.container(24, 165, 24)};
    padding-bottom: ${fluid.calc(257, 130, 'b', 'px')};
  }
`;

const Header = styled.header`line-height: 0;`;

function App() {
  return (
    <Wrapper className='wrapper'>
      <header>
        <img src={logoUrl} alt="logo" className='logo'/>
      </header>
      <Main/>
      <BG1/>
      <aside>
              <img src={PATTERN} alt="background pattern" className='bg-pattern'/>
      </aside>
    </Wrapper>
    
  );
}

export default App;
