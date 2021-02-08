import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const List = styled.ul`
  position: absolute;
  padding: 0;
  list-style: none;
  background: #fff;
  z-index: 2;
  margin: 0;
  right: 0;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
`;

export const ListItem = styled.li`
  cursor: pointer;
  white-space: nowrap;
  padding: 10px;
  :hover{
      background:#efefef;
  }
`;
