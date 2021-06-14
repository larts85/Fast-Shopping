import { device, navBarHg, Theme } from "./globalStyles";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  padding-inline: 65px;
  height: ${navBarHg};
  align-items: center;
  color: ${(props) => Theme[props.mode]?.colors.text};
  background-color: ${(props) => Theme[props.mode]?.colors.bgPrimary};
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
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
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
export const Divider = styled.div`
  background-color: ${(props) => Theme[props.mode]?.colors.bgPrimary};
  & hr {
    background-color: ${(props) => Theme[props.mode]?.colors.borderColor};
    color: ${(props) => Theme[props.mode]?.colors.borderColor};
    height: 3px;
    margin-inline: 50px;
    margin-block: 0;
  }
`;

export default Header;
