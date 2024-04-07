import styled from "styled-components";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TudoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 15px;

  outline: none;
  width: 342px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #d1d3d4;
`;

export const Button = styled.button`
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  width: 130px;
  height: 40px;
  border-radius: 5px;
  background: #8052ec;
  color: #ffffff;
  margin-left: 35px;
  border: none;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
  width: 500px;
  background: ${(props) => (props.isfinished ? "#E8FF8B" : "#E4E4E4")};
  border-radius: 5px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  height: 60px;

  li {
    list-style: none;
  }
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;
