import styled from "styled-components";
import fluid from "../services/fluid";
import BG from '../../assets/desktop/image-host.jpg';

const BG1 = styled.div`
  background-image: url(${BG});
  background-position: ${fluid.calc(-274, -14, 'b', 'px')};
  background-repeat: no-repeat;
  width: ${fluid.calc(491, 888, 'b', 'px')};
  height: ${fluid.calc(767, 640, 'b', 'px')};
  position: absolute;
  right: 0;
  top: ${fluid.calc(0, 130, 'b', 'px')};
  z-index: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export default BG1;