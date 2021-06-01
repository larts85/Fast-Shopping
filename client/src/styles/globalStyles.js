import styled from "styled-components";

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const colors = {
  white: "#ffffff",
};

export const Button = styled.button`
  padding: 5px;
  padding-inline: 10px;
  font-weight: bold;
  border: solid 2px;
  background-color: transparent;
  box-shadow: 2px 2px 2px black;
  outline: none;
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "transparent" : "rgba(0, 0, 0, 0.08)"};
  }
`;
export const footerHg = "100px";
export const navBarHg = "100px";
export const pngShadow = "drop-shadow(2px 2px 3px rgb(0, 0, 0))";
