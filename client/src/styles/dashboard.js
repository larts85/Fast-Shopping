import styled from "styled-components";
import { device } from "./globalStyles";

const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 30px;
  padding-right: 30px;
  @media ${device.mobileM} {
    padding: 10px;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default Dashboard;
