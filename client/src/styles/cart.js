import styled from "styled-components";
import { device } from "./globalStyles";

const Cart = styled.div`
  padding-inline: 50px;
  padding-block: 20px;
  @media ${device.mobileM} {
    padding: 20px;
  }
`;
export const Title = styled.h2`
  letter-spacing: 0.8px;
`;
export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  & h2 {
    margin: 0;
    margin-right: 3px;
  }
`;

export default Cart;
