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
  input {
    width: 100%;
    outline: none;
    border: none;
  }
`;

export const ButtonsContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonBase = styled.button`
  padding: 8px 16px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const CancelButton = styled(ButtonBase)`
  color: #000;
  border: none;
  background: none;
  font-weight: bold;
  font-family: Roboto, Arial, sans-serif;
`;

export const AddButton = styled(ButtonBase)`
  background: #4caf50;
  :disabled {
    opacity: 0.5;
  }
`;

export const AddTaskButton = styled.button`
  padding: 0;
  align-self: flex-end;
  display: flex;
  background: transparent;
  align-items: center;
  cursor: pointer;
  color: #000;
  border: none;
  transition: 0.3s;
  font-weight: bold;
  font-family: Roboto, Arial, sans-serif;
  svg {
    margin-left: 5px;
  }
`;
