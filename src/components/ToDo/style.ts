import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  letter-spacing: 0.01428571em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #000;
  align-items: flex-start;
  cursor: pointer;
  p {
    flex: 1;
    margin: 0;
  }
`;

export const EditButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s;
  background: none;
  svg {
    height: 22px;
    width: 22px;
  }
  :hover {
    opacity: 1;
  }
`;
