import { device, navBarHg } from "./globalStyles";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 50px;
  height: ${navBarHg};
  align-items: center;
  border-bottom: solid 2px grey;
  @media ${device.tablet} {
    justify-content: space-evenly;
    padding: 10px;
  }
  @media ${device.mobileM} {
    justify-content: center;
    flex-direction: column-reverse;
    padding: 10px;
    height: 200px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  & h1 {
    letter-spacing: 1px;
  }
`;

export default Header;
