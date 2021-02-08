import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #fff;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  margin: 5px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #000;
  flex:1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  h3 {
    margin: 0;
  }
`;

export const MenuButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  svg {
    height: 22px;
    width: 22px;
  }
`;

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ToDoPlaceholder = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 20px;
  background: #c3d3dc;
  letter-spacing: 0.01428571em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #000;
`;

export const EmptyText = styled.p`
  font-style: italic;
`;
