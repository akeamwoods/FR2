import styled from "styled-components";

export const EditContainer = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 4;
  top: 0;
  width: 100%;
  textarea {
    flex: 1;
    letter-spacing: 0.01428571em;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    outline: none;
    focus: none;
    resize: none;
    border: none;
    padding: 20px;
    border-radius: 4px 4px 0 4px;
  }

`;

const ButtonBaase = styled.button`
  background: #4caf50;
  padding: 8px 16px;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const CancelButton = styled(ButtonBaase)`
background: #d2d2d2;
color: #000;
`;

export const DeleteButton = styled(ButtonBaase)`
background: #f44336;
`;

export const UpdateButton = styled(ButtonBaase)`
background: #4caf50;
`;

export const ButonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PopoverBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  zindex: 3;
`;
