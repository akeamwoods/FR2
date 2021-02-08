import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
